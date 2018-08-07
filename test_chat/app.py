from os import environ
from dotenv import load_dotenv, find_dotenv
from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from models import db, Chat

load_dotenv(find_dotenv())
app = Flask(__name__)


app.config['SECRET_KEY'] = environ.get('SECRET_KEY')
app.config['DEBUG'] = True if environ.get('DEBUG') == 'True' else False
app.config['PORT'] = 80

DOMAIN = environ.get('DOMAIN')

socketio = SocketIO(app)

app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE')
db.init_app(app)

import sys

print('This error output', file=sys.stderr)
print('This standard output', file=sys.stdout)


@app.route('/<username>/')
def open_chat(username):
    my_chat = Chat.query.all()
    return render_template('chat.html', domain=DOMAIN, chat=my_chat, username=username)


@socketio.on('new_message')
def new_message(message):
    print(str(message), file=sys.stdout)
    emit('new_message', {
        'username': message['username'],
        'text': message['text']}, broadcast=True)

    my_new_chat = Chat(username=message['username'], text=message['text'])

    db.session.add(my_new_chat)
    db.session.commit()


if __name__ == '__main__':
    # import pudb
    # pudb.set_trace()
    socketio.run(app, port=5555)

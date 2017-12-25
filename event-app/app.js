// app.js

new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',


    data: {
      event: { name: '', description: '', date: '' },
      events: []
    },

    // Anything within the ready function will run when the application loads
    ready: function() {
      // When the application loads, we want to call the method that initializes
      // some data
      this.fetchEvents();
    },

    // Methods we want to use in our application are registered here
    methods: {

      // We dedicate a method to retrieving and setting some data
      fetchEvents: function() {
        var events = [
          {
            id: 1,
            name: 'TIFF',
            description: 'Toronto International Film Festival',
            date: '2015-09-10'
          },
          {
            id: 2,
            name: 'The Martian Premiere',
            description: 'The Martian comes to theatres.',
            date: '2015-10-02'
          },
          {
            id: 3,
            name: 'SXSW',
            description: 'Music, film and interactive festival in Austin, TX.',
            date: '2016-03-11'
          }
        ];
        // $set is a convenience method provided by Vue that is similar to pushing
        // data onto an array
        this.$set('events', events);
      },

      // Adds an event to the existing events array
      addEvent: function() {
        if(this.event.name) {
          this.events.push(this.event);
          this.event = { name: '', description: '', date: '' };
        }
      },
        deleteEvent: function(index) {
          if(confirm("Are you sure you want to delete this event?")) {
            // $remove is a Vue convenience method similar to splice
            this.events.$remove(index);        
          }
        }
/*

    addEvent: function () {
      if (this.event.title.trim()) {
        // this.events.push(this.event);
        // this.event = { title: '', detail: '', date: '' };
        this.$http.post('/api/events', this.event)
          .success(function (res) {
            this.events.push(this.event);
            console.log('Event added!');
          })
          .error(function (err) {
            console.log(err);
          });
      }
    },

    deleteEvent: function (index) {
      if (confirm('確定要移除此項事件？')) {
        // this.events.splice(index, 1);
        this.$http.delete('api/events/' + event.id)
          .success(function (res) {
            console.log(res);
            this.events.splice(index, 1);
          })
          .error(function (err) {
            console.log(err);
          });
      }
}
*/

    }
});



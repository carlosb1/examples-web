<template>
  <div class="example">
      <section class="hero is-primary is-fullheight">
          <div class="hero-body">
              <div class="container">
                <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
                    <div class="column">
                        <form class="box">
                            <div class="field">
                                <label class="label">New Link</label>
                                <div class="control">
                                    <input class="input" type="text"  v-model="name" placeholder="Text input">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Text</label>
                                <div class="control">
                                    <input class="input" type="text"  v-model="text" placeholder="Text input">
                                </div>
                            </div>
                            <div class="field">
                                <button class="button is-success"  @click="onClick()">
                                    Enviar
                                </button>
                            </div>
                        </form>

                        <div class="box">
                            <table class="table">
                                <thead>
                                        <tr>
                                            <th> Name </th>
                                            <th> Text </th>
                                        </tr>
                                </thead>
                                <tbody>
                                    <template v-for="item in addedResources">
                                    <tr>
                                        <td>{{item.name}}</td>
                                        <td>{{item.text}}</td>
                                    </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </section>
 </div>
</template>

<script>
// @ is an alias to /src
import $backend from '../backend'

export default {
  name: 'example',
  components: {
  },
  data () {
    return {
      name: '',
      text: '',
      resources: [],
      addedResources: [],
      error: ''
    }
  },
  methods: {
    onClick: function () {
      var newEntry = { name: this.name, text: this.text }
      console.log(newEntry)
      this.addedResources.push(newEntry)
      $backend.postResource(newEntry)
        .then(responseData => {
          console.log(responseData)
        }).catch(error => {
          this.error = error.message
        })
    },
    fetchResource: function () {
      $backend.fetchResource()
        .then(responseData => {
          this.resources.push(responseData)
        }).catch(error => {
          this.error = error.message
        })
    },
    fetchSecureResource: function () {
      $backend.fetchSecureResource()
        .then(responseData => {
          this.resources.push(responseData)
        }).catch(error => {
          this.error = error.message
        })
    }
  }
}
</script>

<style lang="scss">
@import '../../node_modules/bulma/bulma.sass';
</style>

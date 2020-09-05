<template>

	<!--
  <div>
   <div class="container-flude">
    <h1> Main Page</h1>
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
   </div>
   </div>
   :title-link-class="linkClass(0)"
   -->
   <div>

  <div class="page-header m-3">
    <h3>Recommendations</h3>
  </div>

    <div>
  <b-card no-body class="card text-center border-dark mb-3">
    <b-tabs card>
      <b-tab active> 
      <template v-slot:title>
          <button class="btn-sm btn-block btn-success float-center"><strong> 12 </strong> </button>
      </template>
    <div class="row">
      <b class="card-title">Special title treatment</b>
    </div>
    <div class="row">
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    </div>
      </b-tab>
      <b-tab>
      <template v-slot:title>
          <button class="btn-sm btn-block btn-info float-center"><i class="fa fa-comment-o" aria-hidden="true"></i></button>
      </template>

  <div class="post-comments">

    <form>
      <div class="form-group">
        <label for="comment" class="float-left">Your Comment</label>
        <textarea name="comment" class="form-control" rows="3"></textarea>
      </div>
      <div>
      <hr>
      <div class="row comment">
        <div class="head">
        <small><strong class='user'>Diablo25</strong> 30.10.2017 12:13</small>
        </div>    
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non lorem elementum, accumsan magna sed, faucibus mauris. Nulla pellentesque ante nibh, ac hendrerit ante fermentum sed. Nunc in libero dictum, porta nibh pellentesque, ultrices dolor. Curabitur nunc ipsum, blandit vel aliquam id, aliquam vel velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed sit amet mi dignissim, pretium justo non, lacinia libero. Nulla facilisi. Donec id sem velit. </p>
      </div>
      <div class="row comment">
        <div class="head">
          <small><strong class='user'>Giesche</strong> 30.10.2017 12:13</small>
          </div>    
          <p>Praesent molestie ante nec metus convallis aliquam. Ut aliquam tincidunt mollis. Maecenas et ex sit amet est vehicula ultrices sed sit amet elit. Suspendisse potenti. Aenean et quam ut purus convallis porttitor. Mauris porttitor pretium elementum. Duis blandit elit tincidunt ipsum ultricies, ut faucibus lorem facilisis. Proin ipsum turpis, pharetra in lorem ac, porta ullamcorper velit. Proin gravida odio eget elit ultricies sodales. Vivamus vel tincidunt ligula. Proin pulvinar pellentesque velit eget luctus. Aliquam vitae enim ut purus vestibulum sollicitudin sit amet eget lacus. Nunc tempus fringilla tincidunt. </p>
          </div>
      </div>
      <button type="submit" class="btn  btn-outline-info float-left m-2">Send</button>
    </form>
     </div>
      </b-tab>
    </b-tabs>
    <b-card-footer class="border-dark">        
      <div class="row m-3">
          <div class="col">
            <vue-tags-input
              v-model="tag"
              :tags="tags"
              @tags-changed="newTags => tags = newTags"
            />
          </div>
          <div><button class="btn btn-block btn-warning float-center"><i class="fa fa-star" aria-hidden="true"></i> </button> </div>
          <div class="col">
                <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                    <button type="button" class="btn btn-success">Approved</button>
                    <button type="button" class="btn btn-secondary">Not clear</button>
                    <button type="button" class="btn btn-danger ">Fake</button>
                </div>
          </div>
      </div></b-card-footer>

  </b-card>
</div>
   </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueTagsInput from '@johmun/vue-tags-input';
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'Page',
  components: { VueTagsInput,},

  data() {
   return {
	tag: '',
	tags: [],
   };
 },

 computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
ul.nav li a, ul.nav li a:visited {
    color: #000000 !important;
}

ul.nav li a:hover, ul.nav li a:active {
    color: #000000 !important;
}

ul.nav li.active a {
    color: #000000 !important;
}

  /* default styles for all the tags */
  .vue-tags-input .ti-tag {
    position: relative;
    background: #ebde6e;
    background-color: #051d27;
    color: #ffffff;
  }
</style>

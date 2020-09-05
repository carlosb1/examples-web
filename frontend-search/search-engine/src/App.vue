<template>
<div>
<nav class="navbar navbar-expand-md  navbar-dark bg-dark">
    <ul class="navbar-nav">
  <li class="nav-item">
    <h4 class="navbar-brand text-white ">Fake news detector</h4>
    </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Your recommendations</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Trending</a>
    </li>
      </ul>
        <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
        <ul class="navbar-nav">
          <li class="nav-item"><a  class="nav-link" href="#"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></a></li>
          <li class="nav-item" ><a  class="nav-link"  href="#"><i class="fa fa-user fa-2x" aria-hidden="true"></i></a></li>
        </ul>
      </div>
  </nav>
   
  <div class="container">

  <!-- Navbar content -->
    <Page />
  </div>
    </div>

</template>

<script>
import Page from './components/Page.vue'
import '../node_modules/font-awesome/css/font-awesome.min.css';
export default {
  name: 'App',
  components: {
    Page
  }
}
</script>

<style></style>

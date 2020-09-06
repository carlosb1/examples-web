<template>
<div>
<nav class="navbar navbar-expand-md  navbar-dark bg-dark">
    <ul class="navbar-nav">
  <li class="nav-item">
    <h4 class="navbar-brand text-white ">Fake news detector</h4>
    </li>
      <li class="nav-item">
      <router-link to="/" class="nav-link">Your recommendations</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/Trending" class="nav-link">Trending</router-link>
    </li>
      </ul>
        <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
        <ul class="navbar-nav">
         <!-- <li class="nav-item"><router-link to="/signin" class="nav-link"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></router-link></li> -->
          <li class="nav-item" ><router-link to="/login"  class="nav-link"  ><i class="fa fa-user fa-2x" aria-hidden="true"></i></router-link></li>
        </ul>
      </div>
  </nav>
   
  <div class="container">

  <!-- Navbar content -->
    <router-view class="view"></router-view>
  </div>
    </div>

</template>

<script>
import '../node_modules/font-awesome/css/font-awesome.min.css';
export default {
  name: 'App',
  components: {
  }
}
</script>

<style></style>

<template>
  <div id="app">

    <div v-if="isLogin == false">
      <Login v-on:loginJadiTrue="loginTrue" :cekDariLogin="isLogin"></Login>
    </div>
    <div v-else>
      <Navbar></Navbar>
      <!-- GRID SYSTEM -->
      <div class="container">
        <div class="row">
          <Sidebar></Sidebar>
          <router-view></router-view>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Login from './components/Login'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  data(){
    return {
      msg: 'Welcome to Your Vue.js App',
      isLogin:false
    }
  },
  components:{
    Navbar, Sidebar, Login
  },
  created:function(){
    if(localStorage.getItem('token') != null){
      this.isLogin = true
    }
    else {
      this.isLogin = false
    }
  },
  methods:{
    loginTrue(){
      console.log('sebelum',this.isLogin);
      this.isLogin = true;
      console.log('sesudah',this.isLogin);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

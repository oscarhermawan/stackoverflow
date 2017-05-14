<template>
  <div class="navbar navbar-fixed-top navbar-default">
  	<div class="container">
      <div class="navbar-header"><a class="navbar-brand">HacktiOverFlow</a>
      </div>
        <div class="navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a>
                </li>
                <li><a @click="logOut">Log Out</a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'navbar',
  methods:{
    logOut:function(){
      window.localStorage.removeItem('token')
      window.location.href = "/"
    }
  }
}
</script>

<style>
</style>

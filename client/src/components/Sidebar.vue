<template>
  <div class="col-md-3">
      <div class="well">
          <ul class="nav ">
              <li class="nav-header">All Questions</li>
              <li class="active" v-for="list in lists_question"><a v-on:click="menujuQuestion(list)">{{list.title}}</a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      lists_question : []
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData:function(){
      let self = this
      axios.get('http://localhost:3000/questions')
      .then((questions)=>{
        // console.log(questions);
        self.lists_question = questions.data
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    menujuQuestion:function(list){
      this.$router.push(`/questions/${list._id}`)
    }
  }
}
</script>

<style>
</style>

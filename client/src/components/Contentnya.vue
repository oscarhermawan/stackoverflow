<template>
  <div class="col-md-9">
    <div class="thumbnail">
      <div class="aturjarak">

          <div class="media" v-for="list in lists_question">
     				 <a class="pull-left" v-on:click="menujuQuestion(list)"><img alt="Bootstrap Media Preview" src="http://lorempixel.com/64/64/" class="media-object" /></a>
     				<div class="media-body">
     					<h4 class="media-heading">
     						{{list.asked_by.username}}
     					</h4>
              <p>{{list.description}}</p>
     				</div>
     			</div>

        </div>
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
          console.log(questions);
          self.lists_question = questions.data
        })
        .catch((err)=>{
          console.log(err);
        })
      },
      menujuQuestion:function(list){
        console.log(list._id);
        console.log('/question/' + list._id)
        this.$router.push(`/questions/${list._id}`)
      }
    }
  }
</script>

<style scoped>
  .aturjarak{
    margin:20px;
  }
  h4{
    text-align: left;
  }
  p{
    text-align: left;
  }
</style>

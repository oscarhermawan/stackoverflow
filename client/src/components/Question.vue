<template>
  <div class="col-md-9">
    <div class="thumbnail">
      <div class="aturjarak">


					<div>
						<input type="question" v-model="title" class="form-control" placeholder="Title"/>
					</div>
          <div>
						<input type="question" v-model="description" class="form-control" placeholder="Ask Something"/>
					</div>
          <button class="btn btn-default" v-on:click="postQuestion">
							Post
					</button>

          <div class="media" v-for="list in lists_question">
     				 <a class="pull-left"><img alt="Bootstrap Media Preview" src="http://lorempixel.com/64/64/" class="media-object" /></a>
     				<div class="media-body">
     					<h4 class="media-heading">
     						{{list.asked_by.username}}
     					</h4>
              <p>{{list.description}}</p>

              <!-- KOMENNYA -->
              <div class="media" v-for="listanswer in list.answers">
         				 <a class="pull-left"><img alt="Bootstrap Media Preview" src="http://lorempixel.com/64/64/" class="media-object" /></a>
         				<div class="media-body">
         					<h4 class="media-heading">
         						{{listanswer.answer_by.username}}
         					</h4>
                  <p>{{listanswer.description}}</p>
         				</div>
         			</div>
     				</div>
     			</div>

        </div>
		 </div>
	</div>
</template>


<script>
  export default{
    props:['id'],
    data(){
      return{
        title:'',
        description:'',
        lists_question : [],
        url:''
      }
    },
    created(){
      this.getData(this.id)
    },
    methods:{
      getData:function(id){
        let self = this
        axios.get(`http://localhost:3000/questions/${this.id}`)
        .then((questions)=>{
          console.log(questions.data);
          self.lists_question = [questions.data]
        })
        .catch((err)=>{
          console.log(err);
        })
      },
      postQuestion(){
        let manualId = '59183cc76f3daa449c08bec9'
        let object = {
          asked_by:manualId,
          title:this.title,
          description:this.description
        }
        axios.post('http://localhost:3000/questions', object)
        .then((questions)=>{
          console.log(questions.data);
        })
        .catch((err)=>{
          console.log(err);
        })
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

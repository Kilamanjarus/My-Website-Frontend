<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Post a new Journal!",
      newJournalPost: {},
      newGoalsPost: [],
      newProblemsPost: [],

      day: "Friday",
      jpID: 0,

      newProblem: {},
      newGoal: {},

      inputName: "",
      inputDescription: "",
      inputPicture: null,
      imageSrc: null,
      imagePreviewElement: null,
    };
  },
  created: function () { },
  methods: {
    postJournal: function () {
      this.newJournalPost.image = this.inputPicture

      var myFormData = new FormData();
      myFormData.append('pictureFile', document.getElementById('blog-post-image').files[0]);
      myFormData.append('title', this.newJournalPost.title);
      myFormData.append('post', this.newJournalPost.post);
      myFormData.append('date', this.newJournalPost.date);

      // console.log(myFormData)
      if (this.day === "Friday") {
        axios.post('https://kilamanjarus-me.herokuapp.com/blogs.json', myFormData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          // console.log(response.data)
          this.jpID = response.data.id
          // console.log(this.jpID)
          this.postGoals();
          this.postProblems();
          window.location.href = ""
        })
      }

      // axios.post("https://kilamanjarus-me.herokuapp.com/blogs.json", , {
      //   headers: {
      //     'Content-Type': multipart / formdata
      //   }
      // }).then(response => {
      //   // console.log(response.data)
      //   this.jpID = response.data.id
      //   // console.log(this.jpID)
      //   this.postGoals();
      //   this.postProblems();
      // })
    },
    uploadFile: function () {
      this.imageSrc = URL.createObjectURL(document.getElementById('blog-post-image').files[0]);
      this.imagePreviewElement = document.querySelector("#preview-selected-image");
      this.imagePreviewElement.src = this.imageSrc;
      this.imagePreviewElement.style.display = "block";
      // console.log(this.imageSrc)
      // console.log(document.querySelector("#preview-selected-image"))
      this.inputPicture = document.getElementById('blog-post-image').files[0]
      // console.log(this.inputPicture === null || this.inputPicture === {})
    },
    postProblems: function () {
      this.newProblemsPost.forEach(problem => {
        // console.log(problem)
        problem.blog_post_id = this.jpID
        axios.post("https://kilamanjarus-me.herokuapp.com/problems.json", problem).then(response => {
          // console.log(response.data)
        })
      })
    },
    postGoals: function () {
      this.newGoalsPost.forEach(goal => {
        // console.log(goal)
        goal.blog_post_id = this.jpID
        axios.post("https://kilamanjarus-me.herokuapp.com/goals.json", goal).then(response => {
          // console.log(response.data)
        })
      })
    },
    addGoal: function (goal) {
      // console.log(goal)
      this.newGoalsPost.push(goal)
      this.newGoal = {}
      // console.log(this.newGoalsPost)
    },
    addProblem: function (problem) {
      // console.log(problem)
      this.newProblemsPost.push(problem)
      this.newProblem = {}
      // console.log(this.newProblemsPost)
    },
  },
};
</script>

<template>
  <div class="home">
    <div id="main" class="wrapper style1">
      <div class="container">
        <header class="major">
          <h2>New Journal Posting</h2>
        </header>
        <div class="row gtr-150">
          <div class="col-8 col-12-medium">

            <!-- Content -->
            <section id="content">
              <h3>Journal Post</h3>
              <div>Title: <input v-model="newJournalPost.title" type="textarea" class="textarea-small"></div>
              <br />
              <div>Image Attachment
              </div>
              <img id="preview-selected-image" />
              <input type="file" id="blog-post-image" accept="image/png, image/jpeg" @change=uploadFile()>
              <br />
              <textarea class="t-area-2" v-model="this.newJournalPost.post"></textarea>
            </section>


            <div>
              <br />
              <div>Date: <input v-model="newJournalPost.date" type="textarea" class="textarea-small"></div>
              <p></p>
              <div>Current Problems:</div>
              <ul>
                <li v-for="problem in this.newProblemsPost">{{ problem.problem }}</li>
              </ul>
              <div>Current Goals:</div>
              <ul>
                <li v-for="goal in this.newGoalsPost">{{ goal.goal }}</li>
              </ul>
            </div>
          </div>
          <div class="col-4 col-12-medium">

            <!-- Sidebar -->
            <section id="sidebar">
              <section>
                <h3>Problems</h3>
                <textarea v-model="this.newProblem.problem"></textarea>
                <p></p>
                <footer>
                  <ul class="actions">
                    <li><button class="button" @click="this.addProblem(this.newProblem)">Add Problem</button></li>
                  </ul>
                </footer>
              </section>
              <hr />
              <section>
                <h3>Goals</h3>
                <textarea v-model="this.newGoal.goal"></textarea>
                <p></p>
                <footer>
                  <ul class="actions">
                    <li><button class="button" @click="this.addGoal(this.newGoal)">Add Goal</button></li>
                  </ul>
                </footer>
              </section>
            </section>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-jp-button">
    <div class="vertical-center-jp-button">
      <button class="button" @click="this.postJournal()">Post Journal</button>
    </div>
  </div>
</template>

<style>
textarea {
  width: 100%;
  height: 66px;
  padding: 3px 10px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  color: black;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
  word-wrap: normal;
}

.t-area-2 {
  height: 200px;
}

.textarea-small {
  color: black;
}

.container-jp-button {
  height: 200px;
  position: relative;
}

.vertical-center-jp-button {
  margin: 0;
  text-align: center;
}
</style>
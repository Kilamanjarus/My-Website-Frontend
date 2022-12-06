<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Post a new Journal!",
      newJournalPost: {},
      newGoalsPost: [],
      newProblemsPost: [],

      jpID: 0,

      newProblem: {},
      newGoal: {},

      inputName: "",
      inputDescription: "",
      inputPicture: null
    };
  },
  created: function () { },
  methods: {
    postJournal: function () {
      this.newJournalPost.image = this.inputPicture

      axios.post("http://localhost:3000/blogs.json", this.newJournalPost).then(response => {
        // console.log(response.data)
        this.jpID = response.data.id
        // console.log(this.jpID)
        this.postGoals();
        this.postProblems();
      })
    },
    postProblems: function () {
      this.newProblemsPost.forEach(problem => {
        // console.log(problem)
        problem.blog_post_id = this.jpID
        axios.post("http://localhost:3000/problems.json", problem).then(response => {
          // console.log(response.data)
        })
      })
    },
    postGoals: function () {
      this.newGoalsPost.forEach(goal => {
        // console.log(goal)
        goal.blog_post_id = this.jpID
        axios.post("http://localhost:3000/goals.json", goal).then(response => {
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
    previewImage: function (event) {
      imageFiles = event.target.files;
      imageFilesLength = this.imageFiles.length;
      if (this.imageFilesLength > 0) {
        imageSrc = URL.createObjectURL(imageFiles[0]);
        imagePreviewElement = document.querySelector("#preview-selected-image");
        this.imagePreviewElement.src = this.imageSrc;
        this.imagePreviewElement.style.display = "block";
      }
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
              <div class="image-preview-container">
                <div class="preview">
                  <img id="preview-selected-image" />
                </div>
                <label for="file-upload">Upload Image</label>
                <input type="file" id="file-upload" accept="image/*" onchange="previewImage(event)" />
              </div>
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
  position: absolute;
  left: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.image-preview-container {
  width: 50%;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3rem;
  border-radius: 20px;
}

.image-preview-container img {
  width: 100%;
  display: none;
  margin-bottom: 30px;
}

.image-preview-container input {
  display: none;
}

.image-preview-container label {
  display: block;
  width: 45%;
  height: 45px;
  margin-left: 25%;
  text-align: center;
  background: black;
  color: #fff;
  font-size: 15px;
  text-transform: Uppercase;
  font-weight: 400;
  border-radius: 5px;
  border-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
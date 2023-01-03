<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Welcome to my Journals!",
      journalPost: [],
    };
  },
  created: function () {
    this.journalPostView();
  },
  methods: {
    journalPostView: function () {
      axios.get(`https://kilamanjarus-me.herokuapp.com/blogs/${this.$route.params.id}.json`).then(response => {
        this.journalPost = response.data
        console.log(this.journalPost)
        this.journalImage = document.querySelector("#work-journal-image")
        // console.log(this.journalImage)
        this.journalImage.src = response.data.image_url
        // console.log(this.journalImage.src)
        this.journalImage.style.display = "block";
      }).catch(error => {
        this.error = error.data
      })
    },
  },
};
</script>

<template>
  <div class="home">
    <div id="main" class="wrapper style1">
      <div class="container">
        <header class="major">
          <h2>{{ journalPost.title }}</h2>
        </header>
        <!-- Content -->
        <section id="content">
          <img src="" alt="" id="work-journal-image" class="image-fit" />
          <h3>{{ journalPost.post }}</h3>
          <h2>Problems</h2>
          <ul v-for="problem in journalPost.problems">
            <li>{{ problem.problem }}</li>
          </ul>
          <h2>Goals</h2>
          <ul v-for="goal in journalPost.goals">
            <li>{{ goal.goal }}</li>
          </ul>
        </section>

      </div>
    </div>
  </div>
</template>

<style>

</style>
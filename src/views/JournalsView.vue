<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Welcome to my Journals!",
      journalPosts: [],
    };
  },
  created: function () {
    this.journalPostIndex();
  },
  methods: {
    journalPostIndex: function () {
      axios.get("https://kilamanjarus-me.herokuapp.com/blogs.json").then(response => {
        // console.log(response.data)
        this.journalPosts = response.data.reverse()
        // this.journalPosts = this.journalPosts.reverse()
        // console.log(this.journalPosts)
        // console.log(this.journalPost)
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
          <h2>My Work Journals</h2>
          <p>Here is were I will have a weekly journal post of my progress into learning to code!</p>
        </header>

        <!-- Content -->
        <div v-for="journalPost in this.journalPosts">
          <section id="content">
            <h3> <a v-bind:href="`/journals/${journalPost.id}`">{{ journalPost.title }}</a></h3>
            <p>{{ journalPost.date }}</p>
            <p>{{ journalPost.post }}</p>
            <h3>Problems</h3>
            <ul v-for="problem in journalPost.problems">
              <li>{{ problem.problem }}</li>
            </ul>
            <h3>Goals</h3>
            <ul v-for="goal in journalPost.goals">
              <li>{{ goal.goal }}</li>
            </ul>
          </section>
        </div>

      </div>
    </div>
  </div>
</template>

<style>

</style>
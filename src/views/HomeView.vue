<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Welcome to my Website!",
      journalPosts: [],
      journalPost: {},

      email: { email: "Enter Your Email Here." },
    };
  },
  created: function () {
    this.journalPostIndex()
  },
  methods: {
    journalPostIndex: function () {
      axios.get("http://localhost:3000/blogs.json").then(response => {
        console.log(response.data)
        this.journalPosts = response.data
        this.journalPost = this.journalPosts[this.journalPosts.length - 1]
        // console.log(this.journalPosts)
        console.log(this.journalPost)
        this.imageSrc = URL.createObjectURL(this.journalPost.image)
        this.imagePreviewElement = document.querySelector("#preview-selected-image");
        this.imagePreviewElement.src = this.imageSrc;
        this.imagePreviewElement.style.display = "block";
        console.log(this.imageSrc)
        console.log(this.imagePreviewElement)

      }).catch(error => {
        this.error = error.data
      })
    },
    contactEmailPost: function () {
      axios.post("http://localhost:3000/emails.json", this.email).then(response => {
        console.log(response.data)
      })
    }
  },
};

</script>

<template>
  <div id="page-wrapper">

    <!-- Banner About Me -->
    <section id="banner">
      <div class="content">
        <header>
          <h2>Maxwell Lillie</h2>
          <p>Full-Stack Software Engineer, Freelance 3D Artist</p>
        </header>
        <span class="image"><img src="images/Me.jpg" alt="" /></span>
      </div>
      <a href="#one" class="goto-next scrolly">Next</a>
    </section>

    <!-- One Education -->
    <section id="one" class="spotlight style1 bottom">
      <span class="image fit main"><img src="images/background-1.jpeg" alt="" /></span>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-4 col-12-medium">
              <header>
                <h2><u>Education</u></h2>
                <p><b>Actualize Graduate and Assocatiates in the Applied Sceiences of 3D Modeling and Animation </b></p>
              </header>
            </div>
            <div class="col-4 col-12-medium">
              <p>Having recently finished my software engineering bootcamp with Actualize, I am well versed in the
                programming languages of Ruby, Javascript, Css, and HTML, and have recently taught myself Python. Beyond
                that, I also use Ruby on Rails, Vue.js, Django, Bootstrap for website development.</p>
            </div>
            <div class="col-4 col-12-medium">
              <p>For my 3D art, I am mainly a Character and Creature Design artist, with a majority revolving around
                table top miniature creation and VrChat models. To these ends, I use Blender, 3Ds Max, Zbrush,
                Substaince Painter and Designer, and Unity.</p>
            </div>
          </div>
        </div>
      </div>
      <a href="#two" class="goto-next scrolly">Next</a>
    </section>

    <!-- Two Skills and Work History -->
    <section id="two" class="spotlight style2 right">
      <span class="image fit main"><img src="images/pic03.jpg" alt="" /></span>
      <div class="content">
        <header>
          <h2 class="side-bar-head">My Skills and Work History!</h2>
          <h3 class="side-bar-title">Programming Languages and Frameworks!</h3>
          <h1 class="side-bar-text">Ruby, Ruby on Rails, Javascript, Vue.js, HTML, CSS, Python, Django</h1>
          <h3 class="side-bar-title">KJ Studios (Freelance) | 3D Modeler</h3>
          <h1 class="side-bar-text">Produced 12 character models to be imported and used in the videogame VRChat using
            programs such as
            Blender, Zbrush, Substance Painter/Designer, Unity, and model databases for foreign game model integration
          </h1>
          <h1 class="side-bar-text">Determined client specifications, goals, budget, and timeline in order to create
            animated introductions
            for content creators.</h1>
          <h3 class="side-bar-title">Total Wine | Merchandiser</h3>
          <h1 class="side-bar-text">Managed store online ordering operations including processing orders, cataloging
            inventory, and
            facilitating curbside pickup.
          </h1>
          <h1 class="side-bar-text">Trained 8 new employees on store software, product locations, and customer service
            skills
          </h1>
        </header>
      </div>
      <a href="#three" class="goto-next scrolly">Next</a>
    </section>

    <!-- Three Work Journal -->
    <section id="three" class="spotlight style3 left">
      <span class="image fit main bottom"><img id="preview-selected-image" alt="" /></span>
      <div class="content">
        <header>
          <h2 class="side-bar-head">Work Journal #{{ this.journalPosts.length }}</h2>
          <h2 class="side-bar-title">{{ this.journalPost.title }}</h2>
        </header>
        <h1 class="side-bar-text">{{ this.journalPost.post }}</h1>
        <!-- <h3 class="side-bar-title">Problems</h3>
        <h1 class="side-bar-text">{{ this.journalPost.problems }}</h1>
        <h3 class="side-bar-title">Goals</h3>
        <h1 class="side-bar-text">{{ this.journalPost.goals }}</h1> -->
        <ul class="actions">
          <li><a href="/journals" class="button">Read More!</a></li>
        </ul>
      </div>
      <a href="#four" class="goto-next scrolly">Next</a>
    </section>

    <!-- Four My Projects -->
    <section id="four" class="wrapper style1 special fade-up">
      <div class="container">
        <header class="major">
          <h2>My Projects!</h2>
          <p>Below are links to both my websites and apps that I have developed, are WIP's, and my Art Portfolio!</p>
        </header>
        <div class="box alt">
          <div class="row gtr-uniform">
            <section class="col-4 col-6-medium col-12-xsmall">
              <span class="icon solid alt major fa-dumbbell"></span>
              <h3>Workout your Workouts!</h3>
              <p>A website built to customize workouts with a database of over 1300+ exercises using a backend RESTful
                API with MVC architecture built with Ruby on Rails, and a frontend multi page
                application built with npm, webpack, Vue.js, and Bootstrap.</p>
            </section>
            <section class="col-4 col-6-medium col-12-xsmall">
              <span class="icon solid alt major fa-cube"></span>
              <h3>My Sketchfab</h3>
              <p>Here is where I post a lot of my 3D art! Its hosted on a website where it is rendered and manipulatable
                in a 360 degree fashion, its a
                perfect website for any 3D artist!</p>
            </section>
            <section class="col-4 col-6-medium col-12-xsmall">
              <span class="icon solid alt major fa-code-branch"></span>
              <h3>My Github</h3>
              <p>Here is where you will find most, if not all, of my projects!</p>
            </section>
            <!-- <section class="col-4 col-6-medium col-12-xsmall">
              <span class="icon solid alt major fa-paper-plane"></span>
              <h3>Non semper interdum</h3>
              <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
            </section>
            <section class="col-4 col-6-medium col-12-xsmall">
              <span class="icon solid alt major fa-file"></span>
              <h3>Odio laoreet accumsan</h3>
              <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
            </section>
            <section class="col-4 col-6-medium col-12-xsmall">
              <span class="icon solid alt major fa-lock"></span>
              <h3>Massa arcu accumsan</h3>
              <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
            </section> -->
          </div>
        </div>
        <!-- <footer class="major">
          <ul class="actions special">
            <li><a href="#" class="button">Unused Button, Decide What to Do</a></li>
          </ul>
        </footer> -->
      </div>
    </section>

    <!-- Five Contact Me -->
    <section id="five" class="wrapper style2 special fade">
      <div class="container">
        <header>
          <h2>Get In Contact With Me!</h2>
          <p>Enter your contact email below and I'll get back to you asap!</p>
        </header>
        <input type="email" v-model="this.email.email" class="input-email-box">
        <button @click="this.contactEmailPost()" class="button-email">Get Started</button>
      </div>
    </section>
  </div>
</template>

<style>
.side-bar-head {
  font-size: 1.75em;
  margin-bottom: 0px;
  text-decoration: underline;
}

.side-bar-title {
  font-size: 1.5em;
  margin-bottom: 15px;
}

.side-bar-text {
  font-weight: normal;
  color: rgb(173, 172, 172);
}

.button-email {
  background-color: #334e6f;
  /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
}

input[type="email"] {
  display: inline-block;
  width: 500px;
}
</style>
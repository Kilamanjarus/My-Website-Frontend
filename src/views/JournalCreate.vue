<script>
export default {
  data: function () {
    return {
      message: "Post a new Journal!",
      newJournalPost: {},
      newGoalsPost: [],
      newProblemsPost: [],

      newProblem: "",
      newGoal: "",
    };
  },
  created: function () { },
  methods: {
    postJournal: function () {

    },
    addGoal: function (goal) {
      // console.log(goal)
      this.newGoalsPost.push(goal)
      // console.log(this.newGoalsPost)
    },
    addProblem: function (problem) {
      // console.log(problem)
      this.newProblemsPost.push(problem)
      // console.log(this.newProblemsPost)
    }
  },
};
</script>

<template>
  <div class="home">
    <div id="main" class="wrapper style1">
      <div class="container">
        <header class="major">
          <h2>New Journal Posting</h2>
          <p>Enter Password to unlock this feature!</p>
        </header>
        <div class="row gtr-150">
          <div class="col-8 col-12-medium">

            <!-- Content -->
            <section id="content">
              <h3>Journal Post</h3>
              <textarea class="t-area-2" v-bind="this.newJournalPost.post"></textarea>
            </section>


            <div>
              <p></p>
              <p>Current Problems:</p>
              <p v-for="problem in this.newProblemsPost"> {{ problem }}</p>
              <p>Current Goals:</p>
              <p v-for="goal in this.newGoalsPost"> {{ goal }}</p>
            </div>
          </div>
          <div class="col-4 col-12-medium">

            <!-- Sidebar -->
            <section id="sidebar">
              <section>
                <h3>Problems</h3>
                <textarea v-model="this.newProblem"></textarea>
                <p></p>
                <footer>
                  <ul class="actions">
                    <li><a href="#" class="button" @click="this.addProblem(this.newProblem)">Add Problem</a></li>
                  </ul>
                </footer>
              </section>
              <hr />
              <section>
                <h3>Goals</h3>
                <textarea v-model="this.newGoal"></textarea>
                <p></p>
                <footer>
                  <ul class="actions">
                    <li><a href="#" class="button" @click="this.addGoal(this.newGoal)">Add Goal</a></li>
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
</style>
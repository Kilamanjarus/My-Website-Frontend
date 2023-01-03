
<template>
  <div id="app">
    <!-- Header -->
    <header id="header">
      <!-- <h1 id="logo"><a href="index.html">Landed</a></h1> -->
      <nav id="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li>
            <a href="/journals">Journals</a> |
            <a href="/journalnew">Journal Post</a> |
            <a href="/art">Art</a> |
            <a href="/interests">Random Interests</a>
          </li>
          <!-- <li><a href="#" class="button primary">Sign Up</a></li> -->
        </ul>
      </nav>
    </header>

    <!-- ROUTER VIEW -->
    <router-view />

    <!-- Footer -->
    <footer id="footer">
      <ul class="icons">
        <li><a href="https://twitter.com/kilamanjarus" class="icon brands alt fa-twitter"><span
              class="label">Twitter</span></a></li>
        <!-- <li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li> -->
        <li><a href="https://www.linkedin.com/in/kilamanjarus/" class="icon brands alt fa-linkedin-in"><span
              class="label">LinkedIn</span></a></li>
        <!-- <li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li> -->
        <li><a href="https://github.com/kilamanjarus" class="icon brands alt fa-github"><span
              class="label">GitHub</span></a></li>
        <li><a href="#" class="icon solid alt fa-envelope"><span class="label"></span></a></li>
      </ul>
      <ul class="copyright">
        <li>&copy; Untitled. All rights reserved.</li>
        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </footer>
  </div>
  <base href="/">
  <component is="script" src="/assets/js/jquery.min.js"></component>
  <component is="script" src="/assets/js/jquery.scrolly.min.js">
  </component>
  <component is="script" src="/assets/js/jquery.dropotron.min.js">
  </component>
  <component is="script" src="/assets/js/jquery.scrollex.min.js">
  </component>
  <component is="script" src="/assets/js/browser.min.js">
  </component>
  <component is="script" src="/assets/js/breakpoints.min.js">
  </component>
  <component is="script" src="/assets/js/util.js">
  </component>
  <component is="script" src="/assets/js/main.js">
  </component>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/fontawesome.min.css"
    integrity="sha384-z4tVnCr80ZcL0iufVdGQSUzNvJsKjEtqYZjiQrrYKlpGow+btDHDfQWkFjoaz/Zr" crossorigin="anonymous">
</template>

<style>

</style>

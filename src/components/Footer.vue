<template>
  <div class="main-footer">
    <div class="copyright">
      <p>© 2021. Segel-Team. Alle Rechte vorbehalten</p>
    </div>
    <div class="footer-icons">
      <img src="../assets/images/twitter.png" />
      <!-- Google Chrome hates svgs :) -->
      <img src="../assets/images/facebook.svg" />
    </div>
    <div class="footer-nav">
      <ul>
        <li>
          <router-link to="/about">Impressum</router-link>
          <router-link to="/gallery">Datenschutz</router-link>
          <router-link to="/crew">Rechtliches</router-link>
          <router-link to="/kontakt">Copyright</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.main-footer {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  position: relative;
  background: $light-bg;
}
.copyright p {
  font-size: 13px;
  color: #717171;
  margin-bottom: 0 !important;
}
.footer-icons img:first-of-type {
  margin-right: 0.5rem;
}
.footer-icons img:last-of-type {
  margin-left: 0.5rem;
}

.footer-nav ul {
  margin-bottom: 0;
  padding-left: 0;
}
.footer-nav ul li {
  list-style: none;
}
.footer-nav ul li a {
  color: black;
  text-decoration: none;
  margin-right: 0.5rem;
  font-size: 13px;
}
.footer-nav ul li a:last-of-type {
  margin-right: 0 !important;
}

//media queries

@media screen and (max-width: 768px) {
  .main-footer {
    flex-direction: column;
  }
  .copyright {
    margin: 0.5rem;
  }
  .footer-icons {
    margin: 0.5rem;
  }
  .footer-nav {
    margin: 0.5rem;
  }
}
</style>

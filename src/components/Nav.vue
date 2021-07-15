<template>
  <nav>
    <div class="nav-links col-9">
      <ul>
        <li>
          <router-link to="/about">About Us</router-link>
          <router-link to="/gallery">Gallery</router-link>
          <router-link to="/crew">Crew</router-link>
          <router-link to="/kontakt">Kontakt</router-link>
        </li>
        <div class="mobile-menu">
          <img
            @click="toggleMobileNav"
            alt="mobile-nav-button"
            :src="require(`../assets/images/${icon}.svg`)"
          />
        </div>
      </ul>
    </div>
    <div class="logo-box col-3">
      <img
        @click="reloadPage"
        alt="Segel Logo"
        src="../assets/images/segel_logo.png"
      />
    </div>
    <div
      v-show="isMobileNavOpen"
      class="mobile-menu-container swing-in-top-fwd"
    >
      <ul>
        <li>
          <router-link to="/about">About Us</router-link>
          <router-link to="/gallery">Gallery</router-link>
          <router-link to="/crew">Crew</router-link>
          <router-link to="/kontakt">Kontakt</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      isMobileNavOpen: false,
      icon: "water-waves",
    };
  },
  methods: {
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
      if (this.isMobileNavOpen) {
        this.icon = "exit";
      } else {
        this.icon = "water-waves";
      }
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style lang="scss">
nav {
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.nav-links {
  justify-content: start;
  display: flex;
  align-items: center;
}
.nav-links ul {
  margin-bottom: 0;
}
nav ul li {
  list-style: none;
}
nav ul li a {
  padding: 1rem;
  color: black;
  text-decoration: none;
  align-items: center;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
}
.logo-box {
  background: $red;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.logo-box img {
  width: 70%;
}
.mobile-menu {
  display: none;
}
.mobile-menu-container {
  width: 100%;
  height: 275px;
  background-color: #fff;
  -webkit-clip-path: polygon(100% 0, 100% 65%, 50% 75%, 0 65%, 0 0);
  clip-path: polygon(100% 0, 100% 50%, 50% 75%, 0 50%, 0 0);
  top: 100%;
  position: absolute;
  z-index: 4;
}
.mobile-menu-container ul {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 2rem;
  padding-right: 0;
  padding-left: 0;
}
.mobile-menu-container ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mobile-menu-container ul li a {
  padding: 5px;
  color: black;
  text-decoration: none;
  align-items: center;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
}
nav {
  position: fixed;
  z-index: 4;
  width: 100%;
  max-width: 1400px;
}

//media queries

@media screen and (max-width: 768px) {
  .nav-links ul li a {
    font-size: 14px !important;
  }
}

@media screen and (max-width: 550px) {
  .nav-links {
    width: 50% !important;
  }
  .mobile-menu {
    display: block;
    color: black;
    width: 40px;
    height: 40px;
  }
  .nav-links li {
    display: none;
  }
  .logo-box {
    width: 50% !important;
  }
}

//animations
.swing-in-top-fwd {
  -webkit-animation: swing-in-top-fwd 0.5s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
}

@-webkit-keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}
@keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}
</style>

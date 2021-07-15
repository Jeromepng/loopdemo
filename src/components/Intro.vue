<template>
  <div class="intro-banner">
    <img class="banner-background" src="../assets/images/bot.png" />
    <div class="intro-heading">
      <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Lorem Ipsum<br />Proin Gravi</h1>
      <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quaerat animi enim.</h2>

      <img class="rotate-center" src="../assets/images/compass.svg" />
    </div>
  </div>
  <div class="date-row">
    <div class="mobile-row">
      <div class="date-box date-box-hover bg-white col-6">
        <div class="date-box-content" data-aos="fade-up" data-aos-anchor-placement="top">
          <div class="icon-row">
            <img alt="calendar" src="../assets/images/Calendar.svg" />
            <p>23 MAI 2021</p>
          </div>
          <h2>NEWS HEADLINE</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A at asperiores harum quia voluptates ...</p>
        </div>
        <div class="learn-more-box">
          <a href="/">Learn More</a>
          <img src="../assets/images/wave.svg" />
        </div>
      </div>
      <div class="date-box date-box-hover bg-black col-6">
        <div class="date-box-content" data-aos="fade-up" data-aos-anchor-placement="top" data-aos-delay="100">
          <div class="icon-row">
            <img alt="calendar" src="../assets/images/Calendar.svg" />
            <p>23 MAI 2021</p>
          </div>
          <h2>NEWS HEADLINE</h2>
          <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A at asperiores harum quia voluptates ...</p>
        </div>
        <div class="learn-more-box">
          <a href="/">Learn More</a>
          <img src="../assets/images/wave.svg" />
        </div>
      </div>
    </div>
    <div class="date-box date-box-hover bg-map col-6">
      <div class="map-overlay">
        <div class="date-large-box-content" data-aos="fade-up" data-aos-anchor-placement="top" data-aos-delay="200">
          <h1>17 MAI</h1>
          <h2>Headline Beitrag 2021</h2>
          <h3>Subtitle</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid fuga dolores.</p>
        </div>
      </div>
      <div class="learn-more-box">
        <a href="/">Learn More</a>
        <img src="../assets/images/wave.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro"
}
</script>

<style lang="scss" scoped>
.intro-banner {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100vh;
}
.banner-background {
  width: 100%;
  height: 100%;
  z-index: 2;
  position: relative;
  display: block;
  -webkit-clip-path: polygon(100% 0, 100% 65%, 50% 75%, 0 65%, 0 0);
  clip-path: polygon(100% 0, 100% 65%, 50% 75%, 0 65%, 0 0);
  object-fit: cover;
}
.date-row {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: -460px;
}
.date-box {
  max-height: 400px;
  display: flex;
  flex-direction: column;
}
.bg-white {
  background: $light-bg !important;
}
.bg-black {
  background: black;
}
.bg-map {
  background-image: url("../assets/images/pin45.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-color: transparent !important;
}
.icon-row {
  display: inline-flex;
  flex-direction: row;
}
.icon-row img {
  align-self: baseline;
  width: 20px;
  height: 20px;
}
.text-white {
  color: #fff;
}
.icon-row p {
  align-self: baseline;
  padding-left: 0.5rem;
  font-size: 15px;
  font-weight: bold;
  color: $grey;
}
.date-box-content {
  z-index: 2;
  margin-top: 12rem;
  padding: 1rem;
  transition: 0.2s;
}
.date-box-content h2 {
  width: 100%;
  text-align: left;
  color: $red;
  font-weight: bold;
  font-size: 20px;
}
.date-box-content p {
  font-size: 15px;
  line-height: 22px;
}
.learn-more-box {
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: -50%;
  transition: 0.2s;
}
.learn-more-box a {
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  align-self: center;
  font-weight: bold;
}
.learn-more-box img {
  position: relative;
  top: -30%;
  width: 150px;

  align-self: center;
}
.date-box-hover:hover {
  background-color: #fff !important;
  cursor: pointer;
}
.date-box-hover:hover .map-overlay {
  opacity: 0;
}
.date-box-hover:hover {
  background-image: none !important;
}

.date-box-hover:hover .learn-more-box {
  opacity: 1;
}
.date-box-hover:hover .date-box-content {
  opacity: 0;
}
.date-box:hover .date-large-box-content {
  opacity: 0;
}
.mobile-row {
  width: 50% !important;
  display: flex;
  flex-direction: row;
}
.date-large-box-content {
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-top: 6rem;
  padding: 4rem 2rem;
  margin-left: 1rem;
  transition: 0.2s;
}
.date-large-box-content h1 {
  font-size: 50px;
  font-weight: bold;
  line-height: 55px;
}
.date-large-box-content h2 {
  font-size: 30px;
  font-weight: bold;
  color: $red;
  line-height: 55px;
  text-align: left;
  width: 100%;
  align-self: unset;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-top: -10px;
}
.date-large-box-content h3 {
  font-size: 20px;
  font-weight: bold;
  margin-top: -20px;
  line-height: 55px;

  text-transform: uppercase;
}
.date-large-box-content p {
  font-size: 15px;
  line-height: 22px;
  margin-top: -10px;
  max-width: 65%;
}

.map-overlay {
  width: 100%;
  height: 100%;
  background-color: #cad4dc77 !important;
  z-index: 1;
  position: relative;
  transition: 1s;
}
.intro-heading {
  z-index: 3;
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  left: 75%;
  transform: translate(-75%, -50%);
  width: 100%;
}
.intro-heading h1,
h2 {
  text-align: center;
  width: 40%;
  align-self: flex-end;
}
.intro-heading h1 {
  font-size: clamp(1.5rem, 10vw, 3rem);
  text-transform: uppercase;
  font-weight: bold;
  color: #c4132f;
}
.intro-heading h2 {
  font-size: clamp(1rem, 5vw, 1.2rem);
  text-transform: uppercase;
  font-weight: bold;
}
.intro-heading img {
  width: 350px;
  height: 350px;
  position: relative;
  align-self: flex-end;
  z-index: -1;
  top: -220px;
  left: 175px;
}

//media queries

@media screen and (max-width: 1370px) {
  .intro-heading img {
    width: 300px;
    height: 300px;
    left: 140px;
  }
}
@media screen and (max-width: 1150px) {
  .intro-heading img {
    width: 250px;
    height: 250px;
    left: 120px;
  }
}
@media screen and (max-width: 1024px) {
  .intro-heading h1 {
    font-size: 40px !important;
    width: 45% !important;
  }
  .intro-heading h2 {
    font-size: 20px !important;
    width: 45% !important;
  }
}

@media screen and (max-width: 980px) {
  .date-box-content {
    margin-top: 10rem;
  }
}

@media screen and (max-width: 768px) {
  .intro-heading {
    left: 50% !important;
  }
  .intro-heading h1 {
    width: 50% !important;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.815);
  }
  .intro-heading h2 {
    font-size: 18px !important;
    width: 50% !important;
    background: rgba(255, 255, 255, 0.815);
    padding: 0.5rem;
  }
  .intro-heading img {
    left: 260px !important;
    width: 200px !important;
    height: 200px !important;
    top: -145px !important;
  }
  .date-row {
    flex-direction: column-reverse !important;
  }
  .bg-map {
    width: 100% !important;
  }
  .map-overlay {
    max-height: 400px !important;
  }
  .learn-more-box {
    top: -150px !important;
  }
  .learn-more-box img {
    top: -60px !important;
  }
  .mobile-row {
    display: flex;
    flex-direction: row;
    width: 100% !important;
  }
  .mobile-row .date-box {
    height: 100% !important;
    width: 50% !important;
    max-height: 275px !important;
  }
  .date-box-content {
    margin: 0 !important;
    padding: 2rem !important;
  }
}
@media screen and (max-width: 597px) {
  .intro-heading h1 {
    font-size: 35px !important;
  }
  .intro-heading h2 {
    font-size: 15px !important;
  }
  .intro-heading img {
    left: 230px !important;
  }
}
@media screen and (max-width: 500px) {
  .intro-heading {
    left: 40% !important;
  }
  .intro-heading h1 {
    width: 60% !important;
  }
  .intro-heading h2 {
    width: 60% !important;
  }
  .intro-heading img {
    left: 260px !important;
  }
}
@media screen and (max-width: 440px) {
  .intro-heading {
    left: 50% !important;
  }
  .intro-heading h1 {
    width: 70% !important;
  }
  .intro-heading h2 {
    width: 70% !important;
  }
  .intro-heading img {
    width: 175px;
    height: 175px;
    left: 200px !important;
    top: -60px !important;
  }
  .mobile-row {
    flex-direction: column !important;
  }
  .mobile-row .date-box {
    width: 100% !important;
    max-height: 225px !important;
  }
}

@media screen and (max-width: 375px) {
  .intro-heading h1 {
    font-size: 30px !important;
  }
}

@media screen and (max-width: 905px) {
  .date-large-box-content {
    padding: 4rem 1rem !important;
  }
  .date-large-box-content h1 {
    font-size: 40px !important;
  }
  .date-large-box-content h2 {
    font-size: 25px !important;
  }
  .date-large-box-content p {
    max-width: 100% !important;
  }
}
//Animations
.rotate-center {
  -webkit-animation: rotate-center 10s ease-in-out infinite both;
  animation: rotate-center 10s ease-in-out infinite both;
}

@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

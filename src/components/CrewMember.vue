<template>
  <img data-aos="fade-up" :duties="crewmember.duty_slugs" class="active" :src="require(`../assets/images/${crewmember.id}.png`)" />
  <div class="hover-box col">
    <h3>{{ crewmember.name }}</h3>
    <p>A smooth sea never made a skilled sailor</p>
  </div>
</template>

<script>
export default {
  name: "CrewMember",
  props: {
    crewmember: Object
  }
}
</script>

<style lang="scss" scoped>
img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 100%;
  height: 100%;
  max-width: 280px;
  max-width: 280px;
}

.hover-box {
  background-color: $light-bg;
  max-width: 100%;
  height: 100%;
  z-index: 2;
  top: 0%;
  display: none;
  width: 100%;
  position: absolute;
}
.gallery-img:hover .hover-box {
  display: block;
  -webkit-animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.gallery-img:nth-of-type(5n):hover .hover-box {
  display: block;

  -webkit-animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.gallery-img:hover img {
  -webkit-filter: none !important;
  filter: none !important;
}
.hover-box h3 {
  margin-top: 50%;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
}
.hover-box p {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  font-size: 15px;
  margin-top: -10px;
}

//media queries & spaghetti carbonara

@media screen and (max-width: 1400px) {
  img {
    max-width: unset !important;
  }
  .gallery-img:nth-of-type(4n):hover .hover-box {
    display: block !important;

    -webkit-animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
    animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
  .gallery-img:nth-of-type(5n):hover .hover-box {
    display: block !important;
    -webkit-animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
}
@media screen and (max-width: 1050px) {
  .hover-box h3 {
    margin-top: 30%;
  }
}

@media screen and (max-width: 980px) {
  .hover-box h3 {
    font-size: 18px !important;
    margin-top: 10%;
  }
}
@media screen and (max-width: 768px) {
  .gallery-img:nth-of-type(3n):hover .hover-box {
    -webkit-animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
    animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
  .gallery-img:nth-of-type(4n):hover .hover-box {
    display: block !important;
    -webkit-animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
  .gallery-img:nth-of-type(5n):hover .hover-box {
    display: block !important;
    -webkit-animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
  .gallery-img:nth-of-type(12):hover .hover-box {
    -webkit-animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
    animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
  .gallery-img:nth-of-type(15):hover .hover-box {
    -webkit-animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
    animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
}

@media screen and (max-width: 440px) {
  .gallery-img:nth-of-type(2n):hover .hover-box {
    -webkit-animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
    animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
  .gallery-img:nth-of-type(6):hover .hover-box {
    -webkit-animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
    animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
  .gallery-img:last-of-type:hover .hover-box {
    display: block !important;
    -webkit-animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
  .gallery-img:nth-of-type(3):hover .hover-box {
    -webkit-animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
  .gallery-img:nth-of-type(9):hover .hover-box {
    -webkit-animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
}

//animations

@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

@-webkit-keyframes slide-left {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
@keyframes slide-left {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>

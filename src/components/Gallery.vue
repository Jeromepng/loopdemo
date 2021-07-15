<template>
  <div class="gallery-grid container">
    <div class="gallery-row row">
      <div :key="crewmember.id" v-for="crewmember in crewData.slice(0, 10)" class="gallery-img col-3">
        <CrewMember :crewmember="crewmember" />
      </div>

      <div v-show="loadMore" :key="crewmember.id" v-for="crewmember in crewData.slice(10, 15)" class="gallery-img col-3">
        <CrewMember :crewmember="crewmember" />
      </div>
    </div>

    <button @click="toggleLoadMore" :class="[isFilterActive ? 'display-none load-more-btn' : 'load-more-btn']">
      {{ btnText }}
    </button>
  </div>
</template>

<script>
import CrewMember from "./CrewMember.vue"
export default {
  name: "Gallery",
  data() {
    return {
      loadMore: false,
      btnText: "Load More"
    }
  },
  props: {
    crewData: Array,
    isFilterActive: Boolean
  },

  components: {
    CrewMember
  },
  methods: {
    toggleLoadMore() {
      this.loadMore = !this.loadMore
      if (!this.loadMore) {
        this.btnText = "Load More"
      } else {
        this.btnText = "Show Less"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery-grid {
  margin-top: 1rem;
}
.gallery-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.gallery-img {
  padding-left: 0 !important;
  padding-right: 0 !important;
  width: 100%;
  height: 100%;
  max-height: 280px;
  max-width: 280px;
  position: relative;
}

.hover-box {
  background-color: $light-bg;
  width: 100%;
  height: 100%;

  z-index: 2;
  top: -100%;
  display: none;

  position: relative;
}

.hover-box h3 {
  padding: 10rem 0 0 1rem;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  line-height: 55px;
}
.hover-box p {
  padding: 0 0 0 1rem;
  font-size: 15px;
  line-height: 22px;
  margin-top: -10px;
}

.load-more-btn {
  background-color: transparent;
  border: 2px solid #fff;
  padding: 1rem 2rem;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 4rem;
  margin-top: 4rem;
  display: flex;
  justify-self: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #ffffff;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
}

.load-more-btn:hover {
  box-shadow: inset 400px 0 0 0 #ffffff;
  color: black !important;
}

.display-none {
  visibility: hidden;
}

//media queries

@media screen and (max-width: 1400px) {
  .gallery-img {
    width: 25% !important;
    max-width: unset !important;
    max-height: unset !important;
  }

  @media screen and (max-width: 768px) {
    .gallery-img {
      flex: 0 0 auto !important;
      width: 33.33333333% !important;
    }
  }

  @media screen and (max-width: 440px) {
    .gallery-img {
      width: 50% !important;
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
}
</style>

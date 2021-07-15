<template>
  <div class="crew-area-container">
    <h1>Unser Team</h1>
    <h3>Subtitles von unserem Team</h3>
    <hr />
    <div class="crew-nav">
      <ul>
        <li
          @click="activate(1), resetFilter(), showLoadMore()"
          :class="{ active: active_el == 1 }"
        >
          Show all
        </li>
        <li
          @click="activate(2), filterByTrim()"
          :class="{ active: active_el == 2 }"
        >
          Trim
        </li>
        <li
          @click="activate(3), filterByTactic()"
          :class="{ active: active_el == 3 }"
        >
          Tactic
        </li>
        <li
          @click="activate(4), filterByHelmsman()"
          :class="{ active: active_el == 4 }"
        >
          Helmsman
        </li>
      </ul>
    </div>
    <Gallery :isFilterActive="isFilterActive" :crewData="crew" />
  </div>
</template>

<script>
import Gallery from "./Gallery.vue";

export default {
  name: "CrewArea",
  components: {
    Gallery,
  },
  data() {
    return {
      active_el: 1,
      crew: [],
      isFilterActive: false,
    };
  },
  methods: {
    activate: function (el) {
      this.active_el = el;
    },
    async fetchCrew() {
      const res = await fetch("api/crew");
      const data = await res.json();

      return data;
    },
    showLoadMore() {
      this.isFilterActive = false;
    },
    filterByTrim() {
      this.resetFilter().then(() => {
        this.isFilterActive = true;
        this.crew = this.crew.filter(function (el) {
          return el.duty_slugs.includes("trim");
        });
      });
    },
    filterByTactic() {
      this.resetFilter().then(() => {
        this.crew = this.crew.filter(function (el) {
          return el.duty_slugs.includes("tactic");
        });
      });
    },
    filterByHelmsman() {
      this.resetFilter().then(() => {
        this.crew = this.crew.filter(function (el) {
          return el.duty_slugs.includes("helmsman");
        });
      });
    },
    async resetFilter() {
      this.crew = await this.fetchCrew();
    },
  },
  async created() {
    this.crew = await this.fetchCrew();
  },
};
</script>

<style lang="scss" scoped>
.crew-area-container {
  width: 100%;

  background-color: black;

  position: relative;
}
.crew-area-container h1 {
  font-size: 50px;
  font-weight: bold;
  line-height: 55px;
  padding-top: 6rem;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
}
.crew-area-container h3 {
  font-size: 20px;
  font-weight: bold;
  line-height: 55px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-top: -5px;
}
.crew-area-container hr {
  width: 30%;
  margin-right: auto;
  margin-left: auto;
  color: #ffffff;
  height: 2px;
  margin-top: -5px;
}
.crew-nav {
  display: flex;
  justify-content: center;
  width: 30%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5rem;
}
.crew-nav ul {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-left: 0;
}
.crew-nav ul li {
  list-style: none;
  color: rgb(158, 158, 158);
  font-size: 15px;
  font-weight: bold;
  position: relative;
}

.crew-nav ul li:hover {
  cursor: pointer;
  color: #fff;
}

.crew-nav ul li:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  color: #fff;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.crew-nav ul li:hover:after {
  width: 100%;
  left: 0;
}

.active {
  color: #fff !important;
  border-bottom: 2px solid #fff;
}

//media queries

@media screen and (max-width: 1024px) {
  .crew-area-container h1 {
    font-size: 40px !important;
  }
}

@media screen and (max-width: 980px) {
  .crew-nav {
    width: 40% !important;
  }
}
@media screen and (max-width: 768px) {
  .crew-nav {
    width: 60% !important;
  }
  .crew-area-container h3 {
    font-size: 18px !important;
  }
}
@media screen and (max-width: 440px) {
  .crew-nav {
    width: 80% !important;
  }
  .crew-area-container h3 {
    font-size: 15px !important;
  }
}
</style>

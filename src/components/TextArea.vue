<template>
  <div class="text-area-container">
    <h1 data-aos="fade-up" data-aos-anchor-placement="top-center">
      Headline - Lorem Ipsum
    </h1>
    <h3 data-aos="fade-up" data-aos-anchor-placement="top-center">
      Subtitle Lorem Ipsum
    </h3>
    <hr />
    <div
      class="text-box"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div class="text-content col-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="text-content col-6 mobile-learn-more">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas
        </p>
        <p>
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
          qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <button @click="toggleLoadMore" class="load-more-btn">
        {{ btnText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  data() {
    return {
      isLoadMoreOpen: false,
      btnText: "Learn More",
    };
  },
  methods: {
    toggleLoadMore() {
      this.isLoadMoreOpen = !this.isLoadMoreOpen;
      const El = document.querySelector(".mobile-learn-more");
      if (this.isLoadMoreOpen) {
        El.classList.add("show-on-mobile");
        this.btnText = "Show Less";
      } else {
        this.btnText = "Learn More";
        El.classList.remove("show-on-mobile");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text-area-container {
  width: 100%;
  height: 100%;
  background-color: #fff;

  position: relative;
}
.text-area-container h1 {
  font-size: 50px;
  font-weight: bold;
  line-height: 55px;
  padding-top: 8rem;
  text-transform: uppercase;
  text-align: center;
}
.text-area-container h3 {
  font-size: 20px;
  font-weight: bold;
  line-height: 55px;
  text-transform: uppercase;
  text-align: center;
  margin-top: -5px;
}
.text-area-container hr {
  width: 30%;
  margin-right: auto;
  margin-left: auto;
  color: #757575;
  height: 2px;
  margin-top: -5px;
}
.text-box {
  width: 100%;
  height: 100%;
  padding: 3rem 8rem 8rem 8rem;

  display: flex;
  flex-direction: row;
}
.text-content:first-of-type {
  padding-right: 1.5rem;
}
.text-content:last-of-type {
  padding-left: 1.5rem;
}
.text-content p {
  font-size: 15px;
  line-height: 22px;
  color: #717171;
}

.load-more-btn {
  display: none;
  background-color: transparent;
  border: 2px solid rgb(0, 0, 0);
  padding: 1rem 2rem;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 4rem;
  margin-top: 4rem;
  justify-self: center;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #000000;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
}

.load-more-btn:hover {
  box-shadow: inset 400px 0 0 0 #000000;
  color: rgb(255, 255, 255) !important;
}

//media queries

@media screen and (max-width: 1024px) {
  .text-area-container h1 {
    font-size: 40px !important;
  }
}
@media screen and (max-width: 900px) {
  .text-box {
    flex-direction: column !important;
  }
  .text-content {
    width: 100% !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
@media screen and (max-width: 768px) {
  .text-box {
    padding: 3rem 6rem 6rem 6rem;
  }
  .load-more-btn {
    display: flex;
  }
  .mobile-learn-more {
    display: none;
  }
  .show-on-mobile {
    display: block !important;
  }
}
@media screen and (max-width: 500px) {
  .text-box {
    padding: 3rem 2rem 2rem 2rem;
  }
}
</style>

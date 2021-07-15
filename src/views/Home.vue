<template>
  <Intro />
  <TextArea />
  <CrewArea />
</template>

<script>
import Intro from "../components/Intro.vue"
import TextArea from "../components/TextArea.vue"
import CrewArea from "../components/CrewArea.vue"

export default {
  name: "Home",
  components: {
    Intro,
    TextArea,
    CrewArea
  }
}
</script>

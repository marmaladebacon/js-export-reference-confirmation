<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutDetails></AboutDetails>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutDetails from "@/components/AboutDetails.vue";

export default {
  name: "home",
  components: {
    AboutDetails
  }
};
</script>

<template>
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col-12">
        <h1>Welcome {{ profile.name }}</h1>
        <h2>Your Posts:</h2>
      </div>
      <posts />
    </div>
  </div>
</template>

<script>
import posts from "@/components/posts";

export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    posts() {
      return this.$store.dispatch("getPostsByCreatorEmail", this.profile.email);
    }
  },
  components: {
    posts
  }
};
</script>

<style scoped>
</style>

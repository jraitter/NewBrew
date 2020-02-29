<template>
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col-12">
        <h1>Welcome {{ profile.name }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 m-0 p-1">
        <button
          v-if="!postForm"
          @click="postForm = true"
          type="button"
          class="btn btn-block btn-secondary"
        >Create New Post</button>
        <button
          v-if="postForm"
          @click="postForm = false"
          type="button"
          class="btn btn-block btn-danger"
        >Ditch Post</button>
      </div>
    </div>
    <div class="row">
      <create-post v-if="postForm" />
    </div>
    <div class="row">
      <div class="col-12">
        <h2>Your Posts:</h2>
      </div>
    </div>
    <posts />
  </div>
</template>

<script>
import posts from "@/components/posts";
import createPost from "@/components/createPost";

export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    posts() {
      return this.$store.dispatch("getPostsByCreatorEmail");
    }
  },
  data() {
    return {
      postForm: false
    };
  },
  components: {
    posts,
    createPost
  }
};
</script>

<style scoped>
</style>

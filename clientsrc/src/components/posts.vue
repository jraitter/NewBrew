<template>
  <div class="post container-fluid">
    <post v-for="(postObj) in posts" :key="postObj._id" :postData="postObj" />
  </div>
</template>

<script>
import post from "@/components/post";
export default {
  name: "posts",
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  components: {
    post
  }
};
</script>

<style>
</style>
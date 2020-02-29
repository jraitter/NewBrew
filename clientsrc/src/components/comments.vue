<template>
  <div class="comments container-fluid">
    <comment v-for="(commentObj) in comments" :key="commentObj._id" :commentData="commentObj" />
  </div>
</template>

<script>
import comment from "@/components/comment";

export default {
  name: "comments",
  mounted() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$store.dispatch("getCommentsByPostId", this.$route.params.postId);
    }
  },
  computed: {
    comments() {
      return this.$store.state.comments;
    }
  },
  components: {
    comment
  }
};
</script>

<style>
</style>
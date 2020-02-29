<template>
  <div class="comment container-fluid">
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
      this.$store.dispatch("getCommentsByPostId", this.$route.params._id);
    }
  },
  components: {
    comment
  }
};
</script>

<style>
</style>
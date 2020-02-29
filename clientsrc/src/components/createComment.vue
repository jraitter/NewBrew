<template>
  <div class="col-12 p-2 mb-2 bg-secondary">
    <form @submit.prevent="createComment" class="create-comment">
      <textarea
        class="form-control border border-primary m-1"
        id="comment-text"
        name="comment"
        v-model="newComment.body"
        rows="3"
        placeholder="Enter your comment here..."
      ></textarea>
      <input
        class="border border-primary m-1"
        type="text"
        name="creator"
        id="creator"
        v-model="newComment.name"
        placeholder="Enter name here..."
      />
      <button type="submit" class="btn btn-primary float-right">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "createComment",
  data() {
    return {
      newComment: {
        postId: this.$route.params.postId
      }
    };
  },
  methods: {
    createComment() {
      this.$store.dispatch("createComment", this.newComment);
    }
  }
};
</script>

<style scoped>
.form {
  min-width: 100%;
}
</style>
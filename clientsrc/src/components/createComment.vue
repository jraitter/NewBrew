<template>
  <div class="col-12">
    <form @submit.prevent="createComment" class="create-comment">
      <textarea
        class="form-control"
        id="comment-text"
        name="comment"
        v-model="newComment.body"
        rows="3"
      ></textarea>
      <button type="submit" class="btn btn-primary float-right">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "createComment",
  data() {
    return {
      newComment: {}
    };
  },
  methods: {
    createComment() {
      //TODO create the comment and dispatch to store
    }
  }
};
</script>

<style>
</style>
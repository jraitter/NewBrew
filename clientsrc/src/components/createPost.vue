<template>
  <div class="col-12 bg-secondary">
    <form @submit.prevent="createPost" class="create-post">
      <input
        class="col-12 my-1 border border-primary"
        type="text"
        name="title"
        placeholder="Post title..."
        v-model="newPost.title"
      />
      <textarea
        class="form-control my-1 border border-primary"
        id="post-text"
        name="post"
        v-model="newPost.body"
        rows="3"
        placeholder="Post text..."
      ></textarea>
      <button type="submit" class="btn btn-primary float-right mb-2">Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "createPost",
  data() {
    return {
      newPost: {
        email: this.$route.params.creatorEmail
      }
    };
  },
  methods: {
    createPost() {
      this.$store.dispatch("createPost", this.newPost);
    }
  }
};
</script>

<style>
</style>
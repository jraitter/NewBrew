<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card post" style="width: 100vw">
        <div class="card-header">{{details.title}}</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{{details.body}}</p>
            <footer class="blockquote-footer">{{details.creatorEmail}}</footer>
          </blockquote>
        </div>
      </div>
    </div>
    <div class="row button-row px-1">
      <div class="col-3 m-0 p-1">
        <button
          v-if="!commentForm"
          @click="commentForm = true"
          type="button"
          class="btn btn-block btn-secondary"
        >Comment</button>
        <button
          v-if="commentForm"
          @click="commentForm = false"
          type="button"
          class="btn btn-block btn-danger"
        >Ditch Comment</button>
      </div>
      <div class="col-3 m-0 p-1">
        <!-- TODO  v if this is the
        users post-->
        <button class="btn btn-block btn-danger">Delete</button>
      </div>
      <div class="col-3 m-0 p-1">
        <button class="btn btn-block btn-success">Like</button>
      </div>
      <div class="col-3 m-0 p-1">
        <button class="btn btn-block btn-warning">Dislike</button>
      </div>
    </div>
    <div class="row">
      <create-comment v-if="commentForm" />
    </div>
    <comments />
  </div>
</template>

<script>
import createComment from "@/components/createComment";
import comments from "@/components/comments";
import post from "@/components/post";

export default {
  name: "PostDetails",
  mounted() {
    if (!this.$store.state.posts.length) {
      this.$store.dispatch("getPostById", this.$route.params.postId);
    } else {
      this.$store.dispatch(
        "setActivePost",
        this.$store.state.posts.find(p => p._id == this.$route.params.postId)
      );
    }
    this.$store.dispatch("getCommentsByPostId", this.$route.params.postId);
  },
  data() {
    return {
      commentForm: false
    };
  },
  computed: {
    details() {
      return this.$store.state.activePost;
    }
  },
  components: {
    createComment,
    comments,
    post
  }
};
</script>

<style scoped>
.button-row {
  justify-content: center;
  min-width: 100%;
}
</style>
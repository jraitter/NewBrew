<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card post border border-dark m-1" style="width: 100vw">
        <div class="card-header title-row">
          <div class="row p-0 p-0">
            <div class="col-8 h3 text-dark">{{details.title}}</div>
            <div class="col-2 text-success">+{{details.upCount}}</div>
            <div class="col-2 text-danger">-{{details.downCount}}</div>
          </div>
        </div>
        <div class="card-body border border-dark">
          <blockquote class="blockquote mb-0">
            <p>{{details.body}}</p>
            <footer class="blockquote-footer float-right">{{details.creatorEmail}}</footer>
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
        <button
          v-show="details.creatorEmail==profile.email"
          @click="deletePost"
          class="btn btn-block btn-danger"
        >Delete</button>
      </div>
      <div class="col-3 m-0 p-1">
        <button v-if="allowVote" @click="upCount" class="btn btn-block btn-success">Like</button>
      </div>
      <div class="col-3 m-0 p-1">
        <button v-if="allowVote" @click="downCount" class="btn btn-block btn-warning">Dislike</button>
      </div>
    </div>
    <div class="row">
      <create-comment v-if="commentForm" />
    </div>
    <div class="row">
      <h3 class="ml-2">Comments for this post:</h3>
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
      this.$store.dispatch("getCommentsByPostId", this.$route.params.postId);
    }
  },
  methods: {
    upCount() {
      this.details.upCount++;
      this.$store.dispatch("editPostUpCount", this.details);
      this.allowVote = false;
    },
    downCount() {
      this.details.downCount--;
      this.$store.dispatch("editPostDownCount", this.details);
      this.allowVote = false;
    },
    deletePost() {
      this.$store.dispatch("deletePost", this.$route.params.postId);
    }
  },
  data() {
    return {
      commentForm: false,
      allowVote: true
    };
  },
  computed: {
    details() {
      return this.$store.state.activePost;
    },
    profile() {
      return this.$store.state.profile;
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
.title-row {
  background-color: rgba(240, 154, 25, 0.521);
}
</style>
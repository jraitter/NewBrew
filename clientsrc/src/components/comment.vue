<template>
  <div class="row comment-row">
    <div class="card comment" style="width: 100vw">
      <div class="card-body comment-bg border border-dark">
        <blockquote class="blockquote mb-0">
          <p>{{commentData.body}}</p>
          <footer class>
            <p class="blockquote-footer float-right">{{commentData.name}}</p>
            <button @click="deleteComment" class="btn btn-sm text-danger float-left">DELETE</button>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["commentData"],
  methods: {
    deleteComment() {
      let windowMessage = window.confirm(
        "Are you sure you want to delete this comment?"
      );
      if (windowMessage == true) {
        this.$store.dispatch("deleteComment", this.commentData._id);
      }
    }
  }
};
</script>

<style scoped>
.comment-bg {
  background-color: rgba(128, 128, 128, 0.37);
}
</style>
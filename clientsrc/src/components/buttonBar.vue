<template>
  <div class="container-fluid">
    <div class="row button-row px-1">
      <!-- TODO  at click show new comment component -->
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
      <!-- TODO add show if new comment is true need to add new comment to the data() -->
      <create-comment v-if="commentForm" />
    </div>
  </div>
</template>

<script>
import createComment from "@/components/createComment";
export default {
  name: "buttonBar",
  data() {
    return {
      commentForm: false
    };
  },
  components: {
    createComment
  }
};
</script>

<style scoped>
.button-row {
  justify-content: center;
  max-width: 100%;
}
</style>
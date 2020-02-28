<template>
  <div class="row button-row mx-1">
    <!-- TODO  at click show new comment component -->
    <div class="col-3 p-1">
      <button type="button" class="btn btn-block btn-secondary">Comment</button>
    </div>
    <div class="col-3 p-1">
      <!-- TODO  v if this is the users post -->
      <button class="btn btn-block btn-danger" @click="deletePost">Delete</button>
    </div>
    <div class="col-3 p-1">
      <button class="btn btn-block btn-success" @click="likePost">Like</button>
    </div>
    <div class="col-3 p-1">
      <button class="btn btn-block btn-warning" @click="dislikePost">Dislike</button>
    </div>
    <div class="row">
      <!-- TODO add show if new comment is true need to add new comment to the data() -->
      <new-comment />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button-row {
  justify-content: center;
}
</style>
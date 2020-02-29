<template>
  <div class="row comment-row">
    <div class="card comment" style="width: 100vw">
      <div class="card-body comment-bg border border-dark">
        <blockquote class="blockquote mb-0">
          <p>{{commentData.body}}</p>
          <footer class="blockquote-footer float-right">{{commentData.name}}</footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["commentData"]
};
</script>

<style scoped>
.comment-bg {
  background-color: rgba(128, 128, 128, 0.37);
}
</style>
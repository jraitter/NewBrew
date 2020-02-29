<template>
  <div class="row comment-row">
    <div class="card comment" style="width: 100vw">
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{commentData.body}}</p>
          <footer class="blockquote-footer">{{commentData.name}}</footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["commentData"],
  methods: {}
};
</script>

<style scoped>
</style>
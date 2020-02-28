<template>
  <router-link :to="{name:'postDetails', params:{postId: this.postData._id}}">
    <div class="row post">
      <div class="col-8">{{post.title}}</div>
      <div class="col-2">+:{{post.upVotes}}</div>
      <div class="col-2">-:{{post.downVotes}}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "post",
  props: ["postData"],
  methods: {}
};
</script>

<style scoped>
.post {
  cursor: pointer;
}
</style>
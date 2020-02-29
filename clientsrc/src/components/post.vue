<template>
  <router-link :to="{name:'postDetails', params:{postId: this.postData._id}}">
    <div class="row post">
      <div class="col-8">{{postData.title}}</div>
      <div class="col-2">+:{{postData.upVotes}}</div>
      <div class="col-2">-:{{postData.downVotes}}</div>
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
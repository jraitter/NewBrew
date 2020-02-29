<template>
  <router-link :to="{name:'postDetails', params:{postId: this.postData._id}}">
    <div class="row post post-row m-1">
      <div class="col-8 text-dark h4">{{postData.title}}</div>
      <div class="col-2 text-success">+{{postData.upCount}}</div>
      <div class="col-2 text-danger">-{{postData.downCount}}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "post",
  props: ["postData"],
  methods: {
    setActive() {
      this.$store.dispatch("setActivePost", this.postData);
    }
  }
};
</script>

<style scoped>
.post {
  cursor: pointer;
}
.post-row {
  background-color: rgba(240, 154, 25, 0.521);
}
</style>
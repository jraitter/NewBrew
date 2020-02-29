<template>
  <router-link :to="{name:'postDetails', params:{postId: this.postData._id}}">
    <div class="row post">
      <div class="col-8">{{postData.title}}</div>
      <div class="col-2">+{{postData.upCount}}</div>
      <div class="col-2">-{{postData.downCount}}</div>
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
</style>
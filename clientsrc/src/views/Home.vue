<template>
  <div class="home container-fluid">
    <div class="row align-content-center">
      <img class="col" alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="row text-center">
      <div class="col-12">
        <h1 class="title">
          <u>NewBrew</u>
        </h1>
      </div>
    </div>
    <posts />
  </div>
</template>

<script>
import posts from "@/components/posts";

export default {
  name: "home",
  components: {
    posts
  }
};
</script>

<style scoped>
.title {
  color: rgb(136, 96, 21);
  font-family: "Comfortaa";
}
img {
  border-radius: 50%;
}
</style>

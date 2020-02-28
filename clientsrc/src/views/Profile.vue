<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>
    <button-bar />
  </div>
</template>

<script>
import buttonBar from "@/components/buttonBar";

export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  components: {
    buttonBar
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>

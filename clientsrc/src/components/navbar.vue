<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h2 class="nav-item">
      <router-link
        class="nav-link h4 text-secondary"
        v-if="$auth.isAuthenticated"
        :class="{ active: $route.name == 'Profile' }"
        :to="{ name: 'Profile' }"
      >Profile</router-link>
    </h2>
    <span class="navbar-text">
      <router-link
        class="nav-link h4 text-secondary"
        :class="{ active: $route.name == 'Home' }"
        :to="{ name: 'Home' }"
      >
        <img class="col" alt="Vue logo" src="../assets/logo.png" />
      </router-link>
    </span>
    <span class="navbar-text">
      <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
      <button class="btn btn-danger" @click="logout" v-else>logout</button>
    </span>
  </nav>
</template>

<script>
import axios from "axios";
import { getUserData } from "@bcwdev/auth0-vue";
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
    },
    async logout() {
      await this.$auth.logout();
      this.$store.dispatch("resetBearer");
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
img {
  max-height: 3rem;
  width: auto;
  border-radius: 50%;
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}
</style>

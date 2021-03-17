<script lang="ts">
import Vue from "vue";
import { BNav } from "bootstrap-vue";
import Logo from "./Logo.vue";

export default Vue.extend({
  components: {
    BNav,
    Logo
  }
});
</script>

<template>
  <BNav class="navBar"> <Logo /><span>Login</span></BNav>
</template>

<style scoped lang="postcss">
.navBar {
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

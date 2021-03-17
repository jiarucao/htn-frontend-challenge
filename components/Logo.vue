<script lang="ts">
import Vue from "vue";
// import config from "~/config/env";

import Logo from "~/assets/svg/Logo.svg";

export default Vue.extend({
  components: {
    Logo
  },

  computed: {
    // APP: () => config.APP
    APP: () => "http://localhost:3000/"
  }
});
</script>

<template>
  <a :href="APP" class="logo">
    <Logo class="smallLogo" />
  </a>
</template>

<style lang="postcss" scoped></style>

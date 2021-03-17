<script lang="ts">
import Vue from "vue";
import EventList from "./EventList.vue";
import Nav from "../Nav.vue";

export default Vue.extend({
  components: {
    EventList,
    Nav
  }
});
</script>

<template>
  <div>
    <Nav />
    <EventList :events="events" />
  </div>
</template>

<style scoped lang="postcss"></style>

<script lang="ts">
import Vue from "vue";
import { getAllEvents } from "../graphql/queries";

export default Vue.extend({
  async asyncData({ app }) {
    const events = await getAllEvents(app);
    return { events };
  }
});
</script>

<template>
  <div class="container">
    <div>
      <p v-for="event in events" :key="event.id">{{ event.name }}</p>
    </div>
  </div>
</template>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

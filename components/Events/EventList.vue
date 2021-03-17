<script lang="ts">
import Vue from "vue";
import EventCard from "./EventCard.vue";
import { Event } from "../../graphql/queries";

export default Vue.extend({
  components: {
    EventCard
  },

  props: {
    events: Array as () => Event[]
  }
});
</script>

<template>
  <div class="container">
    <EventCard
      class="card"
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<style scoped lang="postcss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
}

.card:not(:last-child) {
  margin: 0 0 50px;
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

<script lang="ts">
import Vue from "vue";
import { getAllEvents, Event } from "../../graphql/queries";
import EventList from "./EventList.vue";
import Nav from "../Nav.vue";

export default Vue.extend({
  components: {
    EventList,
    Nav
  },

  async asyncData({ app, route }) {
    const events = await getAllEvents(app);
    if (route.path.includes("related")) {
      const relatedEventIds = route.query.relatedEvents;
      const filteredEvents = events.filter((event: Event) =>
        relatedEventIds.includes(event.id.toString())
      );
      return { events: filteredEvents };
    }
    return { events };
  },
  computed: {
    title(): string {
      return this.$route.path.includes("related")
        ? `Related to ${this.$route.query.lastEvent}`
        : "All Events";
    }
  }
});
</script>

<template>
  <div class="page">
    <Nav />
    <H1 class="pageTitle">{{ title }}</H1>
    <EventList :events="events" />
  </div>
</template>

<style scoped lang="postcss">
.pageTitle {
  text-align: center;
}
</style>

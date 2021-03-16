<script lang="ts">
import Vue from "vue";
import {
  BCard,
  BCardHeader,
  BCardBody,
  BCardTitle,
  BCardText,
  BCardImg
} from "bootstrap-vue";

import { Event } from "../graphql/queries";

export default Vue.extend({
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BCardTitle,
    BCardText,
    BCardImg
  },

  props: {
    event: {
      // TODO: code gen?
      type: Object as () => Event,
      required: true
    }
  }
});
</script>

<template>
  <div class="card">
    <BCard :title="event.name" :sub-title="event.event_type">
      <BCardText
        >{{ event.description }}
        <p>{{ event.start_time }}</p>
      </BCardText>
    </BCard>
  </div>
</template>

<style></style>

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

type Event = {
  id: number;
  name: string;
  event_type: string;
  permission?: string;
  start_time: number;
  end_time: number;
  description?: string;
  speakers: {
    name: string;
    profile_pic: string;
  }[];
  public_url?: string;
  private_url: string;
  related_events: number[];
};

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
      <BCardText>{{ event.description }}</BCardText>
    </BCard>
  </div>
</template>

<style></style>

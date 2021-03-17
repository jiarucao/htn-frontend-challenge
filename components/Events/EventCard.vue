<script lang="ts">
import Vue from "vue";
import { BCard, BCardText, BCardImg } from "bootstrap-vue";

import { Event } from "../../graphql/queries";
import CalendarIcon from "../../assets/svg/calendar.svg";
import ChevronIcon from "../../assets/svg/chevron.svg";

export default Vue.extend({
  components: {
    BCard,
    BCardText,
    BCardImg,
    CalendarIcon,
    ChevronIcon
  },

  props: {
    event: {
      type: Object as () => Event,
      required: true
    }
  },

  computed: {
    hideRelatedEvents(): boolean {
      return (
        !this.$route.path.includes("related") ||
        this.event.related_events.length === 0
      );
    }
  },
  methods: {
    getDate(time: number) {
      return new Date(time).toLocaleDateString("en-US");
    },

    getTime(time: number) {
      return new Date(time).toLocaleTimeString("en-US").replace(":00", "");
    },

    getEventTime(start_time: number, end_time: number) {
      const startDate = this.getDate(start_time);
      const endDate = this.getDate(end_time);
      const startTime = this.getTime(start_time);
      const endTime = this.getTime(end_time);

      return `${startDate} ${startTime} - ${endTime}`;
    },
    formatEventType(type: string) {
      return type.replace("_", " ").toUpperCase();
    }
  }
});
</script>

<template>
  <BCard class="eventCard">
    <component
      :is="event.public_url ? 'a' : 'span'"
      class="header"
      :href="event.public_url || ''"
      target="_blank"
      >{{ event.name }}</component
    >
    <div class="subtitleContainer">
      <span class="subtitle">{{ formatEventType(event.event_type) }}</span>
      <div>
        <CalendarIcon class="calendarIcon" /><span class="subtitle">{{
          getEventTime(event.start_time, event.end_time)
        }}</span>
      </div>
    </div>
    <BCardText>{{ event.description }} </BCardText>
    <div
      class="speakerHighlight"
      v-for="speaker in event.speakers"
      :key="speaker.name"
    >
      <span>Host:</span>
      <BCardImg
        class="profilePicture"
        v-if="speaker.profile_pic"
        :src="speaker.profile_pic"
      />
      <span>{{ speaker.name }}</span>
    </div>
    <div class="footer" v-if="hideRelatedEvents">
      <n-link
        :to="{
          path: `event/${event.id}/related`,
          query: { relatedEvents: event.related_events, lastEvent: event.name }
        }"
        >Check out related events!<ChevronIcon class="chevronIcon"
      /></n-link>
    </div>
  </BCard>
</template>

<style scoped lang="postcss">
.eventCard {
  max-width: 800px;
  border-radius: 20px;
}

>>> .card-body {
  padding: 32px;
}

.header {
  font-size: 24px;
  font-weight: 500;
  color: black;
}

.link {
  cursor: pointer;
}

.subtitle {
  color: #6c757d;
  font-weight: 500;
}
.subtitleContainer {
  display: flex;
  justify-content: space-between;
}
.speakerHighlight {
  display: flex;
  flex-direction: column;
  align-items: center;

  >>> span {
    font-size: 50px;
  }
}
.profilePicture {
  height: 180px;
  width: 180px;
  border-radius: 100px;
}
.chevronIcon {
  width: 20px;
  height: 20px;
  margin-left: 8px;
}
.calendarIcon {
  margin: 1px 8px 3px 0;
}
.footer {
  display: flex;
  justify-content: flex-end;
}
</style>

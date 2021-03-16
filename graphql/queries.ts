import gql from "graphql-tag";
import { NuxtAppOptions } from "@nuxt/types/app";

export type Event = {
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

export const getAllEvents = async (app: NuxtAppOptions) => {
  try {
    const { data } = await app.apolloProvider!.defaultClient.query({
      query: gql`
        query events {
          events {
            id
            name
            event_type
            permission
            start_time
            end_time
            description
            speakers {
              name
              profile_pic
            }
            public_url
            private_url
            related_events
          }
        }
      `
    });

    return data.events.sort((a: Event, b: Event) => {
      return a.start_time - b.start_time;
    });
  } catch (err) {
    console.log("Failed to retrieve events", err);
  }
};

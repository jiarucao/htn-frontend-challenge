import gql from "graphql-tag";
import { NuxtAppOptions } from "@nuxt/types/app";

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
    console.log("EVENTS", data.events);
    return data.events;
  } catch (err) {
    console.log("Failed to retrieve events", err);
  }
};

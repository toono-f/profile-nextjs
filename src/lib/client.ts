import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "portfolio-ft",
  apiKey: process.env.API_KEY || "",
});

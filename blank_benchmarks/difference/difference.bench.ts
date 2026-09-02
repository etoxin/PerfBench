import { difference } from "./difference";

Deno.bench("difference", () => {
  difference()
});
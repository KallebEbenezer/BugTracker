import z, { string } from "zod";

export const programming_language_entry = z.object({
  name: z.string()
});
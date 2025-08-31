import z from "zod";

export const created_output_language = z.object({
  created: z.object({
    name: z.string()
  })
});
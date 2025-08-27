import z from "zod";

export const create_bug_output_200 = z.object({
  created_bug: z.object({
    title: z.string(),
    status: z.string(),
    created_at: z.date()
  })
});
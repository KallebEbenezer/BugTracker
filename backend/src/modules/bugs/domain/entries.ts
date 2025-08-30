import z from "zod";

export const BugBodySchema = z.object({
  title: z.string().min(1, "no mínimo 1 caractere").max(35, "no máximo 35 caracteres"),
  status: z.string().min(5, "no mínimo 5 carateres").max(10, "no máximo 10 caracteres"),
  description: z.string().min(1, 'no mínimo 1 caractere').max(120, "no máximo 120 caracteres"),
  resolution: z.string().min(1, "no mínimo 1 caractere").max(500, "no máximo 500 caracteres"),
  technology: z.string().min(1, "no mínimo 1 caractere").max(50, "no máximo 50 caracteres"),
  programming_language: z.string().min(1, "no mínimo 1 caractere").max(30, "no máximo 30 carcteres")
})

export type CreateBugInput = z.infer<typeof BugBodySchema>;
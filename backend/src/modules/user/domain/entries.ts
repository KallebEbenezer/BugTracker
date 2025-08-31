import z from "zod";

export const CreateUserSchema = z.object({
  username: z.string().min(1, "Username é obrigatório")
    .max(15, "Username deve ter no máximo 15 caracteres"),
  email: z.string().min(1, "Email é obrigatório")
    .max(100, "Email deve ter no máximo 100 caractetes"),
  phone: z.string().min(11, "Deve ter no mínimo 11 caracteres")
    .max(20, "Deve ter no máximo 20 caracteres"),
  password: z.string().min(8, "No mínimo 8 caracteres")
    .max(8, "No máximo 8 caracteres")
});

export type UserBody = z.infer<typeof CreateUserSchema>;
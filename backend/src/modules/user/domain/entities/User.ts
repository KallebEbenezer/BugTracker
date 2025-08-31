import { userTable } from "@/db/schemas/user.schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type UserInsert = InferInsertModel<typeof userTable>;
export type User = InferSelectModel<typeof userTable>;
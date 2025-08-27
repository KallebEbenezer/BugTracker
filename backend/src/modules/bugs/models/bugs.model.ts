import { bugsTable } from "@/db/schemas/bug.schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type BugInsert = InferInsertModel<typeof bugsTable>;
export type Bug = InferSelectModel<typeof bugsTable>;
import { bugsTable } from "@/db/schemas/bug.schema";
import { InferInsertModel } from "drizzle-orm";

export type BugInsert = InferInsertModel<typeof bugsTable>;
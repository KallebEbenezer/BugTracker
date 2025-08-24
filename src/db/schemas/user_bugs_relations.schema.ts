import { pgTable, varchar } from "drizzle-orm/pg-core";
import { userTable } from "@schemas/user.schema";
import { bugsTable } from "@schemas/bug.schema";

export const user_bugs_relationsTable = pgTable('user_bugs_relations', {
  user_id: varchar('user_id', { length: 36 }).notNull().references(() => userTable.id),
  bug_id: varchar('bug_id', { length: 36 }).notNull().references(() => bugsTable.id)
});
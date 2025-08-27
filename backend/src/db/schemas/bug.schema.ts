import { pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
import { technologyTable } from "@schemas/technology.schema";
import { programming_languageTable } from "@schemas/programming_anguage.schema";

export const bugsTable = pgTable("bugs", {
  id: varchar('id', { length: 36 }).primaryKey().notNull(),
  title: varchar('title', { length: 35 }).notNull(),
  status: varchar('status', { length: 10 })
    .notNull(),
  description: varchar('description', { length: 120 }).notNull(),
  resolution: varchar('resolution', { length: 500 }).notNull(),
  technology_id: varchar('technology_id').notNull().references(() => technologyTable.id),
  programming_language_id: varchar('programming_language_id', { length: 36 }).notNull()
    .references(() => programming_languageTable.id),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull()
}); 
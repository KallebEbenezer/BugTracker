import { varchar, pgTable } from "drizzle-orm/pg-core";

export const programming_languageTable = pgTable('programming_language', {
  id: varchar('id', { length: 36 }).primaryKey().notNull(),
  name: varchar('name', { length: 50}).notNull().unique()
});
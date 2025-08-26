import { pgTable, varchar } from "drizzle-orm/pg-core";

export const technologyTable = pgTable('technology', {
  id: varchar('id', { length: 36 }).primaryKey().notNull(),
  name: varchar('name', { length: 25 }).notNull()
});
import { pgTable, varchar } from "drizzle-orm/pg-core";

export const technologyTable = pgTable('technonlogy', {
  id: varchar('id', { length: 36 }).primaryKey().notNull().unique(),
  name: varchar('name', { length: 25 }).notNull()
});
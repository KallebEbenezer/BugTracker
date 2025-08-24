import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: varchar('id', { length: 36 }).primaryKey().notNull().unique(),
  username: varchar('username', { length: 15 }).notNull().unique(),
  email: varchar('email', { length: 100 }).notNull().unique(),
  phone: varchar('phone', { length: 20}).notNull().unique(),
  password: varchar('password', { length: 8 }).notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull()
});
import { drizzle } from "drizzle-orm/postgres-js";
import GetEnv from "../../utils/GetEnv.util.js";

export const db = drizzle(GetEnv('DB_URL')!);
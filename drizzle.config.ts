import { defineConfig} from "drizzle-kit"
import 'dotenv/config';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schemas',
  dbCredentials: {
    url: process.env.DB_URL!
  }
})
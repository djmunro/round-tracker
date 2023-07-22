import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

export default {
  schema: "./db/schema/schema.ts",
  out: "./drizzle",
  driver: 'mysql2',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  }
} satisfies Config;
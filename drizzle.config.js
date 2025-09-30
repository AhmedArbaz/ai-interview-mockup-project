import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js", //jaha file hay aus ka same path day dia
  out: "./drizzle",
  dbCredentials:{
    url:'postgresql://neondb_owner:npg_MTmEIL12NfdV@ep-proud-surf-ad0jgupw-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
  }
});
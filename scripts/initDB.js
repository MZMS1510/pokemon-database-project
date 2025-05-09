import fs from "fs";
import path from "path";
import pg from "pg";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const sqlFilePath = path.join(dirname, "initDB.sql");

fs.readFile(sqlFilePath, "utf8", (err, sql) => {
  if (err) {
    console.error("Error reading SQL file:", err);
    process.exit(1);
  }

  pool
    .query(sql)
    .then(() => {
      console.log("Database initialized successfully.");
      pool.end();
    })
    .catch((error) => {
      console.error("Error executing SQL script:", error);
      pool.end();
      process.exit(1);
    });
});

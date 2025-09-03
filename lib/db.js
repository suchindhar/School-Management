import mysql from "mysql2/promise";

export async function connect() {
  return await mysql.createConnection({
    uri: process.env.DATABASE_URL,
  });
}

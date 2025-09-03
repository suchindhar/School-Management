// lib/db.js
import mysql from "mysql2/promise";

let connection;

export async function connect() {
  if (!connection || connection.connection._closing) {
    // Get connection string from env
    const url = process.env.DATABASE_URL;

    if (!url) {
      throw new Error("DATABASE_URL is not set in environment variables");
    }

    // Create connection from DATABASE_URL
    connection = await mysql.createConnection(url);
  }

  return connection;
}

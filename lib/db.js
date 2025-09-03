import mysql from "mysql2/promise";

export async function connect() {
  return await mysql.createConnection({
    host: "sql100.ezyro.com",
    user: "ezyro_39853616",
    password: "3a24eb6ddc45",
    database: "ezyro_39853616_school_db",
  });
}

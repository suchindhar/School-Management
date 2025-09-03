import mysql from "mysql2/promise";

let pool;

export function connect() {
  if (!pool) {
    pool = mysql.createPool({
      host: "nozomi.proxy.rlwy.net",  // Public proxy host
      port: 31987,                    // Public proxy port
      user: "root",
      password: "gOCWSMLIjbFucXyOsPZLFYvgziIWNjXO",
      database: "railway",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
}

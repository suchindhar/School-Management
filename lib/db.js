// lib/db.js
import mysql from 'mysql2/promise';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

async function connect() {
  // Basic validation of envs
  if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME) {
    throw new Error('DB env vars missing (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)');
  }

  // Important for shared hosts like ProFreeHost:
  // host must be the remote hostname shown in panel (e.g., sql100.ezyro.com)
  // user and db must include full prefixes (e.g., ezyro_39853616, ezyro_39853616_school_db)
  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: 3306,
    ssl: undefined, // most shared hosts don't require SSL; enable if provider needs it
  });

  return connection;
}

export default connect;

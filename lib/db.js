import mysql from 'mysql2/promise';

export default async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'suchindhar', // Replace with your MySQL password
      database: 'school_db'
    });
    return connection;
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    throw error;
  }
}
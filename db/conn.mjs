import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const connectionString = process.env.mongoURI;

const client = new MongoClient(connectionString);

let conn;

try {
    conn = await client.connect();

    console.log('MongoDB Connected')

} catch (err) {
    console.error(err)
}

let db = conn.db('sample_training');

export default db;
import dotenv from 'dotenv'; //bring in dotenv for access to env
import { MongoClient } from 'mongodb'; //brings in mongoclient to conn to db

dotenv.config(); //setsup env variable connection

const connectionString = process.env.mongoURI; //grabs connString from env

const client = new MongoClient(connectionString); //creates a new mongo client with conn string

let conn; //variable to store conn in

try {
    conn = await client.connect();

    console.log('MongoDB Connected')

} catch (err) {
    console.error(err)
}

let db = conn.db('sample_training'); //choosing which cluster to access

export default db; //export connected db
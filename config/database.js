const { MongoClient } = require("mongodb");
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
  "mongodb+srv://node321:node321@nodecluster.4ybqagf.mongodb.net/test";
const client = new MongoClient(url);

// Database Name
const dbName = "Youtube";

async function dbConnect() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  return (collection = db.collection("videos"));
}

module.exports = dbConnect;
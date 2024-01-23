import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ 
  limit: "500kb" 
}));
app.use(cors());

const uri =
  "mongodb+srv://youtube:mongo654@cluster0.nhymzti.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
app.post("/api/contact", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("contacts").collection("contacts");
    const contact = req.body;
    const result = await collection.insertOne(contact);
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import {MongoClient} from 'mongodb';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return;
  }
  const {name, email, message} = req.body;
  if (
    name.trim() === '' ||
    !name ||
    !email.includes('@') ||
    !email ||
    message.trim() === '' ||
    !message
  ) {
    res.status(422).json({message: 'Invalid Input.'});
    return;
  }
  const newInput = {name, email, message};
  const uri = process.env.MONGO_URI;
  let client = new MongoClient(uri);
  try {
    client = await client.connect();
  } catch (error) {
    res.status(500).json({message: 'Could not connect to database'});
    return;
  }
  console.log('Connected successfuly to server');
  const db = client.db('My_Portfolio');
  try {
    const collection = db.collection('feedbacks');
    const result = await collection.insertOne(newInput);
    newInput.id = result.insertedId;
  } catch (error) {
    client.close;
    res.status(500).json({message: 'Storing user feeback failed¡'});
    return;
  }
  client.close();
  res
    .status(201)
    .json({message: 'Feedback submitted successfuly¡', result: newInput});
};

export default handler;

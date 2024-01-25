// import the `MongoClient` object from the library
const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://localhost://27017'

const dbName = 'sim'

let db

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true}).then((client) => {
    db = client.db(dbName)
  })

const itemCreate = (item) => {
  const collection = db.collection('items')
  return collection.insertOne(item)
}

const getItems = () => {
  const collection = db.collection('items')
  return collection.find({}).toArray()
}

const updateQuantity = (id, quantity) => {
  const collection = db.collection('items');
  const objectId = new ObjectId(id); // Convert id to ObjectId
  return collection.findOne({ _id: objectId })
    .then((item) => {
      if (!item) {
        // Item not found, return a 404 response
        return Promise.reject(new Error('Item not found'));
      }
      // Item found, proceed with the update operation
      return collection.updateOne({ _id: objectId }, { $inc: { quantity } });
    });
};

module.exports = { init, itemCreate, getItems, updateQuantity}

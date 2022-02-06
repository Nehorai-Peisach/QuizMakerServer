const { MongoClient } = require('mongodb')

module.exports = class MongoDb {
  constructor(dbConfig) {
    this.db = dbConfig
    this.init()
  }

  init() {
    const uri =
      'mongodb+srv://admin:admin123@quizmakerdb.fepwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

    this.client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }

  connect(collection) {
    this.client.connect()

    this.client.connection.on('connected', () => {
      console.log('connected to db!!!')
    })
  }

  disconnect() {
    this.client.close()
    this.client.connection.on('disconnected', () => {
      console.log('disconnected to db!!!')
    })
  }

  add(input, collection) {
    if (this.client.state !== 'connected') return

    const tmpCollection = client.db('QuizMakerDB').collection(collection)

    tmpCollection.insertOne(input)
  }
}

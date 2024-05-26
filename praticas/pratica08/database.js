const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://sasaestudo2018:back2024@pratica09.yooz3ls.mongodb.net/'

const client = new MongoClient(url);

async function conectarDb() {
    await client.connect();
    return client.db('agenda');
}

module.exports = conectarDb;
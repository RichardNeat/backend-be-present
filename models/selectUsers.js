const {MongoClient} = require('mongodb');
require ('dotenv').config();
const uri = process.env.URI;

let data = '';
if (process.env.NODE_ENV === 'test') {
    data = 'test-data';
} else if (process.env.NODE_ENV === 'development') {
    data = 'app-data';
} else {
    console.log('no database set');
};

exports.selectUsers = async () => {
    const client = new MongoClient(uri)
    try {
        await client.connect()
        const database = client.db(data);
        const users = database.collection('users');
        const returnedUsers = await users.find().toArray();
        return returnedUsers;
    } finally {
        await client.close()
    };
};


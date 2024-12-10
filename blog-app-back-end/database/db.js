import { MongoClient, ServerApiVersion } from 'mongodb';

const Connection = async (username, password) => {
    const uri = `mongodb+srv://${username}:${password}@blog-app.sqxvu.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`;

    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    try {
        await client.connect();
        console.log('Database connected successfully...');
    } 
    catch (error) {
        console.log("Error while connecting with the database...", error);
    }
}

export default Connection;

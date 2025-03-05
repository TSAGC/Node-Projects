// const mongodb = require('mongodb').MongoClient;
// const express = require('express');
// const url = 'mongodb://localhost:27017';
// const dbName = 'Node';

// const app = express();






// function getAllData() {
//     mongodb.connect(url, (err, client) => {
//         if(err) {
//             console.error('Failed to connect to MongoDB:', err);
//             throw err;
//         }
//         const db = client.db(dbName);
//         db.collection('Unit3').find().toArray((err, result) => {
//             if (err) throw err;
//             console.log(result);
//             client.close();
//         });
//     });
// }

// // function insertData({ name, email }) {
// //     mongodb.connect(url, (err, client) => {
// //         if(err) {
// //             console.error('Failed to connect to MongoDB:', err);
// //             throw err;
// //         }
// //         const db = client.db(dbName);
// //         db.collection('Unit3').insertOne({ name, email }, (err, result) => {
// //             if (err) throw err;
// //             console.log(result.ops);
// //             client.close();
// //         });
// //     });
// // }



// function insertData({ name, email }) {

//     console.log('function is working');
    
//     mongodb.connect(url, (err, client) => {
//         if (err) {
//             console.log('Failed to connect to MongoDB:', err);
//             throw err;
//         }else{
//             console.log('Connected to MongoDB');
//         }
//         // console.log('Connected to MongoDB');
//         // const db = client.db(dbName);
//         // db.collection('Unit3').insertOne({ name, email }, (err, result) => {
//         //     if (err) {
//         //         console.error('Failed to insert document:', err);
//         //         throw err;
//         //     }
//         //     console.log('Document inserted:', result.ops);
//         //     client.close();
//         // });
//     });
// }

// // app.get('/insertData', (req, res) => {
// //     insertData({ name: 'Savvas', email: 'Savvas@mail.com' });
// // });

// insertData({ name: 'Savvas', email: 'Savvas@mail.com' });  // Insert data to the database


// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });




const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection details
const url = 'mongodb://localhost:27017/'; // Replace with your MongoDB connection URL
const dbName = 'Node'; // Replace with your database name
const client = new MongoClient(url);

async function insertData({ name, email }) {
    try {
        console.log('insertData function is called');
        const db = client.db(dbName);

        // Insert the document into the specified collection
        const result = await db.collection('Unit3').insertOne({ name, email });
        console.log('Document inserted with ID:', result.insertedId); // Log the ID of the inserted document
    } catch (err) {
        console.error('Failed to insert document:', err);
    }
}

async function getAllData() {
    try {
        console.log('getAllData function is called');
        const db = client.db(dbName);

        const result = await db.collection('Unit3').find().toArray();

        console.log('Data retrieved:', result);
        
        return result;
    }catch(err){
        console.error('Failed to retrieve data:', err);
    }
}

app.get('/insertData', async (req, res) => {
    try {
        // Ensure the database connection is open
        if (!client.topology || !client.topology.isConnected()) {
            await client.connect();
            console.log('Connected to MongoDB');
        }

        // Call the insertData function
        await insertData({ name: 'Savvas', email: 'Savvas@mail.com' });

        res.send('Data insertion completed');
    } catch (err) {
        console.error('Error in /insertData route:', err);
        res.status(500).send('An error occurred while inserting data');
    }
});


app.get('/getAllData', async (req, res) => {
    try{
        if(!client.topology || !client.topology.isConnected()){
            await client.connect();
            console.log('Connected to MongoDB');
        }

        result = await getAllData();

        res.send(result);
    }catch(err){
        console.error('Error in /getAllData route:', err);
        res.status(500).send('An error occurred while retrieving data');
    }

}); 

// Graceful shutdown of the MongoDB client when the server stops
process.on('SIGINT', async () => {
    await client.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

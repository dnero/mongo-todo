// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server...');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// find dups using delete many
	db.collection('Users').deleteMany({name: 'DIN'});

	// find one and delete by id
	db.collection('Users').findOneAndDelete({_id: new ObjectID('586ab2d0b4d2294b75c2800a')}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});
	//db.close();
});


require('dotenv').config()


const connectDB = require('./config/db')
connectDB();


//@Product Model & Data
const Product = require('./modules/product/model')
const productsData = require('./modules/product/data')


//@Import all data
const importData = async () => {
	try {
		await Product.deleteMany({});

		await Product.insertMany(productsData);

		console.log('Data Import Sucess');

		process.exit();
	}
	catch(error) {
		console.log('Data import failed')
		process.exit(1);
	}
}

importData();
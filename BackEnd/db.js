
const mongoose= require('mongoose');
const mongoUri="mongodb://localhost:27017/";

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoUri) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDB


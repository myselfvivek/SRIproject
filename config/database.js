const mongoose = require('mongoose');

require('dotenv').config();
const URL = process.env.DATABASE_URL;

const connectdB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {console.log("DB connection successfull.")})
    .catch((err) => {
        console.log('Issue in DB connection.');
        console.error(err.message);
        process.exit(1);
    })
}
module.exports = connectdB;

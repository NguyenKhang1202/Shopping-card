const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.URL_CONNECT_DB);
        console.log('Connect successful');
    } catch (error) {
        console.error(error);
    }

}

module.exports = { connect };

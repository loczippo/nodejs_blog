const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/loczippo_education_dev',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            },
        );
        console.log('connect succesfully');
    } catch (error) {
        console.log('connect failed');
    }
}
module.exports = { connect };

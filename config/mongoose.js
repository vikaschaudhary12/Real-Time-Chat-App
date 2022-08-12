const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://VikasChaudhary:<password>@cluster0.hb3iamh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected');
}).catch(err => console.log(err));

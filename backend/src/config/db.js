const mongoose = require('mongoose');

const uri =  'mongodb+srv://' + process.env.USERNAME+ ':'+ process.env.MONGO_ATLAS +'@cluster0.1dgrd.mongodb.net/ksp-backend?retryWrites=true&w=majority';
mongoose
    .connect(
        uri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            dbName: 'ksp-backend'
        },
        function(err) {
            if (err) {
                return console.dir(err);
            }
        })
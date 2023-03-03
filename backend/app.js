const express = require('express')
require('./src/config/db')

// const authRouter = require('./src/routes/auth')


var app = express()
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE"
    );
    next();
});

// app.use('/auth', authRouter)

app.listen(process.env.PORT, function(){})
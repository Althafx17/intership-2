var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Althafx17:althaf@avlox.p0ww5.mongodb.net/?retryWrites=true&w=majority&appName=Avlox")
    .then(() => {
        console.log("db connected")
    })
    .catch((err) => {
        console.log(err)


    })


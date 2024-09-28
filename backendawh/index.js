// importing
var express = require("express")
require("./connection")
var empModel = require("./model/employee")

// initialising express
var app = express()
// initilisation
app.use(express.json())
// api creation
app.get('/trial', (req, res) => {
    res.send("its an employee app")
})
// add api
app.post('/add', async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: "data added" })
    }
    catch (error) {
        console.log(error)
    }
})
app.get('/view', async (req, res) => {
    try {
        var data = await empModel.find()
        res.send(data)
    }
    catch (error) {
        console.log(error)
    }
})
// delete api
app.delete('/remove/:id', async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: 'Deleteed successfully!!' })
    }
    catch (error) {
        console.log(error)
    }
})
app.put('/update/:id', async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: 'update successfully!!' })
    }
    catch (error) {
        console.log(error)
    }
})

// port
app.listen(3007, () => {
    console.log("port is running")

})
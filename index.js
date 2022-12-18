const express = require("express")
const userRoute = require("./src/routes/user.route")

const app = express()

app.use("/soma", userRoute)

// ROTA

    // METHOD HTTP - CRUD -- (CREATE, READ, UPDATE, DELETE)
    //GET - Pega Info
    //POST - cria uma info
    //PUT - Altera toda a info
    //PATH - Altera parte da Info
    //DELETE - Apaga uma info

    //NAME
    // Function (CallBack)

// app.get('/', (req, res) => {
  
// })

app.listen(3000)

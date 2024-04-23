require("dotenv").config()
require("express-async-errors");
const express = require("express");
const notFoundMiddleWare = require("./errors/not-found");
const errorHandlingMiddleware = require("./middlewares/errorHandlerMiddleware")

const authRouter= require("./routes/main")
const app = express()
const port = process.env.PORT || 3000



//middleware 
app.use(express.static('./public'))
//json middleware
app.use(express.json());


//api routes 
app.use("/api/v1",authRouter)




//not found middleware 
app.use(notFoundMiddleWare);


//custom error handling middleware
app.use(errorHandlingMiddleware)



const start = async () =>{
    try {
       app.listen(port,console.log(`Server is running on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}


start()
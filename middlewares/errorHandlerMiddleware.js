const CustomApiError = require("../errors/custom");
const {StatusCodes} = require("http-status-codes")

const errorHandlingMiddleware = (error,req,res,next) =>{
    if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({
            success:false,
            message:error.message
        })
    }else{
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:`Something Went Wrong!`
        })
    }
}


module.exports=errorHandlingMiddleware
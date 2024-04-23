const CustomApiError = require('./custom')
const {StatusCodes} = require("http-status-codes")

class UnathenticatedError extends  CustomApiError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}


module.exports =UnathenticatedError
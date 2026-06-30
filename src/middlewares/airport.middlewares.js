const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse } = require('../utils/common');
const AppError = require('../utils/errors/app.errors');


function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        ErrorResponse.error = new AppError( ['Name not found in the incoming request body'], StatusCodes.BAD_REQUEST);
        ErrorResponse.message = 'Something went wrong while creating airport';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.code) {
        ErrorResponse.error = new AppError( ['Code not found in the incoming request body'], StatusCodes.BAD_REQUEST);
        ErrorResponse.message = 'Something went wrong while creating airport';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.city) {
        ErrorResponse.error = new AppError( ['City not found in the incoming request body'], StatusCodes.BAD_REQUEST);
        ErrorResponse.message = 'Something went wrong while creating airport';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

function validateUpdateRequest(req, res, next) {
    if(!req.body || Object.keys(req.body).length == 0){
        ErrorResponse.error = new AppError(['Can not update with empty data'], StatusCodes.BAD_REQUEST);
        ErrorResponse.message = 'Something went wrong while updating airport';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}
const { AirportService } = require('../services');

const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse } = require('../utils/common');

/**
 * POST : /airports
 * @param {*} req body -> name, code, city, address
 * @param {*} res 
 * @returns a new airport
 */

async function createAirport(req, res) {
    try {
        const response = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            city: req.body.city
        });
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully created the airport";
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while creating airport',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET: /airports
 * @param {*} req 
 * @param {*} res 
 * @returns all the airports
 */

async function getAirports(req, res) {
    try {
        const response = await AirportService.getAirports();
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully fetched all the airports";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while fetching the airports',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET: /airports/:id
 * @param {*} req params -> id
 * @param {*} res 
 * @returns the airport with the given id
 */

async function getAirport(req, res) {
    try {
        const response = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully fetched the airport";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while fetching the airport',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


/**
 * DELETE: /airports/:id
 * @param {*} req params -> id
 * @param {*} res 
 * @returns 0 if not deleted and 1 if deleted successfully.
 */

async function destroyAirport(req, res) {
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully deleted the airport";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while deleting the airport',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * PATCH: /airports/:id
 * @param {*} req params -> id, body -> data object to be updated with
 * @param {*} res 
 * @returns array containing only single element giving count of what no of row are updated
 */

async function updateAirport(req, res) {
    try {
        const response = await AirportService.updateAirport(req.params.id, req.body);
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully updated the airport";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while updating the airport',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}
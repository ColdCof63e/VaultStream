import { type Request, type Response, type NextFunction } from 'express'
import { AppError } from '../utils/AppError.js'

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if( err instanceof AppError ) {
        return res.status(err.statusCode).json({status:"error", statusCode: err.statusCode, message: err.message})
    } else {
        console.error("CRITICAL SYSTEM ERROR: ", err.message)
        return res.status(500).json({status: "error", statusCode: 500, message: "Internal Server Error. Please try again later!"})
    }
}
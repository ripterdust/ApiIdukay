import { Request, Response } from 'express'
import { RouteResponse } from '../common/interfaces/response.interface'

export const indexDogs = (req: Request, res: Response) => {
    const response: RouteResponse = {
        statuscode: 200,
        message: 'Dogs collection',
    }

    res.status(response.statuscode).json(response)
}

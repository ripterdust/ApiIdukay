import { Request, Response } from 'express'
import { RouteResponse } from '../common/interfaces/response.interface'
import { Dogs } from '../models/dogs.model'

export const indexDogs = (req: Request, res: Response) => {
    const response: RouteResponse = {
        statuscode: 200,
        message: 'Dogs collection',
        data: Dogs.get(),
    }

    res.status(response.statuscode).json(response)
}

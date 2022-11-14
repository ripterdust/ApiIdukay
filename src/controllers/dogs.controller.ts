import { Request, Response } from 'express'
import { RouteResponse } from '../common/interfaces/response.interface'
import { Dogs } from '../models/dogs.model'

export const indexDogs = async (req: Request, res: Response) => {
    const data = await Dogs.get()
    const response: RouteResponse = {
        statuscode: 200,
        message: 'Dogs collection',
        data,
    }

    res.status(response.statuscode).json(response)
}

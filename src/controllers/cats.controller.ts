import { Request, Response } from 'express'
import { RouteResponse } from '../common/interfaces/response.interface'
import { Cats } from '../models/cats.model'

export const indexCats = async (req: Request, res: Response) => {
    const data = await Cats.get()

    const response: RouteResponse = {
        statuscode: 200,
        message: 'Cats collection',
        data,
    }

    res.status(response.statuscode).json(response)
}

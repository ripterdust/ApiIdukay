import { Request, Response } from 'express'
import { RouteResponse } from '../common/interfaces/response.interface'

export const indexCats = async (req: Request, res: Response) => {
    const response: RouteResponse = {
        statuscode: 200,
        message: 'Cats collection',
    }

    res.status(response.statuscode).json(response)
}

import { Request, Response } from 'express'
import { RouteResponse } from '../common/interfaces/response.interface'
import { Cats } from '../models/cats.model'

export const indexCats = async (req: Request, res: Response) => {
    const response = await Cats.get()

    res.status(response.statuscode).json(response)
}

export const storeCats = async (req: Request, res: Response) => {
    const { name, age } = req.body

    const data = await Cats.store({ name, age })

    const response: RouteResponse = {
        statuscode: 200,
        message: data,
    }

    res.status(response.statuscode).json(response)
}

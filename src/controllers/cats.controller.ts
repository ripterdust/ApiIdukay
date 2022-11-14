import { Request, Response } from 'express'
import { RouteResponse } from '../common/interfaces/response.interface'
import { Cats } from '../models/cats.model'

export const indexCats = async (req: Request, res: Response) => {
    const response = await Cats.get()

    res.status(response.statuscode).json(response)
}

export const storeCats = async (req: Request, res: Response) => {
    const { name, age } = req.body

    const response = await Cats.store({ name, age })

    res.status(response.statuscode).json(response)
}

export const findCats = async (req: Request, res: Response) => {
    const { id } = req.params
    const response: RouteResponse = await Cats.find(id)
    res.status(response.statuscode).json(response)
}

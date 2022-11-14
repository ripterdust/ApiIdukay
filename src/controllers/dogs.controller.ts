import { Request, Response } from 'express'
import { RouteResponse } from '../common/interfaces/response.interface'
import { Dogs } from '../models/dogs.model'

export const indexDogs = async (req: Request, res: Response) => {
    const response: RouteResponse = await Dogs.get()

    res.status(response.statuscode).json(response)
}

export const storeDogs = async (req: Request, res: Response) => {
    const { name, age } = req.body

    const response: RouteResponse = await Dogs.store({ name, age })

    res.status(response.statuscode).json(response)
}

export const findDogs = async (req: Request, res: Response) => {
    const { id } = req.params

    const response: RouteResponse = await Dogs.find(id)

    res.status(response.statuscode).json(response)
}

export const deleteDogs = async (req: Request, res: Response) => {
    const { id } = req.params
    const response: RouteResponse = await Dogs.delete(id)

    res.status(response.statuscode).json(response)
}

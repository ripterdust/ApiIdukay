import { Request, Response } from 'express'
import { RouteResponse } from '../common/interfaces/response.interface'
import { Dogs } from '../models/dogs.model'

export const indexDogs = async (req: Request, res: Response) => {
    const response = await Dogs.get()

    res.status(response.statuscode).json(response)
}

export const storeDogs = async (req: Request, res: Response) => {}

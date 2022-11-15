import { Request, Response } from 'express'
import { RouteResponse } from '../../common/interfaces/response.interface'
import { transformQueryFields } from '../../common/ultis/transform.util'
import { Dogs } from './dogs.model'

export const indexDogs = async (req: Request, res: Response) => {
    const { fields } = req.query

    const fielsObject = transformQueryFields(`${fields}`)

    const response: RouteResponse = await Dogs.get(fielsObject)

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

export const updateDog = async (req: Request, res: Response) => {
    const { id } = req.params
    const response: RouteResponse = await Dogs.update(id, req.body)

    res.status(response.statuscode).json(response)
}

export const searchDog = async (req: Request, res: Response) => {
    let { name, age } = req.query
    let nameQuery: string | RegExp = ''

    if (name) {
        nameQuery = new RegExp(`${name}`, 'gi')
    }

    const response: RouteResponse = await Dogs.search(nameQuery, age)
    res.status(response.statuscode).json(response)
}

import { Request, Response } from 'express'
import { RouteResponse } from '../../common/interfaces/response.interface'
import { transformQueryFields } from '../../common/ultis/transform.util'
import { Cats } from './cats.model'

export const indexCats = async (req: Request, res: Response) => {
    const { fields } = req.query

    const fielsObject = transformQueryFields(`${fields}`)

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

export const deleteCats = async (req: Request, res: Response) => {
    const { id } = req.params
    const response: RouteResponse = await Cats.delete(id)

    res.status(response.statuscode).json(response)
}

export const updateCats = async (req: Request, res: Response) => {
    const { id } = req.params
    const response: RouteResponse = await Cats.update(id, req.body)

    res.status(response.statuscode).json(response)
}

export const searchCat = async (req: Request, res: Response) => {
    let { name, age } = req.query
    let nameQuery: string | RegExp = ''

    if (name) {
        nameQuery = new RegExp(`${name}`, 'gi')
    }

    const response: RouteResponse = await Cats.search(nameQuery, age)
    res.status(response.statuscode).json(response)
}

import { CatsModel } from '../common/database/models/catsModel'
import { Model } from '../common/interfaces/model.interface'
import { Object } from '../common/interfaces/object.interface'
import { RouteResponse } from '../common/interfaces/response.interface'

const getAll = async (): Promise<RouteResponse> => {
    try {
        const data = await CatsModel.find()

        const response: RouteResponse = {
            statuscode: 200,
            message: 'Records found in the collection',
            data,
        }

        return response
    } catch (err) {
        return {
            statuscode: 500,
            message: 'Internal server error',
        }
    }
}

const store = async ({ name, age }: Object): Promise<RouteResponse> => {
    try {
        const data = await CatsModel.create({ name, age })

        const response: RouteResponse = {
            statuscode: 200,
            message: 'Elemet stored successfully',
            data,
        }

        return response
    } catch (err) {
        return {
            statuscode: 500,
            message: 'Internal server error',
        }
    }
}

const find = async (id: string): Promise<RouteResponse> => {
    try {
        const data = await CatsModel.findById(id)
        const response: RouteResponse = {
            statuscode: 200,
            message: 'Records found in the collection',
            data,
        }

        return response
    } catch (err) {
        return {
            statuscode: 500,
            message: 'Internal server error',
        }
    }
}

export const Cats: Model = {
    get: getAll,
    store,
    find,
}

import { CatsModel } from '../../common/database/models/catsModel'
import { Model } from '../../common/interfaces/model.interface'
import { Object } from '../../common/interfaces/object.interface'
import { RouteResponse } from '../../common/interfaces/response.interface'

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
            message: 'Record found in the collection',
            data: data ? data : [],
        }

        return response
    } catch (err) {
        return {
            statuscode: 500,
            message: 'Internal server error',
        }
    }
}

const deleteElement = async (_id: string): Promise<RouteResponse> => {
    try {
        const data = await CatsModel.deleteOne({ _id })
        const response: RouteResponse = {
            statuscode: 200,
            message: 'Element deleted',
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

const update = async (_id: string, params: Object): Promise<RouteResponse> => {
    try {
        const data = await CatsModel.updateOne({ _id }, params)
        return {
            statuscode: 200,
            message: 'Item updated',
            data,
        }
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
    delete: deleteElement,
    update,
}

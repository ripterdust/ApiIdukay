import { DogsModel } from '../../common/database/models/dogsModel'
import { Model } from '../../common/interfaces/model.interface'
import { Object } from '../../common/interfaces/object.interface'
import { RouteResponse } from '../../common/interfaces/response.interface'

const getAll = async (): Promise<RouteResponse> => {
    try {
        const data = await DogsModel.find()

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
        const data = await DogsModel.create({ name, age })

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
        const data = await DogsModel.findById(id)

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
        const data = await DogsModel.deleteOne({ _id })
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
        const data = await DogsModel.updateOne({ _id }, params)
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

export const Dogs: Model = {
    get: getAll,
    store,
    find,
    delete: deleteElement,
    update,
}

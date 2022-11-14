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

const store = async (object: Object): Promise<RouteResponse> => {
    try {
        const response: RouteResponse = {
            statuscode: 200,
            message: 'Elemet stored successfully',
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
    store: store,
}

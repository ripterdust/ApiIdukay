import { DogsModel } from '../common/database/models/dogsModel'
import { Model } from '../common/interfaces/model.interface'

const getAll = async () => {
    try {
        const data = await DogsModel.find()
        return data
    } catch (error) {
        return await []
    }
}

export const Dogs: Model = {
    get: getAll,
}

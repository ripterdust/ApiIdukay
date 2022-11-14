import { CatsModel } from '../common/database/models/catsModel'
import { Model } from '../common/interfaces/model.interface'

const getAll = async () => {
    try {
        const data = await CatsModel.find()
        return data
    } catch (err) {
        return await []
    }
}

export const Cats: Model = {
    get: getAll,
}

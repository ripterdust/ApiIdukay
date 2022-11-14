import { DogsModel } from '../common/database/models/dogsModel'
import { Model } from '../common/interfaces/model.interface'

const getAll = async () => {
    try {
        const result = await DogsModel.find()
        return result
    } catch (error) {
        console.log('error')
        return await 'Error'
    }
}

export const Dogs: Model = {
    get: getAll,
}

import { GeneralObject } from '../interfaces/generalObject.interface'

export const transformQueryFields = (fields: string): Object => {
    if (fields === 'undefined') {
        return {}
    }
    const fieldsArray = fields.replace(/ /gi, '').split(',')
    let fieldsObject: GeneralObject = {}

    fieldsArray.map((field) => {
        fieldsObject[field] = 1

        return null
    })
    console.log(fieldsObject)
    return {}
}

import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema

const catsSchema = new Schema({
    name: String,
    age: Number,
})

// Db model
export const CatsModel = mongoose.model('cats', catsSchema)

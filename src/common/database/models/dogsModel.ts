import mongoose from 'mongoose'

const Schema = mongoose.Schema

const DogsSchema = new Schema({
    name: String,
    age: Number,
})

// DbModel

export const DogsModel = mongoose.model('dogs', DogsSchema)

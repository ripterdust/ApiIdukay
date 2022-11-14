import express from 'express'

export const app = express()

// Configuration
app.set('port', process.env.PORT || 3000)

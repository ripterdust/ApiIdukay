import dotenv from 'dotenv'

dotenv.config()

export const environment = {
    DBURI:
        process.env.DBURI ||
        'mongodb+srv://ripterdust:marlyn2010@idukay.pninwim.mongodb.net/idukay?retryWrites=true&w=majority',
    PORT: process.env.PORT || 3000,
    DBUSER: process.env.DBUSER || 'ripterdust',
    DBPASS: process.env.DBPASS || 'marlyn2010',
}

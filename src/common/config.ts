import dotenv from 'dotenv'

dotenv.config()

export const environment = {
    DBURI: process.env.DBURI || '',
    PORT: process.env.PORT || 3000,
    DBUSER: process.env.DBUSER || '',
    DBPASS: process.env.DBPASS || '',
}

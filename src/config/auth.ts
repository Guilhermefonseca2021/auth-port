import 'dotenv/config'

export default {
    port: process.env.PORT,
    secret_key: process.env.JWT_SECRET_KEY,
    mongo_uri: process.env.MONGODB_URI
} 
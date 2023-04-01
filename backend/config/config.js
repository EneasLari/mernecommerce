import dotenv from 'dotenv'
import path from 'path';

dotenv.config();

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET || "Your secret key goes here but should not go here",
    mongoUri: process.env.MONGODB_URI ||
        process.env.MONGO_HOST ||
        'mongodb://' + (process.env.IP || '127.0.0.1') + ':' + (process.env.MONGO_PORT || '27017') + '/MERNeCommerceDB'
}

export default config
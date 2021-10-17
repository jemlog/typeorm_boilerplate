import { ConnectionOptions } from "typeorm"
// 보통 JSON보다는 TS형식으로 import를 하기 
const connectionOptions: ConnectionOptions =  {
   "synchronize": true,
   "logging": true,
   "type": "postgres",
   "host": process.env.DB_ENDPOINT || "localhost",
   "port": 5432,
   "username": process.env.DB_USERNAME || "postgres",
   "password": process.env.DB_PASSWORD || "4321",
   "database": "typeorm_structure",
   "entities"   : [
      "dist/src/entity/*.js"
   ],
   "migrations" : [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subcriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}

export default connectionOptions;
import express from 'express'
import cors from 'cors'
import {graphqlHTTP} from 'express-graphql'
import {schema} from "./graphql/schema";

class App {
    public app: express.Application

    constructor() {
        this.app = express()

        this.setMiddlewares()
        this.setGraphql()
    }

    public listen() {
        const PORT = process.env.PORT || 5000
        this.app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    }

    public setMiddlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    public setGraphql() {
        this.app.use('/graphql', graphqlHTTP({
            graphiql: true,
            schema
        }))
    }
}

export default App
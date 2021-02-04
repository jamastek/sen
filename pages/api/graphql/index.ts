import { ApolloServer } from "apollo-server-micro"
import Cors from "micro-cors"
import { applyMiddleware } from "graphql-middleware"
import schema from "prisma/schema"
// import { authMiddleware } from "prisma/middlewares"

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

const apolloServer = new ApolloServer({
  schema: applyMiddleware(schema),
  apollo: {
    key: process.env.APOLLO_KEY,
    graphVariant: process.env.APOLLO_GRAPH_VARIANT
  },
  context: ({req, res}) => {
    return {req, res}
  },
})

const cors = Cors({
  allowMethods: ["POST", "OPTIONS"],
  allowHeaders: [
    "Access-Control-Allow-Origin",
    "Origin, X-Requested-With, Content-Type, Accept",
    "X-HTTP-Method-Override, Authorization",
  ],
  origin: "https://studio.apollographql.com"
});

const createHandler = apolloServer.createHandler({
  path: process.env.API_URL,
})

const handler = cors((req, res) => {
  if (req.method === "OPTIONS") {
    return res.status(200).send("ok")
  }

  return createHandler(req, res)
})

export default handler
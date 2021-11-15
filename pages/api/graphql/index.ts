import { ApolloServer } from "apollo-server-micro"
import Cors from "micro-cors"
import { applyMiddleware } from "graphql-middleware"
import schema from "../../../prisma/schema"
// import { authMiddleware } from "prisma/middlewares"

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

const apolloServer = new ApolloServer({
  schema: applyMiddleware(schema as any),
  context: ({req, res}) => {
    return {req, res}
  },
})

const startServer = apolloServer.start()

const cors = Cors({
  allowMethods: ["POST", "OPTIONS"],
  allowHeaders: [
    "Access-Control-Allow-Origin",
    "Origin, X-Requested-With, Content-Type, Accept",
    "X-HTTP-Method-Override, Authorization",
  ],
});

const handler = cors(async (req, res) => {
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  // res.setHeader(
  //   "Access-Control-Allow-Origin",
  //   "https://studio.apollographql.com"
  // );
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );
  if (req.method === "OPTIONS") {
    res.end()
    return false
  }

  await startServer

  await apolloServer.createHandler({
    path: process.env.API_URL,
  })(req, res)
})

export default handler
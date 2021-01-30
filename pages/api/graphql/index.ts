import { ApolloServer } from "apollo-server-micro"
import { applyMiddleware } from "graphql-middleware"
import schema from "prisma/schema"

const logResult = async (resolve, root, args, context, info) => {
  console.log("2. logResult")
  const result = await resolve(root, args, context, info)
  console.log(`4. logResult: ${JSON.stringify(result)}`)
  return result
}

const schemaMiddleware = applyMiddleware(schema, logResult)

export const config = {
  api: {
    bodyParser: false,
  },
}

export default new ApolloServer({
  schema: schemaMiddleware
})
.createHandler({
  path: "/api/graphql",
})
import { ApolloServer } from 'apollo-server-micro'
import schema from "prisma/schema"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
})
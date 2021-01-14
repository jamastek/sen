import { makeSchema } from 'nexus'
import path from 'path'
import { Query, Mutation, Post, User, GQLDate } from "./nexus"

const schema = makeSchema({
  types: [Query, Mutation, Post, User, GQLDate],
  outputs: {
    typegen: path.join(process.cwd(), 'prisma/generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'prisma/generated/schema.graphql'),
  },
})

export default schema
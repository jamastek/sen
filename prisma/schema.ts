import { makeSchema } from 'nexus'
import path from 'path'
import { Query, Mutation, Post, User, GQLDate } from "./object-types"

const schema = makeSchema({
  types: [Query, Mutation, Post, User, GQLDate],
  outputs: {
    typegen: path.join(process.cwd(), 'prisma/nexus/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'prisma/nexus/schema.graphql'),
  },
})

export default schema
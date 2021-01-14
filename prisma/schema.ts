import { makeSchema } from 'nexus'
import path from 'path'
import * as allTypes from "./nexus"

const schema = makeSchema({
  types: allTypes,
  outputs: {
    typegen: path.join(process.cwd(), 'prisma/generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'prisma/generated/schema.graphql'),
  },
})

export default schema
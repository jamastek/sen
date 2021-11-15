import { makeSchema } from "nexus"
import path from "path"
import * as allTypes from "./nexus"

const schema = makeSchema({
  types: allTypes,
  outputs: {
    typegen: path.join(
      process.cwd(),
      "node_modules","@types","nexus-typegen","index.d.ts"
    ),
    schema: path.join(process.cwd(), "prisma/generated/schema.graphql"),
  },
})

export default schema
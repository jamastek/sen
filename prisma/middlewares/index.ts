import { rule, shield } from "graphql-shield"
import { isAuthenticated } from "services/authentication"

const rules = {
  isAuthenticated: rule()((parent, args, ctx) => {
    return isAuthenticated(ctx.req)
  })
}

export const authMiddleware = shield({
  Query: {
    user: rules.isAuthenticated
  }
})
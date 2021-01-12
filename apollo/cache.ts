import { InMemoryCache } from "@apollo/client"
import { statesVar } from "./states"

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        states: {
          read () {
            return statesVar()
          }
        }
      }
    }
  }
})

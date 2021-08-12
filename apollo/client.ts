import { useMemo } from "react"
import { ApolloClient } from "@apollo/client"
import { cache } from "./cache"

let apolloClient

function createIsomorphLink() {
  if (typeof window === "undefined") {
    const { SchemaLink } = require("@apollo/client/link/schema")
    const { schema } = require("../prisma/schema")
    return new SchemaLink({ schema })
  } else {
    const { HttpLink } = require("@apollo/client/link/http")
    const { ApolloLink } = require("@apollo/client")
    // const { setContext } = require("@apollo/client/link/context")
    // const { onError } = require("@apollo/client/link/error")

    const httpLink = new HttpLink({
      uri: "/api/graphql",
      credentials: "same-origin",
    })
    // const errorLink = onError(({ graphQLErrors, networkError }) => {
    //   if (graphQLErrors)
    //     graphQLErrors.forEach(({ message, locations, path }) => {
    //       console.log(
    //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
    //       )
    //     }
    //     );
    //   if (networkError) console.log(`[Network error]: ${networkError}`);
    // })

    // const authLink = setContext((_, { headers }) => {
    //   const token = getToken()
    //   return {
    //     headers: {
    //       ...headers,
    //       authorization: token ? `Bearer ${token}` : "",
    //     }
    //   }
    // });

    return ApolloLink.from([httpLink])
  }
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphLink(),
    cache
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
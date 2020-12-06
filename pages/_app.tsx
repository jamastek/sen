// import { ApolloProvider } from "@apollo/client"
// import { useApollo } from "../apollo/client"
import "styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  // const apolloClient = useApollo(pageProps.initialApolloState)

  return <Component {...pageProps} />
}

export default MyApp

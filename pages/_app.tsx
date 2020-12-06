// import { ApolloProvider } from "@apollo/client"
// import { useApollo } from "../apollo/client"
import type { AppProps /*, AppContext */ } from 'next/app'
import "styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // const apolloClient = useApollo(pageProps.initialApolloState)

  return <Component {...pageProps} />
}

export default MyApp

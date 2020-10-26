import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import '../styles/globals.css'
import Layout from '../layout'

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
})

function App({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	)
}

export default App

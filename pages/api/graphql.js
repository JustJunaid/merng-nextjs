// const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const { ApolloServer, gql } = require('apollo-server-micro')
const Post = require('./models/Post')

const dbString =
	'mongodb+srv://Junaid:Hf6Ur7BTlQydglE5@cluster0.wawkd.mongodb.net/merng?retryWrites=true&w=majority'

mongoose
	.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Database connected!')
	})

const typeDefs = gql`
	type Post {
		id: ID!
		author: String!
		body: String!
		createdAt: String!
	}

	type Query {
		sayHi: String!
		getPosts: [Post]
	}

	type Mutation {
		createPost(author: String!, body: String!): Post!
		deletePost(id: String!): String!
	}
`

const resolvers = {
	Query: {
		sayHi: () => 'Junaid here',
		getPosts: () => Post.find(),
	},

	Mutation: {
		createPost: async (_, { author, body }) => {
			const result = await Post.create({
				author,
				body,
				createdAt: new Date().toISOString(),
			})
			return result
		},

		deletePost: async (_, { id }) => {
			await Post.deleteOne({ _id: id })
			return 'Post deleted!'
		},
	},
}

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
})

const handler = apolloServer.createHandler({ path: '/api/graphql' })

export const config = {
	api: { bodyParser: false },
}

export default handler

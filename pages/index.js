import { useState, useEffect } from 'react'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { Spin } from 'antd'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Posts from '../components/Posts'

const StyledLoaderContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const POSTS = gql`
	query {
		getPosts {
			id
			body
			author
		}
	}
`

export default function Home() {
	const router = useRouter()
	const [posts, setPosts] = useState()
	const { loading, error, data } = useQuery(POSTS)
	// const [getPosts, { lazyloading, lazyData }] = useLazyQuery(POSTS)

	// if (router.query.source === 'createPost') getPosts()

	useEffect(() => {
		if (data) setPosts(data.getPosts)
		// else if (lazyData) setPosts(lazyData.getPosts)
	}, [data])

	if (error) return 'Something went wrong!'

	if (loading)
		return (
			<StyledLoaderContainer>
				<Spin size="large" />
			</StyledLoaderContainer>
		)

	return (
		<div style={{ paddingBottom: '4rem' }}>
			<Posts posts={posts} setPosts={setPosts} />
		</div>
	)
}

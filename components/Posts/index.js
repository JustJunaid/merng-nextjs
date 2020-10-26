import React from 'react'
import { Card, Avatar } from 'antd'
import styled from 'styled-components'
import DeletePost from '../DeletePost'

const { Meta } = Card

const StyledCard = styled(Card)`
	width: auto !important;
	margin: 20px;
`

export default function Posts({ posts, setPosts }) {
	const Post = ({ postId, author, body, loading }) => (
		<StyledCard loading={loading}>
			<Meta
				avatar={
					<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
				}
				title={
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<div>{author}</div>
						<DeletePost postId={postId} posts={posts} setPosts={setPosts} />
					</div>
				}
				description={body}
			/>
		</StyledCard>
	)

	return (
		<>
			{posts?.map(({ id, author, body }) => (
				<Post key={id} postId={id} author={author} body={body} />
			))}
		</>
	)
}

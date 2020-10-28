import React from 'react'
import { useMutation, gql } from '@apollo/client'
import { DeleteTwoTone } from '@ant-design/icons'

const DELETE_POST = gql`
	mutation DeletePost($id: String!) {
		deletePost(id: $id)
	}
`

export default function DeletePost({ postId, posts, setPosts }) {
	const [deletePost] = useMutation(DELETE_POST)

	return (
		<div
			onClick={async () => {
				await deletePost({ variables: { id: postId } })
				const remainingPost = posts.filter(({ id }) => id !== postId)
				setPosts(remainingPost)
			}}
		>
			<DeleteTwoTone />
		</div>
	)
}

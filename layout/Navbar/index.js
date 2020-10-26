import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
// import { HomeOutlined, ProfileOutlined } from '@ant-design/icons'
import {
	HomeTwoTone,
	ProfileTwoTone,
	PlusCircleTwoTone,
} from '@ant-design/icons'
import Link from 'next/link'

const StyledNavbarContainer = styled.div`
	position: fixed;
	bottom: 0;
	width: 100vw;
	height: 60px;
	background: #c2c2c2;
	z-index: 1;

	display: flex;
	align-items: center;
	justify-content: center;
`

const StyledCol = styled(Col)`
	text-align: center;
	width: 100%;
`

const IconStyles = { fontSize: '32px', color: '#fff', cursor: 'pointer' }

export default function Navbar() {
	return (
		<StyledNavbarContainer>
			<StyledCol>
				<Link href="/">
					<HomeTwoTone style={IconStyles} />
				</Link>
			</StyledCol>
			<StyledCol>
				<Link href="/createPost">
					<PlusCircleTwoTone style={IconStyles} />
				</Link>
			</StyledCol>
			<StyledCol>
				<Link href="/profile">
					<ProfileTwoTone style={IconStyles} />
				</Link>
			</StyledCol>
		</StyledNavbarContainer>
	)
}

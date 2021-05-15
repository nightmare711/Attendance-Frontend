import React from 'react'
import styled from 'styled-components'

const TitlePrimary = styled.div`
	width: fit-content;
	color: #bbc4cc;
`
const Heading = styled.h1`
	font-size: 26px;
	font-weight: 500;
`
const Route = styled.span`
	font-size: 16px;
	font-weight: 500;
`

export const Title = ({ title, route }) => {
	return (
		<TitlePrimary>
			<Heading>{title}</Heading>
			<Route>Dashboard / {route}</Route>
		</TitlePrimary>
	)
}

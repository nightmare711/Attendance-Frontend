import React from 'react'
import { listSidebar } from 'constants/constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { TEXT_COLOR } from 'constants/theme'
import styled from 'styled-components'

const Container = styled.div`
	width: 300px;
	background-color: rgb(22, 27, 30);
	color: ${TEXT_COLOR};
	height: 100vh;
	transition: all 0.3s;
`
const ListView = styled.ul`
	overflow: hidden;
`
const ContainerLeft = styled.div``

const Item = styled.li`
	width: 300px;
	font-size: 17px;
	padding: 20px 30px;
	transition: all 0.3s;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	cursor: pointer;
	&:hover {
		color: white;
	}
`
const TitleItem = styled.span``
export const Sidebar = () => {
	return (
		<Container id='sidebar'>
			<ListView>
				{listSidebar.map((item, index) => (
					<Item key={index}>
						<ContainerLeft>
							<FontAwesomeIcon icon={item.icon} />
							<TitleItem className='ml-4'>{item.title}</TitleItem>
						</ContainerLeft>
						{item.child.length !== 0 ? <FontAwesomeIcon icon={faChevronRight} /> : null}
					</Item>
				))}
			</ListView>
		</Container>
	)
}

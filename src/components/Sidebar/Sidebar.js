import React, { useState } from 'react'
import { listSidebar } from 'constants/constants'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { TEXT_COLOR } from 'constants/theme'
import styled from 'styled-components'
import './Sidebar.css'

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
	background-color: ({ active }) => active ? #e6007e :#000;
	&:hover {
		color: white;
	}
	&:active {
		color: chocolate;
		text-decoration: underline;
	}
`

const TitleItem = styled.span``
export const Sidebar = () => {
	return (
		<Container id='sidebar'>
			<ListView>
				{listSidebar.map((item, index) => (
					<Item key={index} id={'selector' + index}>
						<Link to={item.href}>
							<ContainerLeft>
								<FontAwesomeIcon icon={item.icon} />
								<TitleItem className='ml-4'>{item.title}</TitleItem>
							</ContainerLeft>
						</Link>
						{item.child.length !== 0 ? <FontAwesomeIcon icon={faChevronRight} /> : null}
					</Item>
				))}
			</ListView>
		</Container>
	)
}

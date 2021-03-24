import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faBell, faComments } from '@fortawesome/free-solid-svg-icons'
import { SearchEngine } from 'components'
import { MAIN_COLOR, TEXT_COLOR, bg_1 } from 'constants/theme'
import Avatar from 'assets/avt.png'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 70px;
	background-color: ${MAIN_COLOR};
	align-items: center;
	color: ${TEXT_COLOR};
	justify-content: space-between;
`
const Logo = styled.h1`
	font-family: 'Cassandra', arial;
	font-size: 30px;
	font-weight: 600;
	width: 300px;
	text-align: center;
`
const ContainerIcon = styled.div`
	font-size: 25px;
`
const ContainerIconPoint = styled(ContainerIcon)`
	position: relative;
`
const Badge = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	background-color: #fc6075;
	width: 15px;
	height: 15px;
	font-size: 10px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
`
const RightContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0px 40px;
	width: 45%;
`
const LeftContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`
const AccountContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
	padding: 10px;
	cursor: pointer;
	border-radius: 20px;
	transition: all 0.3s;
	&:hover {
		background-color: ${bg_1};
	}
`
const AccountImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`
const AccountText = styled.span`
	margin-right: 10px;
`

export const Navbar = () => {
	return (
		<Container>
			<LeftContainer>
				<Logo>Block Magic</Logo>
				<ContainerIcon>
					<FontAwesomeIcon className='icon' icon={faChevronCircleRight} />
				</ContainerIcon>
			</LeftContainer>
			<RightContainer>
				<SearchEngine />
				<ContainerIconPoint>
					<FontAwesomeIcon icon={faBell} />
					<Badge>0</Badge>
				</ContainerIconPoint>
				<ContainerIconPoint>
					<FontAwesomeIcon icon={faComments} />
					<Badge>0</Badge>
				</ContainerIconPoint>
				<AccountContainer>
					<AccountText>Hoang Tran</AccountText>
					<AccountImg src={Avatar} alt='avt' />
				</AccountContainer>
			</RightContainer>
		</Container>
	)
}

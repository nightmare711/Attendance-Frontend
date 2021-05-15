import React from 'react'
import styled from 'styled-components'
import LogoImg from 'assets/avt.png'
import { useGetUserInfo } from 'queries/account.queries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useToggleSidebar } from 'services/useDOM'
import { faChevronCircleRight, faBell, faComments } from '@fortawesome/free-solid-svg-icons'
import { SearchEngine } from 'components'
import { useLogout } from 'services/useAuth'
import { MAIN_COLOR, TEXT_COLOR, bg_1 } from 'constants/theme'

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
const TextLogo = styled.h1`
	font-family: 'Dexotick By Dhan Studio', arial;
	font-size: 25px;
	font-weight: 600;
	text-align: center;
	margin-left: 20px;
`
const ContainerLogo = styled.div`
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Logo = styled.img.attrs((props) => ({
	src: LogoImg,
}))`
	width: 40px;
`
const ContainerIcon = styled.div`
	font-size: 25px;
	cursor: pointer;
`
const ContainerIconSidebar = styled(ContainerIcon)`
	transform: rotate(180deg);
	transition: all 0.3s;
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
	const { data: account, isSuccess } = useGetUserInfo()
	const toggleSidebar = useToggleSidebar()
	const logout = useLogout()
	return (
		<Container>
			<LeftContainer>
				<ContainerLogo>
					<Logo />
				</ContainerLogo>
				<ContainerIconSidebar id='icon-sidebar' onClick={toggleSidebar}>
					<FontAwesomeIcon className='icon' icon={faChevronCircleRight} />
				</ContainerIconSidebar>
				<TextLogo>Block Magic</TextLogo>
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
				<AccountContainer onClick={logout}>
					<AccountText>{isSuccess ? account?.user?.name : null}</AccountText>
					<AccountImg src={account?.user?.imgUrl || ''} alt='avt' />
				</AccountContainer>
			</RightContainer>
		</Container>
	)
}

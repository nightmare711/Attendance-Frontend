import React from 'react'
import { listInformation } from 'constants/list-information'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const ContainerInfor = styled.div`
	padding: 30px;
`
const HeadInfor = styled.div`
	text-transform: uppercase;
	color: #bbc4cc;
	margin: 18px 0;
	font-size: 20px;
`
const ItemInfor = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: #16191c;
	border: 1px solid #2e3840;
	color: #535c64;
	border-radius: 8px;
	padding: 10px;
	height: auto;
	font-size: 22px;
	margin-bottom: 15px;
`
const LeftItem = styled.div`
	display: flex;
	align-items: center;
`
const ContentItem = styled.span`
	display: flex;
	flex-direction: row;
	font-weight: 100px;
`
const AvatarItem = styled.span`
	display: flex;
	justify-content: flex-end;
`
const ImgItem = styled.img`
	width: 25%;
	border-radius: 50%;
	border: solid 3px white;
`
const IconItem = styled.div`
	margin-right: 20px;
	font-size: 30px;
`

export const Information = () => {
	return (
		<ContainerInfor>
			<HeadInfor>Today</HeadInfor>
			{listInformation.map((item) => (
				<ItemInfor>
					<LeftItem>
						<IconItem>
							<FontAwesomeIcon icon={item.icon} />
						</IconItem>
						<ContentItem>
							{item.name} {item.content}
						</ContentItem>
					</LeftItem>
					<AvatarItem>
						<ImgItem src={item.image} alt='avatar'></ImgItem>
					</AvatarItem>
				</ItemInfor>
			))}
		</ContainerInfor>
	)
}

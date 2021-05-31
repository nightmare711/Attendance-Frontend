import React from 'react'
import styled from 'styled-components'
import { PaddingContent } from 'components'
import { useGetNotification } from 'queries/notification.queries'
import { TEXT_COLOR } from 'constants/theme'
import { Title } from 'components/Title/Title'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #23272b;
	box-sizing: border-box;
	width: 100%;
	overflow: hidden;
	color: ${TEXT_COLOR};
`
const ListNotification = styled.ul`
	margin-top: 20px;
`
const Notification = styled.li`
	padding: 10px 20px;
	background-color: #17191c;
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`
const SideContent = styled.div`
	max-width: 50%;
	display: flex;
	flex-direction: column;
`
const TitleNoti = styled.h1`
	text-transform: uppercase;
	font-size: 20px;
`
const DateContent = styled.span`
	font-size: 10px;
	color: white;
	margin-top: 20px;
`
const Content = styled.span`
	font-size: 14px;
`
const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	box-shadow: 0px 0px 14px 0px rgba(255, 255, 255, 1);
`
const SideRight = styled(SideContent)`
	align-items: center;
	justify-content: center;
`

export const ViewNotification = () => {
	const { data: notificationList } = useGetNotification()

	return (
		<Container>
			<PaddingContent>
				<Title title='Notification' route='View Notification' />
				<ListNotification>
					{notificationList
						? notificationList.map((item) => (
								<Notification>
									<SideContent>
										<TitleNoti>{item.title}</TitleNoti>
										<Content>{item.content}</Content>
										<DateContent>{item.createdAt}</DateContent>
									</SideContent>
									<SideRight>
										<Avatar src={item.imgUrl} alt='avatar' />
										<Content>{"Teacher's Name: " + item.name}</Content>
									</SideRight>
								</Notification>
						  ))
						: null}
				</ListNotification>
			</PaddingContent>
		</Container>
	)
}

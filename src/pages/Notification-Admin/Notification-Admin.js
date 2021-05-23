import React from 'react'
import styled from 'styled-components'
import { PaddingContent, BtnPrimary, BtnTertiary } from 'components'
import { TEXT_COLOR } from 'constants/theme'
import { Title } from 'components/Title/Title'
import { usePostNotification } from 'queries/notification.queries'
import { Link } from 'react-router-dom'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #23272b;
	box-sizing: border-box;
	width: 100%;
	overflow: hidden;
	color: ${TEXT_COLOR};
`
const ContainerForm = styled.div``
const ContainerHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
const ContainerInput = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`
const InputText = styled.input`
	margin-top: 10px;
	padding: 10px 20px;
	color: black;
	border-radius: 10px;
	outline: none;
`
const TextArea = styled.textarea`
	margin-top: 10px;
	padding: 10px 20px;
	color: black;
	border-radius: 10px;
	outline: none;
`

export const NotificationAdmin = () => {
	const { mutate: postNotification } = usePostNotification()
	const [notification, setNotification] = React.useState({
		title: '',
		content: '',
	})
	return (
		<Container>
			<PaddingContent>
				<ContainerHeader>
					<Title title='Notification' route='Add Notification' />
					<Link to='/notification'>
						<BtnTertiary>View Notification</BtnTertiary>
					</Link>
				</ContainerHeader>
				<ContainerForm>
					<ContainerInput>
						Title:
						<InputText
							onChange={(e) =>
								setNotification({
									...notification,
									title: e.target.value,
								})
							}
							type='text'
						/>
					</ContainerInput>
					<ContainerInput>
						Content:
						<TextArea
							onChange={(e) =>
								setNotification({
									...notification,
									content: e.target.value,
								})
							}
							type='text'
							rows={10}
						/>
					</ContainerInput>
					<BtnPrimary onClick={() => postNotification(notification)}>Add Notification</BtnPrimary>
				</ContainerForm>
			</PaddingContent>
		</Container>
	)
}

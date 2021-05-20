import React from 'react'
import styled from 'styled-components'
import { PaddingContent, BtnPrimary } from 'components'
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
const ContainerForm = styled.div``
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
	return (
		<Container>
			<PaddingContent>
				<Title title='Notification' route='Notification' />
				<ContainerForm>
					<ContainerInput>
						Title:
						<InputText type='text' />
					</ContainerInput>
					<ContainerInput>
						Content:
						<TextArea type='text' rows={10} />
					</ContainerInput>
					<BtnPrimary>Add Notification</BtnPrimary>
				</ContainerForm>
			</PaddingContent>
		</Container>
	)
}

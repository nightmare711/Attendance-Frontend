import React from 'react'
import styled from 'styled-components'
import { bg_2, TEXT_COLOR } from 'constants/theme'
import {
	Form,
	ContainerInput,
	FormInput,
	Label,
	BtnPrimary,
	Logo,
	Title,
	TitleExtend,
	Question,
	LinkQuestion,
} from 'components'

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: ${bg_2};
	flex-direction: column;
	color: ${TEXT_COLOR};
`

export const LoginPage = () => {
	return (
		<Container>
			<Logo />
			<Form>
				<Title>Login</Title>
				<TitleExtend>Access to our Dashboard</TitleExtend>
				<ContainerInput>
					<Label>Email Address</Label>
					<FormInput type='email' />
				</ContainerInput>
				<ContainerInput>
					<Label>Password</Label>
					<FormInput type='password' />
				</ContainerInput>
				<BtnPrimary>Login</BtnPrimary>
				<Question>
					Don't have an account yet? <LinkQuestion href='/register'>Register</LinkQuestion>
				</Question>
			</Form>
		</Container>
	)
}

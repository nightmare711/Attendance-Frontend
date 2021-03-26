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
	LinkQuestion,
	Question,
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

export const RegisterPage = () => {
	return (
		<Container>
			<Logo />
			<Form>
				<Title>Register</Title>
				<TitleExtend>Access to our Dashboard</TitleExtend>
				<ContainerInput>
					<Label>Email Address</Label>
					<FormInput type='email' />
				</ContainerInput>
				<ContainerInput>
					<Label>Password</Label>
					<FormInput type='password' />
				</ContainerInput>
				<ContainerInput>
					<Label>Repeat Password</Label>
					<FormInput type='password' />
				</ContainerInput>
				<BtnPrimary>Register</BtnPrimary>
				<Question>
					Already have an account? <LinkQuestion href='/login'>Login</LinkQuestion>
				</Question>
			</Form>
		</Container>
	)
}

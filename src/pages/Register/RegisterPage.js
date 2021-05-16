import React from 'react'
import styled from 'styled-components'
import { DataContext } from 'contexts/DataContext'
import { useRegister } from 'services/useAuth'
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
	height: fit-content;
	padding: 50px 0px;
	background-color: ${bg_2};
	flex-direction: column;
	color: ${TEXT_COLOR};
`

export const RegisterPage = () => {
	const data = React.useContext(DataContext)
	const register = useRegister(data.info)
	return (
		<Container>
			<Logo />
			<Form>
				<Title>Register</Title>
				<TitleExtend>Access to our Dashboard</TitleExtend>
				<ContainerInput>
					<Label>Email Address</Label>
					<FormInput
						onChange={(e) => data.setInfo({ ...data.info, email: e.target.value })}
						type='email'
					/>
				</ContainerInput>
				<ContainerInput>
					<Label>Password</Label>
					<FormInput
						onChange={(e) => data.setInfo({ ...data.info, password: e.target.value })}
						type='password'
					/>
				</ContainerInput>
				<ContainerInput>
					<Label>Repeat Password</Label>
					<FormInput
						onChange={(e) => data.setInfo({ ...data.info, confirm: e.target.value })}
						type='password'
					/>
				</ContainerInput>
				<ContainerInput>
					<Label>Student's ID</Label>
					<FormInput
						onChange={(e) => data.setInfo({ ...data.info, studentId: e.target.value })}
						type='text'
					/>
				</ContainerInput>
				<ContainerInput>
					<Label>Link Facebook</Label>
					<FormInput
						onChange={(e) => data.setInfo({ ...data.info, idFB: e.target.value })}
						placeholder='Ex: https://www.facebook.com/kudokun0711/'
						type='text'
					/>
				</ContainerInput>
				<BtnPrimary onClick={register}>Register</BtnPrimary>
				<Question>
					Already have an account? <LinkQuestion href='/login'>Login</LinkQuestion>
				</Question>
			</Form>
		</Container>
	)
}

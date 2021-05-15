import React from 'react'
import styled from 'styled-components'
import { useLogin } from 'services/useAuth'
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
	const login = useLogin()
	const [account, setAccount] = React.useState({
		email: '',
		password: '',
	})
	return (
		<Container>
			<Logo />
			<Form>
				<Title>Login</Title>
				<TitleExtend>Access to our Dashboard</TitleExtend>
				<ContainerInput>
					<Label>Email Address</Label>
					<FormInput
						onChange={(e) =>
							setAccount({
								...account,
								email: e.target.value,
							})
						}
						type='email'
					/>
				</ContainerInput>
				<ContainerInput>
					<Label>Password</Label>
					<FormInput
						onChange={(e) =>
							setAccount({
								...account,
								password: e.target.value,
							})
						}
						type='password'
					/>
				</ContainerInput>
				<BtnPrimary onClick={() => login(account.email, account.password)}>Login</BtnPrimary>
				<Question>
					Don't have an account yet? <LinkQuestion href='/register'>Register</LinkQuestion>
				</Question>
			</Form>
		</Container>
	)
}

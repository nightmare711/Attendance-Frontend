import React from 'react'
import { bg_form } from 'constants/theme'
import { Logo, BtnPrimary } from 'components'
import { useUpdateInfo } from 'queries/account.queries'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'

const Container = styled.div`
	position: absolute;
	padding: 40px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 800px;
	height: 700px;
	background-color: ${bg_form};
	box-sizing: border-box;
	color: white;
	z-index: 11;
`
const Title = styled.h1`
	font-size: 30px;
	font-weight: 600;
	width: 100%;
	line-height: 20px;
	margin-top: ${(props) => (props.function ? '20px' : '0px')};
`
const FormContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 20px;
`
const Input = styled.input`
	background-color: transparent;
	border-bottom: 1px solid white;
	padding: 5px 0px;
	outline: none;
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`
const Label = styled.label`
	margin-left: ${(props) => (props.radio ? '10px' : '0px')};
`
const FunctionContainer = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
`
const RadioContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
`
export const InformationFill = () => {
	const { mutate } = useUpdateInfo()

	const [info, setInfo] = React.useState({
		name: '',
		dateOfBirth: new Date(),
		phoneNumber: '',
		isTeacher: false,
		class: '',
	})
	return (
		<Container>
			<FormContainer>
				<Logo />
				<Title>Information</Title>
				<InputContainer>
					<Label>Name</Label>
					<Input
						onChange={(e) =>
							setInfo({
								...info,
								name: e.target.value,
							})
						}
						type='text'
					/>
				</InputContainer>
				<InputContainer>
					<Label>Phone Number</Label>
					<Input
						onChange={(e) =>
							setInfo({
								...info,
								phoneNumber: e.target.value.toString(),
							})
						}
						type='number'
					/>
				</InputContainer>
				<InputContainer>
					<Label>Class</Label>
					<Input
						onChange={(e) =>
							setInfo({
								...info,
								class: e.target.value,
							})
						}
						type='text'
					/>
				</InputContainer>
				<InputContainer>
					<Label>Date Of Birth</Label>
					<DatePicker
						selected={info.dateOfBirth}
						onChange={(date) =>
							setInfo({
								...info,
								dateOfBirth: date,
							})
						}
					/>
				</InputContainer>
				<Title function>Function</Title>
				<FunctionContainer>
					<RadioContainer>
						<Label radio htmlFor='student'>
							Student
						</Label>
						<Input
							onChange={(e) => {
								if (e.target.checked) {
									setInfo({ ...info, isTeacher: false })
								}
							}}
							id='student'
							type='radio'
							name='is-teacher'
							value='student'
							checked
						/>
					</RadioContainer>
					<RadioContainer>
						<Label radio htmlFor='teacher'>
							Teacher
						</Label>
						<Input
							id='teacher'
							onChange={(e) => {
								if (e.target.checked) {
									setInfo({ ...info, isTeacher: false })
								}
							}}
							type='radio'
							name='is-teacher'
							value='teacher'
						/>
					</RadioContainer>
				</FunctionContainer>
				<BtnPrimary onClick={() => mutate(info)}>Fill Information</BtnPrimary>
			</FormContainer>
		</Container>
	)
}

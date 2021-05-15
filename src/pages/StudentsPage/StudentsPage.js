import React from 'react'
import { BtnTertiary, PaddingContent } from 'components'
import { Title } from 'components/Title/Title'
import { useGetStudents } from 'queries/students.query'
import styled from 'styled-components'

const StudentsContainer = styled.div`
	background-color: #23272b;
	width: 100%;
	color: white;
	overflow-y: scroll;
	overflow-x: hidden;
`
const Avatar = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50%;
`
const ContainerHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
const ContainerList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 30px;
	margin-top: 20px;
`
const SearchInput = styled.input.attrs((props) => ({
	type: 'text',
}))`
	background-color: #2e3438;
	padding: 0px 20px;
	outline: none;
`
const Students = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: center;
	width: fit-content;
	background-color: #17191c;
	width: 100%;
	padding: 20px;
	border-radius: 5px;
`
const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-top: 20px;
`
const BtnSearch = styled.div`
	background-color: #55cd62;
	text-align: center;
	padding: 15px 0px;
	cursor: pointer;
	transition: all 0.3s;
	&:active {
		transform: translateY(3px);
	}
`
const Name = styled.span`
	font-family: 'Comic Sans MS';
	font-size: 18px;
	font-weight: 600;
	text-transform: capitalize;
	color: #bbc4cc;
`
const ID = styled.span`
	font-weight: 400;
	font-size: 14px;
	color: #8e8e8e;
	font-family: 'Comic Sans MS';
`
const BtnView = styled.div`
	padding: 10px;
	background-color: black;
	border-radius: 10px;
	margin-top: 10px;
	font-weight: 600;
	cursor: pointer;
	font-size: 13px;
	transition: all 0.3s;
	&:active {
		transform: translateY(3px);
	}
	&:hover {
		background-color: white;
		color: black;
	}
`
export const StudentsPage = () => {
	const { data: students } = useGetStudents()
	console.log(students)
	return (
		<StudentsContainer>
			<PaddingContent>
				<ContainerHeader>
					<Title title='Employee' route='Employee' />
					<BtnTertiary>Add Student</BtnTertiary>
				</ContainerHeader>
				<ContainerList>
					<SearchInput placeholder='Employee ID' />
					<SearchInput placeholder='Name' />
					<SearchInput disabled />
					<BtnSearch> Search </BtnSearch>
					{students
						? students.map((student) => (
								<Students>
									<Avatar src={student.imgUrl} />
									<TextContainer>
										<Name>{student.name}</Name>
										<ID>{student.email.substr(0, 8)}</ID>
									</TextContainer>
									<BtnView
										onClick={() =>
											window.open('https://www.messenger.com/t/' + student.idFB || '', '_blank')
										}
									>
										Chat with student
									</BtnView>
								</Students>
						  ))
						: null}
				</ContainerList>
			</PaddingContent>
		</StudentsContainer>
	)
}

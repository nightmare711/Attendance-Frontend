import React from 'react'
import { useGetStudents } from 'queries/students.query'
import styled from 'styled-components'
import { MessageModal } from './MessageConfirm'
import { onFilterByName } from 'services/useFilter'

const StudentsContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Overlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	background-color: rgba(0, 0, 0, 0.4);
`
const ContentContainer = styled.div`
	width: 60%;
	height: 60%;
	background-color: white;
	border-radius: 5px;
	position: relative;
`
const ContainerList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column: 1fr 1fr 1fr;
	grid-gap: 10px;
	padding: 20px;
	height: fit-content;
	max-height: 100%;
	overflow: scroll;
	flex: 1;
`
const SearchInput = styled.input.attrs((props) => ({
	type: 'text',
}))`
	background-color: #2e3438;
	padding: 0px 20px;
	outline: none;
	height: 50px;
`
const Students = styled.div`
	display: flex;
	cursor: pointer;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: center;
	width: fit-content;
	background-color: #17191c;
	width: 100%;
	height: 250px;
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
	height: 50px;
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
const Avatar = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50%;
`
export const StudentsPage = ({ onAddStudents, setIsOpenAddStudents }) => {
	const { data: students } = useGetStudents()
	const [isOpenModal, setIsOpenModal] = React.useState('')
	const [name, setName] = React.useState('')
	return (
		<StudentsContainer>
			<Overlay onClick={() => setIsOpenAddStudents(false)} />

			<ContentContainer>
				{isOpenModal ? (
					<MessageModal
						isOpenModal={isOpenModal}
						setIsOpenModal={setIsOpenModal}
						onAddStudents={onAddStudents}
					/>
				) : null}
				<ContainerList>
					<SearchInput placeholder='Employee ID' />
					<SearchInput placeholder='Name' onChange={(e) => setName(e.target.value)} />
					<BtnSearch> Search </BtnSearch>
					{students
						? onFilterByName(students, name).map((student) => (
								<Students onClick={() => setIsOpenModal(student.studentId)}>
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
			</ContentContainer>
		</StudentsContainer>
	)
}

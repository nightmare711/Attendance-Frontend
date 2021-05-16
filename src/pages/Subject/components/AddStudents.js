import React, { useContext } from 'react'
import styled from 'styled-components'
import { FormInput } from 'components'
import { onFilterStudents } from 'services/useFilter'
import { useUpdateStudentsId } from 'services/admin/useSubject'
import { DataContext } from 'contexts/DataContext'
import './index.css'

const AddContainer = styled.div`
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
	background-color: rgba(255, 255, 255, 0.4);
`
const AddStudent = styled.div`
	width: 50%;
	background-color: #23272b;
	height: 50%;
	border-radius: 5px;
	overflow: hidden;
`
const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
`
const BtnSearch = styled.div`
	background-color: #55cd62;
	text-align: center;
	padding: 15px 0px;
	cursor: pointer;
	transition: all 0.3s;
	flex: 1;
	&:active {
		transform: translateY(3px);
	}
`
const ListStudents = styled.ul`
	margin: 0;
	padding: 0;
	margin-top: 20px;
`
const StudentItem = styled.li`
	padding: 10px 20px;
	border-bottom: 1px solid white;
	transition: all 0.3s;
	cursor: pointer;
	&:hover {
		background-color: #2d3238;
	}
`
export const AddStudentModal = ({ students, subjects, idProject, setIsOpenModal }) => {
	const [name, setName] = React.useState('')
	const [updateId, setUpdateId] = React.useState([])
	const updateStudents = useUpdateStudentsId()
	const data = useContext(DataContext)
	const onClickUpdateId = (studentId) => {
		const temp = [...updateId]
		if (temp.includes(studentId)) {
			const index = temp.indexOf(studentId)
			document.querySelector(`.a${studentId}`).style.opacity = 1
			temp.splice(index, 1)
		} else {
			temp.push(studentId)
		}
		console.log('temp', temp)
		setUpdateId(temp)
	}
	React.useEffect(() => {
		const subject = subjects.filter((item) => item._id === idProject)
		const studentsId = subject[0]?.studentsId
		if (subject && studentsId) {
			setUpdateId(studentsId)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	console.log(updateId)
	React.useEffect(() => {
		for (let i = 0; i < updateId.length; i++) {
			try {
				document.querySelector(`.a${updateId[i]}`).style.opacity = 0.4
			} catch {}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [updateId.length])
	return (
		<AddContainer>
			<Overlay onClick={() => setIsOpenModal(false)} />
			<AddStudent>
				<SearchContainer>
					<FormInput onChange={(e) => setName(e.target.value)} type='text' />
					<BtnSearch onClick={() => updateStudents(updateId, idProject, data.isLogin.user_id)}>
						Add Student
					</BtnSearch>
				</SearchContainer>
				<ListStudents>
					{students && subjects
						? onFilterStudents(students, name).map((student, key) => (
								<StudentItem
									onClick={() => onClickUpdateId(student.studentId)}
									className={`a${student.studentId}`}
									key={key}
								>
									{student.studentId + ' - ' + student.name}
								</StudentItem>
						  ))
						: null}
				</ListStudents>
			</AddStudent>
		</AddContainer>
	)
}

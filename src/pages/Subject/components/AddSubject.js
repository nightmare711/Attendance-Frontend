import React from 'react'
import styled from 'styled-components'
import { DataContext } from 'contexts/DataContext'
import { ContainerInput, Label, FormInput, BtnPrimary } from 'components'
import { usePostSubject } from 'services/admin/useSubject'
import { bg_form } from 'constants/theme'

const AddSubjectContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
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
const OverlayContent = styled.div`
	width: 80%;
	height: 80%;
	background-color: ${bg_form};
	border-radius: 5px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`
const ContainerForm = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
`
const ContainerContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	align-items: center;
	justify-content: center;
`

export const AddSubject = ({ onClose, infoSubject, setInfoSubject, setIsOpenAddStudents }) => {
	const data = React.useContext(DataContext)
	const { mutate: postSubject } = usePostSubject()
	const onPostSubject = () => {
		try {
			let count = 0
			if (!infoSubject.subjectName) {
				document.querySelector('.add-subject .subject-name').style.border = '1px solid red'
				count++
			} else {
				document.querySelector('.add-subject .subject-name').style.border = 'none'
			}
			if (!infoSubject.startDate) {
				document.querySelector('.add-subject .start-date').style.border = '1px solid red'
			} else {
				document.querySelector('.add-subject .start-date').style.border = 'none'
			}
			if (!infoSubject.endDate) {
				document.querySelector('.add-subject .end-date').style.border = '1px solid red'
			} else {
				document.querySelector('.add-subject .end-date').style.border = 'none'
			}
			if (!infoSubject.timeStart) {
				document.querySelector('.add-subject .time-start').style.border = '1px solid red'
			} else {
				document.querySelector('.add-subject .time-start').style.border = 'none'
			}
			if (!infoSubject.timeEnd) {
				document.querySelector('.add-subject .time-end').style.border = '1px solid red'
			} else {
				document.querySelector('.add-subject .time-end').style.border = 'none'
			}
			if (!infoSubject.timeAttendance) {
				document.querySelector('.add-subject .time-attendance').style.border = '1px solid red'
			} else {
				document.querySelector('.add-subject .time-attendance').style.border = 'none'
			}
			if (!infoSubject.timeEndAttendance) {
				document.querySelector('.add-subject .time-end-attendance').style.border = '1px solid red'
			} else {
				document.querySelector('.add-subject .time-end-attendance').style.border = 'none'
			}
			if (count === 0) {
				postSubject({ ...infoSubject, teacherId: data.isLogin.user_id })
			}
		} catch {}
	}

	return (
		<AddSubjectContainer className='add-subject'>
			<Overlay onClick={onClose} />
			<OverlayContent>
				<ContainerContent>
					<ContainerForm>
						<ContainerInput>
							<Label>Subject Name</Label>
							<FormInput
								value={infoSubject.subjectName}
								className='subject-name'
								onChange={(e) => setInfoSubject({ ...infoSubject, subjectName: e.target.value })}
								type='text'
							/>
						</ContainerInput>
						<ContainerInput>
							<Label>Start Date</Label>
							<FormInput
								value={infoSubject.startDate}
								className='start-date'
								onChange={(e) => setInfoSubject({ ...infoSubject, startDate: e.target.value })}
								type='date'
							/>
						</ContainerInput>
						<ContainerInput>
							<Label>End Date</Label>
							<FormInput
								value={infoSubject.endDate}
								className='end-date'
								onChange={(e) => setInfoSubject({ ...infoSubject, endDate: e.target.value })}
								type='date'
							/>
						</ContainerInput>
						<ContainerInput onClick={() => setIsOpenAddStudents(true)}>
							<Label>Students</Label>
							<FormInput
								className='students'
								onClick={() => alert('coming soon')}
								disabled
								type='text'
							/>
						</ContainerInput>
						<ContainerInput>
							<Label>Time Start</Label>
							<FormInput
								value={infoSubject.timeStart}
								className='time-start'
								onChange={(e) => setInfoSubject({ ...infoSubject, timeStart: e.target.value })}
								type='number'
							/>
						</ContainerInput>
						<ContainerInput>
							<Label>Time End</Label>
							<FormInput
								value={infoSubject.timeEnd}
								className='time-end'
								onChange={(e) => setInfoSubject({ ...infoSubject, timeEnd: e.target.value })}
								type='text'
							/>
						</ContainerInput>
						<ContainerInput>
							<Label>Start Attendance</Label>
							<FormInput
								value={infoSubject.timeAttendance}
								className='time-attendance'
								onChange={(e) => setInfoSubject({ ...infoSubject, timeAttendance: e.target.value })}
								type='number'
							/>
						</ContainerInput>
						<ContainerInput>
							<Label>End Attendance </Label>
							<FormInput
								value={infoSubject.timeEndAttendance}
								className='time-end-attendance'
								onChange={(e) =>
									setInfoSubject({ ...infoSubject, timeEndAttendance: e.target.value })
								}
								type='number'
							/>
						</ContainerInput>
					</ContainerForm>
					<BtnPrimary onClick={() => onPostSubject()}>Add Subject</BtnPrimary>
				</ContainerContent>
			</OverlayContent>
		</AddSubjectContainer>
	)
}

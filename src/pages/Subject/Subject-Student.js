import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PaddingContent } from 'components'
import { Title } from 'components/Title/Title'
import { useGetSubjects } from 'queries/students.query'
import { useAttendance } from 'services/students/useAttendance'

const SubjectContainer = styled.div`
	background-color: #23272b;
	width: 100%;
	color: white;
	overflow-y: scroll;
	overflow-x: hidden;
`
const Avatar = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	align-self: center;
`
const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
`
const Students = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	background-color: #17191c;
	width: 100%;
	padding: 20px;
	border-radius: 5px;
	margin-top: 20px;
`
const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
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
	width: fit-content;
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
const SidePart = styled.div`
	max-width: 50%;
`
export const SubjectStudent = () => {
	const { data: subjects } = useGetSubjects()
	const { mutate: attendance } = useAttendance()
	return (
		<SubjectContainer>
			<PaddingContent>
				<Title title='Subject' route='Subject' />
				<CardContainer>
					{subjects
						? subjects.map((subject) => (
								<Students>
									<Avatar src={subject.imgUrl} />
									<SidePart>
										<TextContainer>
											<Name>Subject Name: {subject.subjectName}</Name>
											<ID>Subject ID: {subject._id}</ID>
											<ID>Date Start: {subject.date[0].toString()}</ID>
											<ID>Date End: {subject.date[1].toString()}</ID>
											<ID>Time start: {subject.time[0]}:00</ID>
											<ID>Time End: {subject.time[1]}:00</ID>
										</TextContainer>
										<BtnView onClick={() => attendance(subject._id)}>Attendance</BtnView>
									</SidePart>
									<SidePart>
										<TextContainer>
											<Name>Teacher Name: {subject.teacherName}</Name>
											<ID>Teacher ID: {subject.teacherId}</ID>
											<ID>Email: {subject.teacherEmail}</ID>
											<ID>Phone Number: {subject.phoneNumber}</ID>
										</TextContainer>
										<BtnView
											onClick={() => {
												window.open('https://www.messenger.com/t/' + subject.idFB || '', '_blank')
											}}
										>
											Chat with teacher
										</BtnView>
									</SidePart>
								</Students>
						  ))
						: null}
				</CardContainer>
			</PaddingContent>
		</SubjectContainer>
	)
}

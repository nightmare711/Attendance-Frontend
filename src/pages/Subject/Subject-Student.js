import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PaddingContent } from 'components'
import { Title } from 'components/Title/Title'
import { useGetSubjects } from 'queries/students.query'
import { useAttendance } from 'services/students/useAttendance'
import { DataContext } from 'contexts/DataContext'
import { css } from 'styled-components'

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
const ContainerRightText = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex: 1;
	max-width: 70%;
`
const Students = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: #17191c;
	width: 100%;
	padding: 20px 40px;
	border-radius: 5px;
	margin-top: 20px;
`
const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	height: 190px;
	overflow: hidden;
`
const Name = styled.span`
	font-family: 'Comic Sans MS';
	font-size: 20px;
	font-weight: 600;
	text-transform: capitalize;
	color: #bbc4cc;
`
const ID = styled.span`
	font-weight: 400;
	font-size: 14px;
	color: #8e8e8e;
	margin-bottom: 7px;
	font-family: 'Comic Sans MS';
	${(props) =>
		props.Top &&
		css`
			margin-top: 20px;
		`};
`
const TitleID = styled.span`
	width: 100px;
	margin-right: 10px;
	float: left;
`
const BtnView = styled.div`
	padding: 10px;
	background-color: #ff9b43;
	border-radius: 10px;
	margin-top: 10px;
	font-weight: 600;
	width: 140px;
	text-align: center;
	cursor: pointer;
	font-size: 13px;
	transition: all 0.3s;
	&:active {
		transform: translateY(3px);
	}
	&:hover {
		background-color: #ff7c0a;
	}
`
const SidePart = styled.div`
	max-width: 50%;
`
export const SubjectStudent = () => {
	const { data: subjects } = useGetSubjects()
	const { mutate: attendance } = useAttendance()
	const data = React.useContext(DataContext)
	return (
		<SubjectContainer>
			<PaddingContent>
				<Title title='Subject' route='Subject' />
				<CardContainer>
					{subjects
						? subjects.map((subject) => (
								<Students>
									<Avatar src={subject.imgUrl} />
									<ContainerRightText>
										<SidePart>
											<TextContainer>
												<Link
													onClick={() => {
														data.setIdProject(subject._id)
													}}
													to='/notification'
												>
													<Name>Subject Name: {subject.subjectName}</Name>
												</Link>
												<ID Top>
													<TitleID>Subject ID:</TitleID> {subject._id}
												</ID>
												<ID>
													<TitleID>Date Start:</TitleID> {subject.date[0].toString()}
												</ID>
												<ID>
													<TitleID>Date End:</TitleID> {subject.date[1].toString()}
												</ID>
												<ID>
													<TitleID>Time start:</TitleID> {subject.time[0]}:00
												</ID>
												<ID>
													<TitleID>Time End:</TitleID> {subject.time[1]}:00
												</ID>
											</TextContainer>
											<BtnView onClick={() => attendance(subject._id)}>Attendance</BtnView>
										</SidePart>
										<SidePart>
											<TextContainer>
												<Name>Teacher Name: {subject.teacherName}</Name>
												<ID Top>
													<TitleID>Teacher ID:</TitleID> {subject.teacherId}
												</ID>
												<ID>
													<TitleID>Email:</TitleID> {subject.teacherEmail}
												</ID>
												<ID>
													<TitleID>Phone Number:</TitleID> {subject.phoneNumber}
												</ID>
											</TextContainer>
											<BtnView
												onClick={() => {
													window.open('https://www.messenger.com/t/' + subject.idFB || '', '_blank')
												}}
											>
												Chat with teacher
											</BtnView>
										</SidePart>
									</ContainerRightText>
								</Students>
						  ))
						: null}
				</CardContainer>
			</PaddingContent>
		</SubjectContainer>
	)
}

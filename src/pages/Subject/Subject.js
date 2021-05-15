import React from 'react'
import { PaddingContent, BtnTertiary } from 'components'
import { Title } from 'components/Title/Title'
import { AddSubject } from './components/AddSubject'
import { useGetSubjectById } from 'services/admin/useSubject'
import styled from 'styled-components'

const SubjectContainer = styled.div`
	background-color: #23272b;
	width: 100%;
	color: white;
	overflow-y: scroll;
	overflow-x: hidden;
`
const ContainerHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
const ListSubject = styled.table`
	width: 100%;
	margin-top: 20px;
`
const HeadTable = styled.thead`
	background-color: #17191c;
`
const BodyTable = styled.tbody``
const TRow = styled.tr`
	&:nth-child(even) {
		background-color: #17191c;
	}
`
const THead = styled.th`
	text-align: center;
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
`
const TDescription = styled.td`
	padding: 10px 10px;
	text-align: center;
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
`
export const Subject = () => {
	const [isOpenAddSubject, setIsOpenAddName] = React.useState(false)
	const { data: subjects } = useGetSubjectById()
	return (
		<SubjectContainer>
			{isOpenAddSubject ? <AddSubject onClose={() => setIsOpenAddName(false)} /> : null}
			<PaddingContent>
				<ContainerHeader>
					<Title title='Subject' route='Subject' />
					<BtnTertiary onClick={() => setIsOpenAddName(true)}>Add Subject</BtnTertiary>
				</ContainerHeader>
				<ListSubject>
					<HeadTable>
						<TRow>
							<THead>ID</THead>
							<THead>Subject Name</THead>
							<THead>Date</THead>
							<THead>Time</THead>
							<THead>Students</THead>
							<THead>Attendance</THead>
							<THead>Time Attendance</THead>
						</TRow>
					</HeadTable>
					<BodyTable>
						{subjects
							? subjects.map((subject) => (
									<TRow>
										<TDescription>{subject._id}</TDescription>
										<TDescription>{subject.subjectName}</TDescription>
										<TDescription>
											{subject.date[0].substr(0, 4) + '-' + subject.date[1].substr(0, 4)}
										</TDescription>
										<TDescription>{subject.time[0] + '-' + subject.time[1]}</TDescription>
										<TDescription>
											<BtnTertiary>View</BtnTertiary>
										</TDescription>
										<TDescription>
											<BtnTertiary>View</BtnTertiary>
										</TDescription>

										<TDescription>
											<BtnTertiary>
												{subject.attendanceTime[0] + '-' + subject.attendanceTime[1] || 0}
											</BtnTertiary>
										</TDescription>
									</TRow>
							  ))
							: null}
					</BodyTable>
				</ListSubject>
			</PaddingContent>
		</SubjectContainer>
	)
}
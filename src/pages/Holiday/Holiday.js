import React from 'react'
import { listHoliday } from 'constants/holiday'
import styled from 'styled-components'
import { bg_3, TEXT_COLOR, TEXT_MAINCOLOR, bg_btn } from 'constants/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const HolidayPage = styled.div`
	padding: 30px;
	background: ${bg_3};
	color: ${TEXT_MAINCOLOR};
	font-weight: 100;
	width: 100%;
`
const HeadHoliday = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
`
const LeftHead = styled.div``
const RightHead = styled.div``
const TitleHoliday = styled.div`
	font-size: 25px;
	color: ${TEXT_COLOR};
`
const SubTitle = styled.div`
	display: flex;
`
const LeftTitle = styled.div`
	color: ${TEXT_COLOR};
	padding-right: 5px;
`

const BtnHoliday = styled.div`
	border: 1px solid #ff9b44;
	border-radius: 50px;
	color: #fff;
	font-weight: 500;
	min-width: 140px;
	background-color: #ff9b44;
	padding: 0.375rem 0.75rem;
	&:hover {
		background: ${bg_btn};
	}
`
const TableHoliday = styled.table`
	width: 100%;
`
const LineTable = styled.tr`
	&:nth-child(odd) {
		background: rgba(22, 25, 28, 1);
	}
`
const TitleTable = styled.th`
	color: ${TEXT_COLOR};
	text-align: left;
	padding: 10px 15px;
`
const BtnAction = styled.button`
	margin-left: 5px;
	&:hover {
		color: #007bff;
	}
`
const ContentTable = styled.td`
	padding: 10px 15px;
`
export const Holiday = () => {
	return (
		<HolidayPage>
			<HeadHoliday>
				<LeftHead>
					<TitleHoliday>Holidays 2021</TitleHoliday>
					<SubTitle>
						<LeftTitle>Dashboard</LeftTitle>/ Holidays
					</SubTitle>
				</LeftHead>
				<RightHead>
					<BtnHoliday>+ Add Holiday</BtnHoliday>
				</RightHead>
			</HeadHoliday>
			<TableHoliday>
				<LineTable>
					<TitleTable>#</TitleTable>
					<TitleTable>Title</TitleTable>
					<TitleTable>Holiday date</TitleTable>
					<TitleTable>Day</TitleTable>
					<TitleTable>Action</TitleTable>
				</LineTable>
				{listHoliday.map((item) => (
					<LineTable>
						<ContentTable>{item.order}</ContentTable>
						<ContentTable>{item.title}</ContentTable>
						<ContentTable>{item.date}</ContentTable>
						<ContentTable>{item.day}</ContentTable>
						<ContentTable>
							<BtnAction>
								<FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
							</BtnAction>
						</ContentTable>
					</LineTable>
				))}
			</TableHoliday>
		</HolidayPage>
	)
}

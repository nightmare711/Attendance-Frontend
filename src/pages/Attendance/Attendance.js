import React from 'react'
import { Title } from 'components/Title/Title'
import { PaddingContent } from 'components'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetAttendanceSubject } from 'queries/teacher.queries'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const AttendanceContainer = styled.div`
	background-color: #23272b;
	width: 100%;
	color: white;
	overflow-y: scroll;
	overflow-x: hidden;
`
const ContainerList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 30px;
	margin-top: 20px;
	margin-bottom: 20px;
`
const SearchInput = styled.input.attrs((props) => ({
	type: 'text',
}))`
	background-color: #2e3438;
	padding: 0px 20px;
	outline: none;
	border-radius: 5px;
`
const SelectInput = styled.select`
	background-color: #2e3438;
	padding: 0px 20px;
	outline: none;
	border-radius: 5px;
	color: #bbc4cc;
`

const OptionInput = styled.option`
	padding: 15px 20px;
	outline: none;
	border-radius: 5px;
	color: #bbc4cc;
	&:hover {
		color: #ff9b44;
	}
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
const TableAttendance = styled.table`
	width: 100%;
	color: #bbc4cc;
`
const ImgEmp = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 10px;
`

const TRTable = styled.tr`
	&:nth-child(odd) {
		background: rgba(22, 25, 28, 1);
	}
`
const THTable = styled.th`
	text-align: left;
	padding: 10px 8px;
`
const TDTable = styled.td`
	text-align: center;
	${(props) =>
		props.name &&
		css`
			display: flex;
			align-items: center;
			vertical-align: middle;
			white-space: nowrap;
			margin-right: 30px;
			padding: ;
		`};
	padding: 10px 8px;
`
const Yes = styled.div`
	color: #55ce63;
`
const No = styled.div`
	color: #f62d51;
`
export const AttendancePage = () => {
	const attendance = useGetAttendanceSubject()
	console.log('attendance page', attendance)
	return (
		<AttendanceContainer>
			<PaddingContent>
				<Title title='Attendance' route='Attendance' />
				<ContainerList>
					<SearchInput placeholder='Employee ID' />
					<SelectInput>
						<OptionInput value='jan'>Jan</OptionInput>
						<OptionInput value='feb'>Feb</OptionInput>
						<OptionInput value='mar'>Mar</OptionInput>
						<OptionInput value='apr'>Apr</OptionInput>
						<OptionInput value='may'>May</OptionInput>
						<OptionInput value='jun'>Jun</OptionInput>
						<OptionInput value='jul'>Jul</OptionInput>
						<OptionInput value='aug'>Aug</OptionInput>
						<OptionInput value='sep'>Sep</OptionInput>
						<OptionInput value='oct'>Oct</OptionInput>
						<OptionInput value='nov'>Nov</OptionInput>
						<OptionInput value='dec'>Dec</OptionInput>
					</SelectInput>
					<SelectInput>
						<OptionInput value='2021'>2021</OptionInput>
						<OptionInput value='2020'>2020</OptionInput>
						<OptionInput value='2019'>2019</OptionInput>
						<OptionInput value='2018'>2018</OptionInput>
						<OptionInput value='2017'>2017</OptionInput>
					</SelectInput>

					<BtnSearch>Search</BtnSearch>
				</ContainerList>
				<TableAttendance>
					<TRTable>
						<THTable>Employee</THTable>
						<THTable>1</THTable>
						<THTable>2</THTable>
						<THTable>3</THTable>
						<THTable>4</THTable>
						<THTable>5</THTable>
						<THTable>6</THTable>
						<THTable>7</THTable>
						<THTable>8</THTable>
						<THTable>9</THTable>
						<THTable>10</THTable>
						<THTable>11</THTable>
						<THTable>12</THTable>
						<THTable>13</THTable>
						<THTable>14</THTable>
						<THTable>15</THTable>
						<THTable>16</THTable>
						<THTable>17</THTable>
						<THTable>18</THTable>
						<THTable>19</THTable>
						<THTable>20</THTable>
						<THTable>21</THTable>
						<THTable>22</THTable>
						<THTable>23</THTable>
						<THTable>24</THTable>
						<THTable>25</THTable>
						<THTable>26</THTable>
						<THTable>27</THTable>
						<THTable>28</THTable>
						<THTable>29</THTable>
						<THTable>30</THTable>
					</TRTable>
					{attendance
						? attendance.map((item, index) => (
								<TRTable key={index}>
									<TDTable name>
										<ImgEmp src={item.studentInfo[0].imgUrl} /> {item.studentInfo[0].name}
									</TDTable>
									{item.attendance.map((check) => (
										<TDTable>
											{check ? (
												<Yes>
													<FontAwesomeIcon icon={faCheck} />
												</Yes>
											) : (
												<No>
													<FontAwesomeIcon icon={faTimes} />
												</No>
											)}
										</TDTable>
									))}
								</TRTable>
						  ))
						: null}
				</TableAttendance>
			</PaddingContent>
		</AttendanceContainer>
	)
}

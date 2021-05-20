import React from 'react'
import { PaddingContent } from 'components'
import { Title } from 'components/Title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faBell, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { TEXT_COLOR } from 'constants/theme'
import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'

const DashboardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #23272b;
	box-sizing: border-box;
	width: 100%;
	overflow: scroll;
	overflow-x: hidden;
`
const ContainerBox = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 30px;
	flex: 1;
	width: 100%;
	margin-top: 20px;
`
const BoxInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: #17191c;
	padding: 30px;
`
const BoxChart = styled(BoxInfo)`
	margin-top: 20px;
	margin-bottom: 20px;
`
const ContainerIcon = styled.div`
	font-size: 30px;
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 155, 67, 0.4);
	color: rgb(255, 155, 67);
	border-radius: 50%;
`
const BoxNumber = styled.div`
	display: flex;
	flex-direction: column;
	text-align: end;
	color: white;
	color: ${TEXT_COLOR};
`
const Number = styled.h1`
	color: black;
	font-size: 30px;
	font-weight: 600;
`
const MonthNow = new Date().getMonth()
const data = {
	labels: [MonthNow - 6, MonthNow - 5, MonthNow - 4, MonthNow - 3, MonthNow - 2, MonthNow - 1],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3, 30, 2, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		},
	],
}

const options = {
	indexAxis: 'y',
	// Elements options apply to all of the options unless overridden in a dataset
	// In this case, we are setting the border of each horizontal bar to be 2px wide
	elements: {
		bar: {
			borderWidth: 2,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			position: 'right',
		},
		title: {
			display: true,
			text: 'Total Students',
		},
	},
}
export const DashboardAdmin = () => {
	return (
		<DashboardContainer>
			<PaddingContent>
				<Title title='Employee' route='Employee' />
				<ContainerBox>
					<BoxInfo>
						<ContainerIcon>
							<FontAwesomeIcon icon={faBook} />
						</ContainerIcon>
						<BoxNumber>
							<Number>23</Number>
							Subject
						</BoxNumber>
					</BoxInfo>
					<BoxInfo>
						<ContainerIcon>
							<FontAwesomeIcon icon={faUser} />
						</ContainerIcon>
						<BoxNumber>
							<Number>23</Number>
							Students
						</BoxNumber>
					</BoxInfo>
					<BoxInfo>
						<ContainerIcon>
							<FontAwesomeIcon icon={faBell} />
						</ContainerIcon>
						<BoxNumber>
							<Number>23</Number>
							Notification
						</BoxNumber>
					</BoxInfo>
					<BoxInfo>
						<ContainerIcon>
							<FontAwesomeIcon icon={faDollarSign} />
						</ContainerIcon>
						<BoxNumber>
							<Number>23</Number>
							Income
						</BoxNumber>
					</BoxInfo>
				</ContainerBox>
				<BoxChart>
					<Bar data={data} options={options} />
				</BoxChart>
			</PaddingContent>
		</DashboardContainer>
	)
}

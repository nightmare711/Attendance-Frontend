import React from 'react'
import { Information, Project, Leave, TimeOff } from 'components'
import styled from 'styled-components'

const BodyEmployee = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #23272b;
	padding: 0 20px;
	box-sizing: border-box;
	width: 100%;
	overflow: scroll;
	overflow-x: hidden;
`
const LeftDashboard = styled.div`
	width: 65%;
`
const RightDashboard = styled.div`
	width: 35%;
`
export const DashboardEmployee = () => {
	return (
		<BodyEmployee>
			<LeftDashboard>
				<Information />
			</LeftDashboard>
			<RightDashboard>
				<Project />
				<Leave />
				<TimeOff />
			</RightDashboard>
		</BodyEmployee>
	)
}

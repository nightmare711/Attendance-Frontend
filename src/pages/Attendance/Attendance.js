import React from 'react'
import { Title } from 'components/Title/Title'
import { PaddingContent } from 'components'
import styled from 'styled-components'

const AttendanceContainer = styled.div`
	background-color: #23272b;
	width: 100%;
	color: white;
	overflow: scroll;
`
const ContainerList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 30px;
	margin-top: 20px;
`
const SearchInput = styled.input.attrs((props) => ({
	type: 'text',
}))`
	background-color: #2e3438;
	padding: 0px 20px;
	outline: none;
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

export const AttendancePage = () => {
	return (
		<AttendanceContainer>
			<PaddingContent>
				<Title title='Attendance' route='Attendance' />
				<ContainerList>
					<SearchInput placeholder='Employee ID' />
					<SearchInput placeholder='Name' />
					<SearchInput disabled />
					<BtnSearch>Search</BtnSearch>
				</ContainerList>
			</PaddingContent>
		</AttendanceContainer>
	)
}

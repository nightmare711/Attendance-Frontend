import React from 'react'
import styled, { css } from 'styled-components'
import { bg_btn } from 'constants/theme'

const ContainerLeave = styled.div`
	padding: 0 30px 30px 30px;
`
const HeadTitle = styled.div`
	text-transform: uppercase;
	color: #bbc4cc;
	margin: 18px 0;
	font-size: 15px;
`
const BodyLeave = styled.div`
	font-size: 13px;
	text-transform: uppercase;
	color: #535c64;
	background-color: #16191c;
	border-radius: 8px;
	border: 1px solid #2e3840;
	padding: 10px;
`
const Task = styled.div`
	display: flex;
	flex-direction: row;
	margin: 20px 0;
`
const ComponentTask = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 50%;
	${(props) =>
		props.AddBorder &&
		css`
			border-left: 1px solid #e7e7e7;
		`};
`

const Number = styled.span`
	font-size: 22px;
	color: #bbc4cc;
`
const Btn = styled.div`
	text-align: center;
	justify-content: center;
	padding: 10px;
	border: solid 1px #ff9b44;
	background-color: #ff9b44;
	color: #ffff;
	border-radius: 8px;
	margin-left: auto;
	margin-right: auto;
	width: 120px;
	margin-bottom: 10px;
	&:hover {
		background: ${bg_btn};
	}
`

export const Leave = () => {
	return (
		<ContainerLeave>
			<HeadTitle>Your leave</HeadTitle>
			<BodyLeave>
				<Task>
					<ComponentTask>
						<Number>4.5</Number>
						<span>Leave taken</span>
					</ComponentTask>
					<ComponentTask AddBorder>
						<Number>14</Number>
						<span>Remaining</span>
					</ComponentTask>
				</Task>
				<Btn>
					<a href='/'>Apply Leave</a>
				</Btn>
			</BodyLeave>
		</ContainerLeave>
	)
}

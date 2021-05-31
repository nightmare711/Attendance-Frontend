import React from 'react'
import styled, { css } from 'styled-components'

const ContainerProject = styled.div`
	padding: 30px;
`
const HeadTitle = styled.div`
	text-transform: uppercase;
	color: #bbc4cc;
	margin-bottom: 18px;
	font-size: 15px;
`
const BodyProject = styled.div`
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
const Total = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 10px 0;
`

export const Project = () => {
	return (
		<ContainerProject>
			<HeadTitle>Projects</HeadTitle>
			<BodyProject>
				<Task>
					<ComponentTask>
						<Number>71</Number>
						<span>Total task</span>
					</ComponentTask>
					<ComponentTask AddBorder>
						<Number>14</Number>
						<span>Pending task</span>
					</ComponentTask>
				</Task>
				<Total>
					<Number>2</Number>
					<span>Total Project</span>
				</Total>
			</BodyProject>
		</ContainerProject>
	)
}

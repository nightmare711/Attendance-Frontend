import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { bg_1 } from 'constants/theme'

const SearchContainer = styled.div`
	position: relative;
	margin-right: 20px;
`
const SearchInput = styled.input`
	background-color: ${bg_1};
	outline: none;
	font-size: 17px;
	padding: 10px 20px;
	padding-right: 50px;
	border-radius: 30px;
`
const IconContainer = styled.div`
	position: absolute;
	right: 15px;
	top: 50%;
	transform: translateY(-50%);
`
export const SearchEngine = () => {
	return (
		<SearchContainer>
			<SearchInput type='text' placeholder='Search here' />
			<IconContainer>
				<FontAwesomeIcon icon={faSearch} />
			</IconContainer>
		</SearchContainer>
	)
}

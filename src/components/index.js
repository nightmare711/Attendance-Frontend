import styled from 'styled-components'
import { color_orange, color_orange_hover } from 'constants/theme'

export * from './Navbar/Navbar'
export * from './SearchEngine/SearchEngine'
export * from './Sidebar/Sidebar'
export * from './Form/Form'
export * from './Webcam/Webcam'
export * from './Overlay/Overlay'
export * from './ImgList/ImgList'
export * from './Title/Title'
export * from './PaddingContent/PaddingContent'

export const BtnTertiary = styled.div`
	padding: 10px;
	cursor: pointer;
	font-weight: 600;
	font-size: 15px;
	background-color: ${color_orange};
	color: white;
	border-radius: 5px;
	text-align: center;
	transition: all 0.3s;
	&:hover {
		background-color: ${color_orange_hover};
	}
	&:active {
		transform: translateY(3px);
	}
`

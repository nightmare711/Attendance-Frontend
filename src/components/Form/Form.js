import styled from 'styled-components'
import { bg_form, bg_input, bg_btn } from 'constants/theme'
import LogoImg from 'assets/avt.png'

export const Form = styled.div`
	padding: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${bg_form};
`
export const Label = styled.span`
	margin-bottom: 10px;
`
export const ContainerInput = styled.div`
	font-size: 16px;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`
export const FormInput = styled.input`
	background-color: ${bg_input};
	width: 450px;
	font-size: 17px;
	padding: 10px 20px;
	outline: none;
	border-radius: 5px;
`
export const BtnPrimary = styled.button`
	width: 100%;
	flex-grow: 1;
	background: ${bg_btn};
	border-radius: 5px;
	font-size: 22px;
	color: white;
	padding: 10px 20px;
	margin-top: 30px;
	outline: none !important;
	transition: all 0.3s;

	&:active {
		outline: none;
		background: ${bg_btn};
		transform: translateY(3px);
	}
`
export const Title = styled.h1`
	font-size: 26px;
	color: black;
`
export const TitleExtend = styled.h3`
	font-size: 18px;
`
export const Logo = styled.img.attrs((props) => ({
	src: LogoImg,
	alt: 'Logo',
}))`
	width: 100px;
	margin-bottom: 30px;
`
export const Question = styled.span`
	font-size: 15px;
	margin: 30px 0px;
`
export const LinkQuestion = styled.a`
	color: #ff9b44;
	margin-left: 10px;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`

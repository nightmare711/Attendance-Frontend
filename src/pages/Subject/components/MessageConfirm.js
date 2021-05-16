import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const MessageTxt = styled.div`
	padding: 10px 20px;
	font-size: 15px;
	display: flex;
	flex-direction: column;
`
const BtnContainer = styled.div`
	display: flex;
	margin-top: 20px;
	flex-direction: row;
	justify-content: flex-end;
`
const BtnCancel = styled.div`
	background-color: #f75252;
	border-radius: 20px;
	text-align: center;
	padding: 15px 20px;
	cursor: pointer;
	margin-right: 10px;
	transition: all 0.3s;
	&:active {
		transform: translateY(3px);
	}
`
const BtnSearch = styled.div`
	background-color: #55cd62;
	text-align: center;
	padding: 15px 0px;
	cursor: pointer;
	height: 50px;
	transition: all 0.3s;
	&:active {
		transform: translateY(3px);
	}
`
const BtnAgree = styled(BtnSearch)`
	padding: 15px 20px;
	border-radius: 20px;
	color: white;
`
const MessageConfirm = styled.div`
	position: absolute;
	top: 0;
	color: black;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100000;
	display: flex;
	align-items: center;
	justify-content: center;
`
const MessageHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px 20px;
	align-items: center;
	font-size: 25px;
	border-bottom: 1px solid #d7e4fa;
`
const MessageContent = styled.div`
	background-color: white;
	width: 40%;
	height: fit-content;
	border-radius: 5px;
`
const Overlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	background-color: rgba(0, 0, 0, 0.4);
`

export const MessageModal = ({ setIsOpenModal, onAddStudents, isOpenModal }) => {
	return (
		<MessageConfirm>
			<Overlay onClick={() => setIsOpenModal('')} />
			<MessageContent>
				<MessageHeader>
					Confirm{' '}
					<FontAwesomeIcon onClick={() => setIsOpenModal('')} icon={faTimes} className='icon' />
				</MessageHeader>
				<MessageTxt>
					Are you sure?
					<BtnContainer>
						<BtnCancel onClick={() => setIsOpenModal('')}>Cancel</BtnCancel>
						<BtnAgree
							onClick={() => {
								onAddStudents(isOpenModal)
								setIsOpenModal('')
							}}
						>
							Confirm
						</BtnAgree>
					</BtnContainer>
				</MessageTxt>
			</MessageContent>
		</MessageConfirm>
	)
}

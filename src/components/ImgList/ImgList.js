import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { DataContext } from 'contexts/DataContext'
import { ListImage } from 'components'
import { useRemoveImage } from 'services/useAuth'

const Container = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: column-reverse;
	z-index: 11;
	max-height: 100vh;
	overflow-y: scroll;
	overflow-x: hidden;
`
const List = styled.ul``
const Item = styled.li`
	margin-top: 20px;
	position: relative;
`
const Image = styled.img`
	width: 200px;
`
const ContainerIcon = styled.div`
	cursor: pointer;
	position: absolute;
	top: 5px;
	right: 10px;
	transition: all 0.3s;
	color: #ff9b44;
	&:hover {
		color: #df7401;
	}
`
export const ImgList = () => {
	const data = React.useContext(DataContext)
	const removeImg = useRemoveImage()
	React.useEffect(() => {}, [data.count])
	return (
		<Container>
			<List>
				{ListImage.map((base64, index) => (
					<Item key={index}>
						<ContainerIcon onClick={() => removeImg(index)}>
							<FontAwesomeIcon icon={faTimes} />
						</ContainerIcon>
						<Image src={base64} />
					</Item>
				))}
			</List>
		</Container>
	)
}

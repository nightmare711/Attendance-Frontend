import React from 'react'
import Webcam from 'react-webcam'
import { BtnPrimary } from 'components'
import styled from 'styled-components'
import { DataContext } from 'contexts/DataContext'
import { useUploadImage } from 'services/useAuth'

const videoConstraints = {
	width: 1280,
	height: 720,
	facingMode: 'user',
}
const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
`
const BtnCapture = styled(BtnPrimary)`
	margin-top: 0;
`
export const ListImage = []
export const WebcamCapture = () => {
	const uploadImage = useUploadImage()
	const data = React.useContext(DataContext)
	const webcamRef = React.useRef(null)
	const capture = React.useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot()
		ListImage.push(imageSrc)
		data.setCount(data.count + 1)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [webcamRef, data.count, data.setCount])

	return (
		<Container>
			<Webcam
				audio={false}
				height={600}
				ref={webcamRef}
				screenshotFormat='image/jpeg'
				width={500}
				videoConstraints={videoConstraints}
			/>
			{ListImage.length < 1 ? (
				<BtnCapture onClick={capture}>Capture photo</BtnCapture>
			) : (
				<BtnCapture onClick={() => uploadImage(ListImage[0])}>Done</BtnCapture>
			)}
		</Container>
	)
}

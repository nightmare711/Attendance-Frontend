import styled from 'styled-components'
import { useClickOverlay } from 'services/useOverlay'

export const OverlayTag = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(255, 255, 255, 0.8);
	z-index: 10;
`
export const Overlay = () => {
	const onClickOverlay = useClickOverlay()
	return <OverlayTag onClick={onClickOverlay} />
}

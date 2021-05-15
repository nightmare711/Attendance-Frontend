import React from 'react'
import { DataContext } from 'contexts/DataContext'
import { ListImage } from 'components'

export const useClickOverlay = () => {
	const data = React.useContext(DataContext)
	return () => {
		data.setCount(0)
		ListImage.splice(0, ListImage.length)
		data.setIsOpenWebcam(false)
	}
}

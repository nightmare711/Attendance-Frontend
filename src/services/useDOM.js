import React from 'react'
import { DataContext } from 'contexts/DataContext'

export const useToggleSidebar = () => {
	const data = React.useContext(DataContext)
	return () => {
		if (data.isOpenSidebar) {
			document.querySelector('#sidebar').style.width = '65px'
			document.querySelector('#icon-sidebar').style.transform = 'rotate(0deg)'
			data.setIsOpenSidebar(false)
		} else {
			document.querySelector('#sidebar').style.width = '300px'
			data.setIsOpenSidebar(true)
			document.querySelector('#icon-sidebar').style.transform = 'rotate(180deg)'
		}
	}
}

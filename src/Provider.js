import React from 'react'
import { DataContext } from 'contexts/DataContext'
import { BrowserRouter as Router } from 'react-router-dom'

export const Provider = ({ children }) => {
	const [isOpenSidebar, setIsOpenSidebar] = React.useState(true)
	const [isLogin, setIsLogin] = React.useState(false)
	return (
		<Router>
			<DataContext.Provider
				value={{
					isOpenSidebar,
					setIsOpenSidebar,
					isLogin,
					setIsLogin,
				}}
			>
				{children}
			</DataContext.Provider>
		</Router>
	)
}

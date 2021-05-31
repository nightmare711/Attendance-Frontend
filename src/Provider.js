import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { DataContext } from 'contexts/DataContext'
import CryptoJS from 'crypto-js'
import { KEY_SECRET } from 'constants/constants'
import { BrowserRouter as Router } from 'react-router-dom'

const queryClient = new QueryClient()
const accessToken = CryptoJS.AES.decrypt(
	JSON.parse(localStorage.getItem('l_i'))?.cipherText || '',
	KEY_SECRET
).toString(CryptoJS.enc.Utf8)
const accessId = CryptoJS.AES.decrypt(
	JSON.parse(localStorage.getItem('l_i'))?.userId || '',
	KEY_SECRET
).toString(CryptoJS.enc.Utf8)
const studentId = JSON.parse(localStorage.getItem('l_i'))?.studentId
export const Provider = ({ children }) => {
	const [isOpenSidebar, setIsOpenSidebar] = React.useState(true)
	const [isLogin, setIsLogin] = React.useState({
		accessToken: accessToken || '',
		user_id: accessId || '',
		studentId: studentId || '',
	})
	const [isOpenWebcam, setIsOpenWebcam] = React.useState(false)
	const [info, setInfo] = React.useState({
		email: '',
		password: '',
		confirm: '',
		studentId: '',
		idFB: '',
	})
	const [count, setCount] = React.useState(0)
	const [isFillInformation, setIsFillInformation] = React.useState()
	const [idProject, setIdProject] = React.useState('')
	const [studentSelected, setStudentSelected] = React.useState('')
	// React.useEffect(() => {
	// 	const dataExpiration = JSON.parse(localStorage.getItem('l_i'))?.expiration || 0
	// 	if (dataExpiration <= new Date()) {
	// 		logout()
	// 	}
	// }, [])
	return (
		<Router>
			<DataContext.Provider
				value={{
					isOpenSidebar,
					setIsOpenSidebar,
					isLogin,
					setIsLogin,
					isOpenWebcam,
					setIsOpenWebcam,
					info,
					setInfo,
					count,
					setCount,
					isFillInformation,
					setIsFillInformation,
					idProject,
					setIdProject,
					studentSelected,
					setStudentSelected,
				}}
			>
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</DataContext.Provider>
		</Router>
	)
}

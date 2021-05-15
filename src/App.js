import React from 'react'
import styled from 'styled-components'
import { Navbar, Sidebar, WebcamCapture, Overlay, ImgList } from 'components'
import { Switch, Route } from 'react-router-dom'
import {
	LoginPage,
	RegisterPage,
	InformationFill,
	StudentsPage,
	AttendancePage,
	Subject,
} from 'pages'
import { DataContext } from 'contexts/DataContext'
import { useGetUserInfo } from 'queries/account.queries'

const ContainerBody = styled.div`
	display: flex;
	flex-direction: row;
	max-height: calc(100vh - 70px);
	overflow: hidden;
`

function App() {
	const data = React.useContext(DataContext)
	const [isFillAllInfo, setIsFillAllInfo] = React.useState(true)
	const { data: account, isSuccess: isFetchAccount } = useGetUserInfo()
	React.useEffect(() => {
		if (isFetchAccount && account && (!account?.user?.name || !account?.user?.phoneNumber)) {
			setIsFillAllInfo(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [account?.user, isFetchAccount])
	if (!data.isLogin.user_id || !data.isLogin.accessToken) {
		return (
			<>
				{data.isOpenWebcam ? <Overlay /> : null}
				<Switch>
					<Route path='/register'>
						<RegisterPage />
						{data.isOpenWebcam ? <WebcamCapture /> : null}
						<ImgList />
					</Route>
					<Route>
						<LoginPage />
					</Route>
				</Switch>
			</>
		)
	} else {
		return (
			<>
				{!isFillAllInfo ? <Overlay /> : null}
				<Navbar />
				{!isFillAllInfo ? <InformationFill /> : null}
				<ContainerBody>
					<Sidebar />
					<Switch>
						<Route exact path='/attendance' component={AttendancePage} />
						<Route exact path='/students' component={StudentsPage} />
						<Route exact path='/subject' component={Subject} />
					</Switch>
				</ContainerBody>
			</>
		)
	}
}

export default App

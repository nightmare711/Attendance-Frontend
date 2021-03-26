import React from 'react'
import { Navbar, Sidebar } from 'components'
import { Switch, Route } from 'react-router-dom'
import { LoginPage, RegisterPage } from 'pages'
import { DataContext } from 'contexts/DataContext'

function App() {
	const data = React.useContext(DataContext)
	if (!data.isLogin) {
		return (
			<>
				<Switch>
					<Route path='/register'>
						<RegisterPage />
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
				<Navbar />
				<Sidebar />
				<Switch></Switch>
			</>
		)
	}
}

export default App

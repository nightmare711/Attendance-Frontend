import React from 'react'
import { API_TEST } from 'constants/api'
import { DataContext } from 'contexts/DataContext'

export const useGetAttendanceSubject = () => {
	const data = React.useContext(DataContext)
	const [attendance, setAttendance] = React.useState(null)
	React.useEffect(() => {
		console.log(data.selectedAttendance)
		if (data.selectedAttendance) {
			fetch(API_TEST + '/attendance/' + data.selectedAttendance)
				.then((res) => res.json())
				.then((result) => {
					console.log('attendance', result)
					if (result.status === 1) {
						setAttendance(result.result)
					}
				})
		}
	}, [data.selectedAttendance])
	return attendance
}

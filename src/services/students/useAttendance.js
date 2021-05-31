import React from 'react'
import { DataContext } from 'contexts/DataContext'
import { useMutation } from 'react-query'
import { API_TEST } from 'constants/api'

export const useAttendance = () => {
	const data = React.useContext(DataContext)
	return useMutation((subjectId) => {
		console.log(data.isLogin)
		return fetch(API_TEST + '/attendance/add', {
			method: 'POST',
			body: JSON.stringify({
				subjectId: subjectId,
				studentId: data.isLogin.studentId,
			}),
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((result) => {
				alert('success')
			})
			.catch((err) => console.log(err))
	})
}

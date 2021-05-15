import React from 'react'
import { useQuery } from 'react-query'
import { API_TEST } from 'constants/api'
import { DataContext } from 'contexts/DataContext'

export const useGetStudents = () => {
	const data = React.useContext(DataContext)
	return useQuery(['useGetStudents.name'], () => {
		return fetch(API_TEST + '/students?token=' + data.isLogin.accessToken)
			.then((res) => res.json())
			.then((result) => result.result)
			.catch((err) => console.log(err))
	})
}

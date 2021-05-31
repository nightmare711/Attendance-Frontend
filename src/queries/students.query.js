import React from 'react'
import { useQuery } from 'react-query'
import { API_TEST } from 'constants/api'
import { DataContext } from 'contexts/DataContext'
import { useGetUserInfo } from './account.queries'

export const useGetStudents = () => {
	const data = React.useContext(DataContext)
	return useQuery(['useGetStudents.name'], () => {
		return fetch(API_TEST + '/students?token=' + data.isLogin.accessToken)
			.then((res) => res.json())
			.then((result) => result.result)
			.catch((err) => console.log(err))
	})
}
export const useGetStudent = () => {
	const data = React.useContext(DataContext)
	const [studentProfile, setStudentProfile] = React.useState(null)
	React.useEffect(() => {
		if (data.studentSelected) {
			fetch(API_TEST + `/user/${data.studentSelected}`)
				.then((res) => res.json())
				.then((result) => setStudentProfile(result.user))
				.catch((err) => {})
		}
	})
	if (studentProfile) {
		return [studentProfile]
	}
	return null
}
export const useGetSubjects = () => {
	const { data: userInfo } = useGetUserInfo()
	console.log(userInfo)
	return useQuery(
		['useGetSubjects.name'],
		() => {
			if (userInfo) {
				return fetch(API_TEST + '/subject/student', {
					method: 'POST',
					body: JSON.stringify({
						studentId: userInfo.user.studentId,
					}),
					headers: {
						'Content-type': 'application/json',
					},
				})
					.then((res) => res.json())
					.then((result) => result.result)
			}
			return []
		},
		{
			refetchInterval: 10000,
		}
	)
}

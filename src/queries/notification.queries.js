import React from 'react'
import { useQuery, useMutation } from 'react-query'
import { DataContext } from 'contexts/DataContext'
import { API_TEST } from 'constants/api'
import { useGetUserInfo } from 'queries/account.queries'

export const usePostNotification = () => {
	const data = React.useContext(DataContext)
	return useMutation(({ title, content }) => {
		if (data.idProject) {
			if (title && content) {
				fetch(API_TEST + '/notification', {
					method: 'POST',
					body: JSON.stringify({
						title,
						content,
						teacherId: data.isLogin.user_id,
						subjectId: data.idProject,
					}),
					headers: {
						'Content-type': 'application/json',
					},
				})
					.then((res) => res.json())
					.then((result) => alert('success'))
					.catch((err) => console.log(err))
			} else {
				alert('Please fill title and content')
			}
		} else {
			alert('Please select the subject before post notification')
		}
	})
}

export const useGetNotification = () => {
	const data = React.useContext(DataContext)
	const { data: user } = useGetUserInfo()
	return useQuery(
		['useGetNotification.name'],
		() => {
			if (data.isLogin.user_id && user) {
				if (data.isLogin.isTeacher) {
					return fetch(API_TEST + '/notification/filter', {
						method: 'POST',
						body: JSON.stringify({
							teacherId: data.isLogin.user_id,
						}),
						headers: {
							'Content-type': 'application/json',
						},
					})
						.then((res) => res.json())
						.then((result) => {
							const temp = []
							for (let i = 0; i < result.result.length; i++) {
								temp.push({
									...result.result[i],
									...user.user,
								})
							}
							console.log(temp)
							return temp
						})
						.catch((err) => {
							console.log(err)
							return []
						})
				} else {
					return fetch(API_TEST + '/notification/filter-subId', {
						method: 'POST',
						body: JSON.stringify({
							subjectId: data.idProject,
						}),
						headers: {
							'Content-type': 'application/json',
						},
					})
						.then((res) => res.json())
						.then((result) => {
							console.log('noti', result)
							const temp = []
							for (let i = 0; i < result.result.length; i++) {
								temp.push({
									...result.result[i],
									...user.user,
								})
							}
							console.log(temp)
							return temp
						})
						.catch((err) => {
							console.log(err)
							return []
						})
				}
			}
			return []
		},
		{
			refetchInterval: 3000,
		}
	)
}

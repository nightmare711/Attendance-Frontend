import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { API_TEST } from 'constants/api'
import { DataContext } from 'contexts/DataContext'
// functions to queries

const updateInfo = (info) => {
	return fetch(API_TEST + '/user/' + info._id + '?token=' + info.token, {
		headers: {
			'Content-type': 'application/json',
		},
		method: 'PUT',
		body: JSON.stringify({
			name: info.name,
			dateOfBirth: info.dateOfBirth,
			isTeacher: info.isTeacher,
			phoneNumber: info.phoneNumber,
		}),
	})
		.then((res) => res.json())
		.then((result) => {
			console.log(result)
			return result
		})
		.catch((err) => {
			console.log(err)
		})
}
const getUserById = (info) => {
	return fetch(API_TEST + '/user/' + info._id + '?token=' + info.token, {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((result) => {
			if (result.user) {
				return result
			}
		})
		.catch((err) => {})
}
//hook to queries
export const useUpdateInfo = () => {
	const data = React.useContext(DataContext)
	return useMutation(
		(info) =>
			updateInfo({
				...info,
				_id: data.isLogin.user_id,
				token: data.isLogin.accessToken,
			}),
		{
			onSuccess: () => {
				document.location.reload()
			},
		}
	)
}
export const useGetUserInfo = () => {
	const data = React.useContext(DataContext)
	return useQuery('useGetUserInfo.name', () =>
		getUserById({
			_id: data.isLogin.user_id,
			token: data.isLogin.accessToken,
		})
	)
}

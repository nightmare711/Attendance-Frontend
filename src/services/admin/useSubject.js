import React from 'react'
import { useQuery, useMutation } from 'react-query'
import { API_TEST } from 'constants/api'
import { DataContext } from 'contexts/DataContext'

export const useGetSubject = () => {
	return useQuery(['useGetSubject.name'], () => {
		return fetch(API_TEST + '/subject')
			.then((res) => res.json())
			.then((result) => {
				console.log(result)
				return result.result
			})
			.catch((err) => console.log(err))
	})
}
export const usePostSubject = () => {
	return useMutation((info) => {
		fetch(API_TEST + '/subject', {
			method: 'POST',
			body: JSON.stringify(info),
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then(console.log)
			.catch((err) => console.log(err))
	})
}
export const useGetSubjectById = () => {
	const data = React.useContext(DataContext)
	const teacherId = data.isLogin.user_id
	return useQuery([useGetSubjectById.name], () => {
		return fetch(API_TEST + '/subject/teacher/' + teacherId)
			.then((res) => res.json())
			.then((result) => {
				console.log(result)
				return result.result
			})
			.catch((err) => console.log(err))
	})
}

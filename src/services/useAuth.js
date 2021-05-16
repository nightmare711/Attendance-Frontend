import React from 'react'
import { API_TEST } from 'constants/api'
import { DataContext } from 'contexts/DataContext'
import { ListImage } from 'components'
import CryptoJS from 'crypto-js'
import { KEY_SECRET } from 'constants/constants'

export const useRegister = ({ email, password, confirm, studentId, idFB }) => {
	const data = React.useContext(DataContext)
	const bodyJson = JSON.stringify({
		name: '',
		email: email,
		password: password,
		isTeacher: false,
		dateOfBirth: new Date(),
		phoneNumber: '',
		base64: ListImage[0],
		studentId: studentId,
		idFB: idFB.substr(25, idFB.length),
	})
	React.useEffect(() => {}, [data.count])
	return () => {
		if (email && password && confirm) {
			if (password === confirm) {
				if (ListImage.length >= 1) {
					fetch(API_TEST + '/users', {
						headers: {
							'Content-type': 'application/json',
						},
						method: 'POST',
						body: bodyJson,
					})
						.then((res) => {
							window.location.href = '/login'
						})
						.catch((err) => alert(err))
				} else {
					data.setIsOpenWebcam(true)
				}
			}
		}
	}
}
export const useLogin = () => {
	const data = React.useContext(DataContext)
	return (email, password) => {
		const account = JSON.stringify({
			email: email,
			password: password,
		})
		fetch(API_TEST + '/user/login', {
			headers: {
				'Content-type': 'application/json',
			},
			method: 'POST',
			body: account,
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.message === 'Login successfully') {
					const cipherText = CryptoJS.AES.encrypt(result.accessToken, KEY_SECRET).toString()
					const cipherId = CryptoJS.AES.encrypt(result.user, KEY_SECRET).toString()
					data.setIsLogin({
						accessToken: result.accessToken,
						user_id: result.user,
					})
					localStorage.setItem(
						'l_i',
						JSON.stringify({
							userId: cipherId,
							cipherText: cipherText,
							expiration: new Date().getTime() + 1800000,
						})
					)
				} else {
					alert('Wrong')
				}
			})
			.catch((err) => {
				alert('something went wrong')
			})
	}
}
export const useRemoveImage = () => {
	const data = React.useContext(DataContext)
	return (index) => {
		ListImage.splice(index, 1)
		data.setCount(data.count - 1)
	}
}
export const useUploadImage = () => {
	const data = React.useContext(DataContext)
	return () => {
		data.setCount(0)
		data.setIsOpenWebcam(false)
	}
}
export const useLogout = () => {
	const data = React.useContext(DataContext)
	return () => {
		localStorage.removeItem('l_i')
		data.setIsLogin('')
	}
}

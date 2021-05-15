import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/analytics'

const firebaseConfig = {
	apiKey: 'AIzaSyDmuk7mYNfzenpLqq4R0GAhVRaNq99ZguY',
	authDomain: 'attendance-5d4fd.firebaseapp.com',
	databaseURL: 'https://attendance-5d4fd-default-rtdb.firebaseio.com',
	projectId: 'attendance-5d4fd',
	storageBucket: 'attendance-5d4fd.appspot.com',
	messagingSenderId: '167064713354',
	appId: '1:167064713354:web:7bd7b861f3cdb1061a5573',
	measurementId: 'G-65CWSMR5CV',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//analytics is optional for this tutoral
firebase.analytics()
const storage = firebase.storage()
export { storage, firebase as default }

function removeAccents(str) {
	return str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/đ/g, 'd')
		.replace(/Đ/g, 'D')
}

export const onFilterByName = (students, key) => {
	const studentsFilter = students.filter((student) =>
		removeAccents(student.name)
			.trim()
			.toLowerCase()
			.includes(removeAccents(key).trim().toLowerCase())
	)
	if (key) {
		return studentsFilter
	}
	return students
}
export const onFilterStudentsById = (students, subjects, subjectId) => {
	const studentsTemp = []
	const subject = subjects.filter((item) => item._id === subjectId)
	const studentsId = subject[0]?.studentsId
	for (let i = 0; i < studentsId?.length; i++) {
		const student = students.find((item) => {
			return item.studentId === studentsId[i]
		})

		studentsTemp.push(student)
	}
	return studentsTemp
}

export const onFilterStudents = (students, key) => {
	if (key === '') {
		return students
	}
	return students.filter((student) =>
		removeAccents(student.name)
			.trim()
			.toLowerCase()
			.includes(removeAccents(key).trim().toLowerCase())
	)
}

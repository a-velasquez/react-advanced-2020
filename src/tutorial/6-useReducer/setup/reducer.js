export const reducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		const newPeople = [...state.people, action.payload]
		return {
			...state,
			people: newPeople,
			isModalOpen: 'true',
			modalContent: 'person added'
		}
	}
	if (action.type === 'NO_VALUE') {
		return {...state, isModalOpen: true, modalContent: 'please enter a value'}
	}
	if (action.type === 'CLOSE_MODAL') {
		return {...state, isModalOpen: false}
	}
	if (action.type === 'REMOVE_ITEM') {
		const newPeople = state.people.filter(
			(person) => person.id !== action.payload
		)
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: 'person removed'
		}
	}
	throw new Error('no matching action type')
}

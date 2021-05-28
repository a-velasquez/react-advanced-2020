export const reducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		const newPeople = [...state.people, action.payload]
		return {
			...state,
			people: newPeople,
			isModalOpen: 'true',
			modalContent: 'item added'
		}
	}
	if (action.type === 'NO_VALUE') {
		return {...state, isModalOpen: true, modalContent: 'please enter a value'}
	}
	if (action.type === 'CLOSE_MODAL') {
		return {...state, isModalOpen: false}
	}
	throw new Error('no matching action type')
}

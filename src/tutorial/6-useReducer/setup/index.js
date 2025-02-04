import React, {useState, useReducer, useEffect} from 'react'
import Modal from './Modal'
import {data} from '../../../data'
import {reducer} from './reducer'

const defaultState = {
	people: data,
	isModalOpen: false,
	modalContent: 'hello'
}

const Index = () => {
	const [name, setName] = useState('')
	const [state, dispatch] = useReducer(reducer, defaultState)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (name) {
			const newPerson = {id: new Date().getTime().toString(), name}
			dispatch({type: 'ADD_ITEM', payload: newPerson})
			setName(' ')
		} else {
			dispatch({type: 'NO_VALUE'})
		}
	}

	const closeModal = () => {
		dispatch({type: 'CLOSE_MODAL'})
	}

	return (
		<>
			{state.isModalOpen && (
				<Modal closeModal={closeModal} modalContent={state.modalContent} />
			)}
			<form className='form' onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					></input>
				</div>
				<button type='submit'>add</button>
			</form>
			{state.people.map((person) => {
				return (
					<div key={person.id} className='item'>
						<h4>{person.name}</h4>
						<button
							className='btn'
							onClick={() =>
								dispatch({type: 'REMOVE_ITEM', payload: person.id})
							}
						>
							remove person
						</button>
					</div>
				)
			})}
		</>
	)
}

export default Index

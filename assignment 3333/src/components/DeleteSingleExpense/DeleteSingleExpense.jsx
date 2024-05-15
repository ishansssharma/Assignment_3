import React from 'react'
import styles from './DeleteSingleExpense.module.css'

const DeleteSingleExpense = ({ id, dispatch }) => {
	function DeleteSingleExpense() {
		dispatch({
			type: "DELETE_EXPENSE",
			payload: { id }
		});
	}

	return (
		<>
			<button onClick={DeleteSingleExpense}>Delete</button>
		</>
	)
}

export default DeleteSingleExpense
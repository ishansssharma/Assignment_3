import React from 'react'
import styles from './FinalAmount'

const FinalAmount = ({ expenses }) => {
	function CalculateTotalAmount() {
		return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
	}
	return (
		<div>
			TotalExpense: NOK {CalculateTotalAmount()}
		</div>
	)
}

export default FinalAmount
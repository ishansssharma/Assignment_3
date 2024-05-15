import React from 'react'
import styles from './FinalAmount.module.css'

const FinalAmount = ({ expenses }) => {
	function CalculateTotalAmount() {
		return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
	}
	return (
		<div className={styles.div}>
			TotalExpense: NOK {CalculateTotalAmount()}
		</div>
	)
}

export default FinalAmount
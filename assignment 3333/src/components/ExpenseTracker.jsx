import React from 'react'
import styles from './ExpenseTracker.module.css'

const ExpenseTracker = () => {


	return (
		<>
			<h1 className={styles.header}>Track your expense!</h1>
			<section className={styles.formcontainer}>
				<form className={styles.expenseform} action="">
					<label htmlFor=""></label>
					<input className={styles.forminput} type="" />

					<label htmlFor=""></label>
					<input className={styles.forminput} type="text" />

					<label htmlFor=""></label>
					<input className={styles.forminput} type="text" />

					<label htmlFor=""></label>
					<input className={styles.forminput} type="text" />

					<button className={styles.form - button}>Submit</button>

				</form>
			</section>


		</>



	)
}

export default ExpenseTracker
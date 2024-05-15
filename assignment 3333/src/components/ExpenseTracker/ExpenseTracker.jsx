import React from 'react'
import styles from './ExpenseTracker.module.css'
import { useReducer, useState } from 'react'
import DeleteSingleExpense from '../DeleteSingleExpense/DeleteSingleExpense'
import FinalAmount from '../FinalAmount/FinalAmount'



const ExpenseTracker = () => {
	const [inputExpenseTitle, setInputExpenseTitle] = useState("");
	const [inputExpenseAmount, setInputExpenseAmount] = useState("");
	const [inputExpenseDate, setInputExpenseDate] = useState("");
	const [inputExpenseCategory, setInputExpenseCategory] = useState("");



	const reducer = (state, action) => {
		console.log(action); // Debugging reducer calls
		switch (action.type) {
			case "ADD_EXPENSE":
				return [...state, {
					id: Date.now(),
					title: action.payload.title,
					amount: action.payload.amount,
					date: action.payload.date,
					category: action.payload.category,
				}]
			case "DELETE_EXPENSE":
				return state.filter(expense => expense.id !== action.payload.id);

			case "RESET":
				return []


			default:
				return state
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: "ADD_EXPENSE",
			payload: {
				title: inputExpenseTitle,
				amount: inputExpenseAmount,
				date: inputExpenseDate,
				category: inputExpenseCategory
			}
		});
		console.log('Submitted:', inputExpenseTitle, inputExpenseAmount, inputExpenseDate, inputExpenseCategory); // Debugging form submission
	}

	const [expenses, dispatch] = useReducer(reducer, [])

	return (
		<>
			<h1 className={styles.header}>Track your expense!</h1>
			<section className={styles.formcontainer}>
				<form className={styles.expenseform} onSubmit={handleSubmit}>
					<label htmlFor="">Expense Title</label>
					<input onChange={(e) => setInputExpenseTitle(e.target.value)} className={styles.forminput} type="text" />

					<label htmlFor="">Expense Amount</label>
					<input onChange={(e) => setInputExpenseAmount(e.target.value)} className={styles.forminput} type="number" />

					<label htmlFor="">Expense Date</label>
					<input onChange={(e) => setInputExpenseDate(e.target.value)} className={styles.forminput} type="date" />

					<label htmlFor="">Expense Category</label>
					<select onChange={(e) => setInputExpenseCategory(e.target.value)} className={styles.forminput} type="text">
						<option value="Housing">Housing</option>
						<option value="Grocery">Grocery</option>
						<option value="Transportation">Transportation</option>
						<option value="Clothes">Clothes</option>
						<option value="Other">Other</option>





					</select>

					<button type='submit' className={styles.formbutton}>
						Submit
					</button>




				</form>
			</section>
			<section>
				<ul>
					{
						expenses.map((expense) => {
							return <li key={expense.id}>{`${expense.title} NOK ${expense.amount} ${new Date(expense.date).toLocaleDateString()} ${expense.category}`}
								<DeleteSingleExpense id={expense.id} dispatch={dispatch} /></li>
						})
					}
				</ul>

				<button onClick={() => dispatch({ type: "RESET" })} className={styles.formbutton}>Reset</button>
			</section>

			<FinalAmount expenses={expenses} />


		</>



	)
}

export default ExpenseTracker
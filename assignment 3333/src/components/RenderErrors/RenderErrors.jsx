import React from 'react'
import styles from './RenderErrors.module.css'

const RenderErrors = ({ errors }) => {
	if (errors.length === 0) return null;
	return (
		<div>
			{errors.map((error, index) => (
				<p key={index}>{error}</p>
			))}
		</div>
	)
}

export default RenderErrors
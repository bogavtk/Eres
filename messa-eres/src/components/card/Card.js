import React from 'react';
import './Card.css';

export const Card = (props) => {
	return (
		<div className='card'>
			<h4>{props.title}</h4>
			<p className='description'>{props.description}</p>
			<p className='weight'>{props.weight}</p>
			<p className='price'>{props.price}</p>
		</div>
	)
}

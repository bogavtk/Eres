import React from 'react';
import './HeaderButton.css';

export const HeaderButton = (props) => {
	return (
		<div className='header__button'>
			{props.text}
		</div>
	)
}


import React from 'react';
import { HeaderButton } from '../headerButton/HeaderButton';
import './Header.css';

export const Header = () => {



	return (
		<header className='header-container'>
			<div className="menu container">
				<HeaderButton text="Яйца" />
				<HeaderButton text="Хлеб на завтрак" />
				<HeaderButton text="Вафли и сладкое" />
				<HeaderButton text="Блины и драники" />
				<HeaderButton text="Каши и Злаки" />
				<HeaderButton text="Детское меню" />
			</div>
		</header>
	)
}

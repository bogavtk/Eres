import React from 'react';
import { Card } from '../card/Card';
import './CardList.css';

export const CardList = () => {

	const data = {
		"items": [
			{
				"title": "Английский завтрак",
				"description": "Яйцо глазунья с куриной сосиской, беконом, фасольюи картофельными драниками",
				"weight": "340г",
				"price": "490 ₽"
			},
			{
				"title": "Французский завтрак",
				"description": "Яйцо пашот, тост с ветчиной и сыром, с голландским соусом",
				"weight": "246 гр",
				"price": "430 ₽"
			},
			{
				"title": "Яичница-глазунья с медальонами из говядины",
				"description": "Яичница из двух яиц с медальонами из телячьего ростбифа, с обжаренным на сливочном масле бейби картофелем с розмарином. Подается с миксом салата",
				"weight": "230 гр",
				"price": "520 ₽"
			},
			{
				"title": "Шакшука",
				"description": "Яичница с томатным соусом и пряными специями, с петрушкой и питой",
				"weight": "330 гр",
				"price": "370 ₽"
			},
			{
				"title": "Омлет с лососем слабой соли",
				"description": "Омлет из двух яиц с молоком, с добавлением микса салата, слабосоленого лосося и творожного сыра",
				"weight": "190 гр",
				"price": "490 ₽"
			},

		]
	}

	return (
		<div className='cardList'>
			<div className="container cardList-wrap">
				<Card
					title={data.items[0].title}
					description={data.items[0].description}
					weight={data.items[0].weight}
					price={data.items[0].price}
				/>
				<Card
					title={data.items[1].title}
					description={data.items[1].description}
					weight={data.items[1].weight}
					price={data.items[1].price}
				/>
				<Card
					title={data.items[2].title}
					description={data.items[2].description}
					weight={data.items[2].weight}
					price={data.items[2].price}
				/>
				<Card
					title={data.items[3].title}
					description={data.items[3].description}
					weight={data.items[3].weight}
					price={data.items[3].price}
				/>
			</div>
		</div>
	)
}

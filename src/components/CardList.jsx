import WorkCard from './WorkCard';
import EducationCard from './EducationCard';
import PropTypes from 'prop-types';
import {useState} from 'react';

function CardList(props) {
	const [currentCard, setCurrentCard] = useState('');

	const emptyWorkCard = {
		companyName: '',
		jobPosition: '',
		startOfWork: '',
		endOfWork: '',
		workplaceResponsibilities: '',
	};

	const emptyEducationCard = {
		establishment: '',
		degree: '',
		startOfEducation: '',
		endOfEducation: '',
		location: '',
	};

	const cardsList = props.cards.map((card) => (
		<button
			className="cardButton"
			key={
				props.cardType === 'work'
					? card.companyName + card.startOfWork
					: card.establishment + card.degree
			}
			onClick={() => setCurrentCard(card)}
		>
			<span className="inputSpan">
				{card.companyName || card.establishment}
			</span>
		</button>
	));

	const closeOpenCard = () => setCurrentCard('');

	function getCardComponent(type, card, props) {
		if (type === 'work') {
			return <WorkCard onCloseCard={closeOpenCard} work={card} {...props} />;
		}
		return (
			<EducationCard onCloseCard={closeOpenCard} education={card} {...props} />
		);
	}

	return currentCard ? (
		getCardComponent(props.cardType, currentCard, props)
	) : (
		<div
			className={
				props.cardType === 'work'
					? 'workInformationPanel'
					: 'educationInformationPanel'
			}
		>
			<p className="h2">
				{props.cardType === 'work' ? 'Work experience' : 'Education'}
			</p>
			{cardsList}
			<div className="buttonField">
				<button
					className="button"
					onClick={() =>
						setCurrentCard(
							props.cardType === 'work' ? emptyWorkCard : emptyEducationCard,
						)
					}
				>
					Add
				</button>
			</div>
		</div>
	);
}

export default CardList;

CardList.propTypes = {
	cards: PropTypes.array,
	cardType: PropTypes.oneOf(['work', 'education']),
	onDeleteCard: PropTypes.func,
	onUpdateCard: PropTypes.func,
	onAddCard: PropTypes.func,
};

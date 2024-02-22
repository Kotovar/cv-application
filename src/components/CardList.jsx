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
			key={
				props.cardType === 'work'
					? card.companyName + card.jobPosition
					: card.establishment + card.degree
			}
			onClick={() => setCurrentCard(card)}
		>
			{card.companyName || card.establishment}
		</button>
	));

	const closeOpenCard = () => setCurrentCard('');

	return currentCard ? (
		props.cardType === 'work' ? (
			<WorkCard onCloseCard={closeOpenCard} work={currentCard} {...props} />
		) : (
			<EducationCard
				onCloseCard={closeOpenCard}
				education={currentCard}
				{...props}
			/>
		)
	) : (
		<div
			className={
				props.cardType === 'work'
					? 'workInformationPanel'
					: 'educationInformationPanel'
			}
		>
			<h1>{props.cardType === 'work' ? 'Work experience' : 'Education'}</h1>
			{cardsList}
			<button
				onClick={() =>
					setCurrentCard(
						props.cardType === 'work' ? emptyWorkCard : emptyEducationCard,
					)
				}
			>
				Add
			</button>
		</div>
	);
}

export default CardList;

CardList.propTypes = {
	cards: PropTypes.array,
	cardType: PropTypes.oneOf(['work', 'education']),
	onDeleteCard: PropTypes.func.isRequired,
	onUpdateCard: PropTypes.func.isRequired,
	onAddCard: PropTypes.func.isRequired,
};

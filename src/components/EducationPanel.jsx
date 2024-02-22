import EducationCard from './EducationCard';
import PropTypes from 'prop-types';
import {useState} from 'react';

function EducationInformationPanel(props) {
	const [currentCard, setCurrentCard] = useState('');

	const emptyCard = {
		establishment: '',
		degree: '',
		startOfEducation: '',
		endOfEducation: '',
		location: '',
	};

	const educationsList = props.educations.map((education) => (
		<button
			key={education.establishment + education.degree}
			onClick={() => setCurrentCard(education)}
		>
			{education.establishment}
		</button>
	));

	function closeOpenWorkCard() {
		setCurrentCard('');
	}

	return currentCard ? (
		<EducationCard
			onCloseWorkCard={closeOpenWorkCard}
			education={currentCard}
			onDeleteCard={props.onDeleteEducationCard}
			onUpdateCard={props.onUpdateEducationCard}
			onAddCard={props.onAddEducationCard}
		/>
	) : (
		<div className="educationInformationPanel">
			<h1>Education</h1>
			{educationsList}
			<button onClick={() => setCurrentCard(emptyCard)}>Add</button>
		</div>
	);
}

export default EducationInformationPanel;

EducationInformationPanel.propTypes = {
	educations: PropTypes.array,
	onDeleteEducationCard: PropTypes.func.isRequired,
	onUpdateEducationCard: PropTypes.func.isRequired,
	onAddEducationCard: PropTypes.func.isRequired,
};

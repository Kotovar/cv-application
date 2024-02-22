import WorkCard from './WorkCard';
import PropTypes from 'prop-types';
import {useState} from 'react';

function WorkInformationPanel(props) {
	const [currentCard, setCurrentCard] = useState('');

	const emptyCard = {
		companyName: '',
		jobPosition: '',
		startOfWork: '',
		endOfWork: '',
		workplaceResponsibilities: '',
	};

	const worksList = props.works.map((work) => (
		<button
			key={work.companyName + work.jobPosition}
			onClick={() => setCurrentCard(work)}
		>
			{work.companyName}
		</button>
	));

	function closeOpenWorkCard() {
		setCurrentCard('');
	}

	return currentCard ? (
		<WorkCard
			onCloseWorkCard={closeOpenWorkCard}
			work={currentCard}
			onDeleteWorkCard={props.onDeleteWorkCard}
			onUpdateWorkCard={props.onUpdateWorkCard}
			onAddWorkCard={props.onAddWorkCard}
		/>
	) : (
		<div className="workInformationPanel">
			<h1>Work experience</h1>
			{worksList}
			<button onClick={() => setCurrentCard(emptyCard)}>Add</button>
		</div>
	);
}

export default WorkInformationPanel;

WorkInformationPanel.propTypes = {
	works: PropTypes.array,
	onDeleteWorkCard: PropTypes.func.isRequired,
	onUpdateWorkCard: PropTypes.func.isRequired,
	onAddWorkCard: PropTypes.func.isRequired,
};

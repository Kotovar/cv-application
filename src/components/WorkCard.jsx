import PropTypes from 'prop-types';
import {useImmer} from 'use-immer';

function WorkCard({
	onCloseWorkCard,
	work,
	onDeleteWorkCard,
	onUpdateWorkCard,
	onAddWorkCard,
}) {
	const tempObj = {...work};
	const [newCard, updateNewCard] = useImmer(tempObj);

	function deleteCard() {
		onDeleteWorkCard(work.companyName);
		onCloseWorkCard();
	}

	function updateCard() {
		if (work.companyName && newCard.companyName) {
			onUpdateWorkCard(work.companyName, newCard);
			onCloseWorkCard();
		} else if (newCard.companyName) {
			onAddWorkCard(newCard, 'work'), onCloseWorkCard();
		}
	}

	function onWorkChange(property, value) {
		updateNewCard((draft) => {
			draft[property] = value;
		});
	}

	return (
		<div className="work">
			<div className="work__inputs">
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="input_field">
						<label htmlFor="companyName">Company Name</label>
						<input
							type="text"
							id="companyName"
							value={newCard.companyName}
							onChange={(e) => onWorkChange('companyName', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="jobPosition">Job position </label>
						<input
							type="text"
							id="jobPosition"
							value={newCard.jobPosition}
							onChange={(e) => onWorkChange('jobPosition', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="startOfWork">Start of work</label>
						<input
							type="text"
							id="startOfWork"
							value={newCard.startOfWork}
							onChange={(e) => onWorkChange('startOfWork', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="endOfWork">End of work</label>
						<input
							type="text"
							id="endOfWork"
							value={newCard.endOfWork}
							onChange={(e) => onWorkChange('endOfWork', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="workplaceResponsibilities">
							Workplace Responsibilities
						</label>
						<input
							type="text"
							id="workplaceResponsibilities"
							value={newCard.workplaceResponsibilities}
							onChange={(e) =>
								onWorkChange('workplaceResponsibilities', e.target.value)
							}
						/>
					</div>
				</form>
			</div>
			<div className="work__buttons">
				<button onClick={deleteCard}>Удалить</button>
				<button onClick={onCloseWorkCard}>Отменить</button>
				<button onClick={updateCard}>Сохранить</button>
			</div>
		</div>
	);
}

export default WorkCard;

WorkCard.propTypes = {
	onCloseWorkCard: PropTypes.func.isRequired,
	onDeleteWorkCard: PropTypes.func.isRequired,
	onUpdateWorkCard: PropTypes.func.isRequired,
	onAddWorkCard: PropTypes.func.isRequired,
	work: PropTypes.shape({
		companyName: PropTypes.string.isRequired,
		jobPosition: PropTypes.string.isRequired,
		startOfWork: PropTypes.string.isRequired,
		endOfWork: PropTypes.string.isRequired,
		workplaceResponsibilities: PropTypes.string.isRequired,
	}),
};

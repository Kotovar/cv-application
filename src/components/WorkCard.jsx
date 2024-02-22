import PropTypes from 'prop-types';
import {useImmer} from 'use-immer';

function WorkCard({work, onCloseCard, onDeleteCard, onUpdateCard, onAddCard}) {
	const tempObj = {...work};
	const [newCard, updateNewCard] = useImmer(tempObj);

	function deleteCard() {
		onDeleteCard(work.companyName, 'work');
		onCloseCard();
	}

	function updateCard() {
		if (work.companyName && newCard.companyName) {
			onUpdateCard(work.companyName, newCard, 'work');
			onCloseCard();
		} else if (newCard.companyName) {
			onAddCard(newCard, 'work'), onCloseCard();
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
						<label htmlFor="startOfWork">Start Date</label>
						<input
							type="text"
							id="startOfWork"
							value={newCard.startOfWork}
							onChange={(e) => onWorkChange('startOfWork', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="endOfWork">End Date</label>
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
				<button onClick={onCloseCard}>Отменить</button>
				<button onClick={updateCard}>Сохранить</button>
			</div>
		</div>
	);
}

export default WorkCard;

WorkCard.propTypes = {
	onCloseCard: PropTypes.func.isRequired,
	onDeleteCard: PropTypes.func.isRequired,
	onUpdateCard: PropTypes.func.isRequired,
	onAddCard: PropTypes.func.isRequired,
	work: PropTypes.shape({
		companyName: PropTypes.string.isRequired,
		jobPosition: PropTypes.string.isRequired,
		startOfWork: PropTypes.string.isRequired,
		endOfWork: PropTypes.string.isRequired,
		workplaceResponsibilities: PropTypes.string.isRequired,
	}),
};

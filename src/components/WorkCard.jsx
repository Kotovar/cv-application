import PropTypes from 'prop-types';
import {useImmer} from 'use-immer';

function WorkCard({work, onCloseCard, onDeleteCard, onUpdateCard, onAddCard}) {
	const tempObj = {...work};
	const [newCard, updateNewCard] = useImmer(tempObj);
	const defaultCheck = false || newCard.endOfWork === 'current';
	const [currentWork, setCurrentWork] = useImmer(defaultCheck);
	const [errorStyle, setErrorStyle] = useImmer({borderColor: 'black'});

	const changeEndOfWork = (card) => {
		return {...card, endOfWork: 'current'};
	};

	const hasCompanyName = work.companyName && newCard.companyName;

	function updateCard() {
		if (hasCompanyName) {
			const changedCard = currentWork ? changeEndOfWork(newCard) : newCard;
			onUpdateCard(work.companyName, changedCard, 'work');
			onCloseCard();
		} else if (newCard.companyName) {
			const changedCard = currentWork ? changeEndOfWork(newCard) : newCard;
			onAddCard(changedCard, 'work');
			onCloseCard();
		} else {
			setErrorStyle({borderColor: 'red'});
		}
	}

	function deleteCard() {
		onDeleteCard(work.companyName, 'work');
		onCloseCard();
	}

	function onWorkChange(property, value) {
		if (value) {
			setErrorStyle({borderColor: 'black'});
		}
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
							style={errorStyle}
							placeholder="Enter the name of the company"
							type="text"
							id="companyName"
							value={newCard.companyName}
							onChange={(e) => onWorkChange('companyName', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="jobPosition">Job position</label>
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
							type="month"
							id="startOfWork"
							value={newCard.startOfWork}
							onChange={(e) => onWorkChange('startOfWork', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="endOfWork">End Date</label>
						<input
							type={currentWork ? 'text' : 'month'}
							id="endOfWork"
							value={
								currentWork
									? 'current'
									: newCard.endOfWork === 'current'
									? ''
									: newCard.endOfWork
							}
							disabled={currentWork}
							onChange={(e) => onWorkChange('endOfWork', e.target.value)}
						/>
						<label htmlFor="currentWorkDate">Current</label>
						<input
							type="checkbox"
							name="currentWorkDate"
							id="currentWorkDate"
							checked={currentWork}
							onChange={() => setCurrentWork(!currentWork)}
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
				<button className="button" onClick={deleteCard}>
					Delete
				</button>
				<button className="button" onClick={onCloseCard}>
					Cancel
				</button>
				<button className="button" onClick={updateCard}>
					Save
				</button>
			</div>
		</div>
	);
}

export default WorkCard;

WorkCard.propTypes = {
	onCloseCard: PropTypes.func,
	onDeleteCard: PropTypes.func,
	onUpdateCard: PropTypes.func,
	onAddCard: PropTypes.func,
	work: PropTypes.shape({
		companyName: PropTypes.string,
		jobPosition: PropTypes.string,
		startOfWork: PropTypes.string,
		endOfWork: PropTypes.string,
		workplaceResponsibilities: PropTypes.string,
	}),
};

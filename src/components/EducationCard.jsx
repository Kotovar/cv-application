import PropTypes from 'prop-types';
import {useImmer} from 'use-immer';

function EducationCard({
	education,
	onCloseWorkCard,
	onDeleteCard,
	onUpdateCard,
	onAddCard,
}) {
	const tempObj = {...education};
	const [newCard, updateNewCard] = useImmer(tempObj);

	function deleteCard() {
		onDeleteCard(education.establishment);
		onCloseWorkCard();
	}

	function updateCard() {
		if (education.establishment && newCard.establishment) {
			onUpdateCard(education.establishment, newCard);
			onCloseWorkCard();
		} else if (newCard.establishment) {
			onAddCard(newCard, 'education'), onCloseWorkCard();
		}
	}

	function onEducationChange(property, value) {
		updateNewCard((draft) => {
			draft[property] = value;
		});
	}

	return (
		<div className="education">
			<div className="education__inputs">
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="input_field">
						<label htmlFor="establishment">Establishment Name</label>
						<input
							type="text"
							id="establishment"
							value={newCard.establishment}
							onChange={(e) =>
								onEducationChange('establishment', e.target.value)
							}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="degree">Degree</label>
						<input
							type="text"
							id="degree"
							value={newCard.degree}
							onChange={(e) => onEducationChange('degree', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="startOfEducation">Start of education</label>
						<input
							type="text"
							id="startOfEducation"
							value={newCard.startOfEducation}
							onChange={(e) =>
								onEducationChange('startOfEducation', e.target.value)
							}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="endOfEducation">End of eEducation</label>
						<input
							type="text"
							id="endOfEducation"
							value={newCard.endOfEducation}
							onChange={(e) =>
								onEducationChange('endOfEducation', e.target.value)
							}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="location">Location</label>
						<input
							type="text"
							id="location"
							value={newCard.location}
							onChange={(e) => onEducationChange('location', e.target.value)}
						/>
					</div>
				</form>
			</div>
			<div className="education__buttons">
				<button onClick={deleteCard}>Удалить</button>
				<button onClick={onCloseWorkCard}>Отменить</button>
				<button onClick={updateCard}>Сохранить</button>
			</div>
		</div>
	);
}

export default EducationCard;

EducationCard.propTypes = {
	onCloseWorkCard: PropTypes.func.isRequired,
	onDeleteCard: PropTypes.func.isRequired,
	onUpdateCard: PropTypes.func.isRequired,
	onAddCard: PropTypes.func.isRequired,
	education: PropTypes.shape({
		establishment: PropTypes.string.isRequired,
		degree: PropTypes.string.isRequired,
		startOfEducation: PropTypes.string.isRequired,
		endOfEducation: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
	}),
};

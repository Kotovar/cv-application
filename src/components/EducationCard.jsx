import PropTypes from 'prop-types';
import {useImmer} from 'use-immer';

function EducationCard({
	education,
	onCloseCard,
	onDeleteCard,
	onUpdateCard,
	onAddCard,
}) {
	const tempObj = {...education};
	const [newCard, updateNewCard] = useImmer(tempObj);

	const defaultCheck = false || newCard.endOfEducation === 'current';
	const [currentEducation, setCurrentEducation] = useImmer(defaultCheck);
	const [errorStyle, setErrorStyle] = useImmer({borderColor: 'black'});

	const changeEndOfEducation = (card) => {
		return {...card, endOfEducation: 'current'};
	};

	const hasEducationEstablishment =
		education.establishment && newCard.establishment;

	function updateCard() {
		if (hasEducationEstablishment) {
			const changedCard = currentEducation
				? changeEndOfEducation(newCard)
				: newCard;
			onUpdateCard(education.establishment, changedCard, 'education');
			onCloseCard();
		} else if (newCard.establishment) {
			const changedCard = currentEducation
				? changeEndOfEducation(newCard)
				: newCard;
			onAddCard(changedCard, 'education');
			onCloseCard();
		} else {
			setErrorStyle({borderColor: 'red'});
		}
	}

	function deleteCard() {
		onDeleteCard(education.establishment, 'education');
		onCloseCard();
	}

	function onEducationChange(property, value) {
		if (value) {
			setErrorStyle({borderColor: 'black'});
		}
		updateNewCard((draft) => {
			draft[property] = value;
		});
	}

	return (
		<div className="education">
			<div className="education__inputs">
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="input_field">
						<label className="h3" htmlFor="establishment">
							Establishment
						</label>
						<input
							style={errorStyle}
							placeholder="Enter the name of the establishment"
							type="text"
							id="establishment"
							value={newCard.establishment}
							onChange={(e) =>
								onEducationChange('establishment', e.target.value)
							}
						/>
					</div>
					<div className="input_field">
						<label className="h3" htmlFor="degree">
							Degree
						</label>
						<input
							type="text"
							id="degree"
							value={newCard.degree}
							onChange={(e) => onEducationChange('degree', e.target.value)}
						/>
					</div>
					<div className="dateField">
						<div className="input_field">
							<label className="h3" htmlFor="startOfEducation">
								Start Year
							</label>
							<input
								type="number"
								min="1900"
								max={currentEducation ? null : newCard.endOfEducation}
								id="startOfEducation"
								value={newCard.startOfEducation}
								onChange={(e) =>
									onEducationChange('startOfEducation', e.target.value)
								}
							/>
						</div>
						<div className="input_field">
							<label className="h3" htmlFor="endOfEducation">
								End Year
							</label>
							<input
								type="number"
								min={newCard.startOfEducation}
								max={new Date().getFullYear()}
								id="endOfEducation"
								value={
									currentEducation
										? ''
										: newCard.endOfEducation === 'current'
										? ''
										: newCard.endOfEducation
								}
								disabled={currentEducation}
								onChange={(e) =>
									onEducationChange('endOfEducation', e.target.value)
								}
							/>
							<div className="checkboxField">
								<label className="checkbox">
									<input
										className="checkbox-control visually-hidden"
										type="checkbox"
										name="currentEducationkDate"
										id="currentEducationkDate"
										checked={currentEducation}
										onChange={() => setCurrentEducation(!currentEducation)}
									/>
									<span className="checkbox-emulator"></span>
									<span className="checkbox-label">Current</span>
								</label>
							</div>
						</div>
					</div>

					<div className="input_field">
						<label className="h3" htmlFor="location">
							Location
						</label>
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
				<button className="button" onClick={deleteCard}>
					Delete
				</button>
				<div className="confirmButtonsPanel">
					<button className="button" onClick={onCloseCard}>
						Cancel
					</button>
					<button className="button" onClick={updateCard}>
						Save
					</button>
				</div>
			</div>
		</div>
	);
}

export default EducationCard;

EducationCard.propTypes = {
	onCloseCard: PropTypes.func,
	onDeleteCard: PropTypes.func,
	onUpdateCard: PropTypes.func,
	onAddCard: PropTypes.func,
	education: PropTypes.shape({
		establishment: PropTypes.string,
		degree: PropTypes.string,
		startOfEducation: PropTypes.string,
		endOfEducation: PropTypes.string,
		location: PropTypes.string,
	}),
};

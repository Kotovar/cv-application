import PropTypes from 'prop-types';

function SkillCard(props) {
	function deleteCard() {
		props.onDeleteCard(props.name, 'skill');
	}

	return (
		<div className="skillCard">
			<div className="skillNameLabel">{props.name}</div>
			<button className="skillDeleteButton" onClick={deleteCard}>
				X
			</button>
		</div>
	);
}

export default SkillCard;

SkillCard.propTypes = {
	name: PropTypes.string,
	onDeleteCard: PropTypes.func.isRequired,
};

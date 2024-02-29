import PropTypes from 'prop-types';

function SkillCard(props) {
	function deleteCard() {
		props.onDeleteCard(props.name, 'skill');
	}

	return (
		<div className="skillCard">
			<div className="skillNameLabel">{props.name}</div>
			<button className="skillDeleteButton" onClick={deleteCard}>
				<svg
					className="deleteImage"
					viewBox="0 0 490 490"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M397.931,0H92.068C72.917,0,57.34,15.577,57.34,34.728v36.805c0,15.523,10.236,28.696,24.312,33.131v310.239
		c0,41.407,33.689,75.098,75.096,75.098H333.26c41.407,0,75.086-33.69,75.086-75.098V104.663
		c14.077-4.435,24.313-17.607,24.313-33.131V34.728C432.659,15.577,417.082,0,397.931,0z M387.495,414.902
		c0,29.913-24.333,54.246-54.235,54.246H156.749c-29.912,0-54.245-24.333-54.245-54.246V106.26h284.991V414.902z M411.809,71.532
		c0,7.657-6.221,13.877-13.877,13.877H92.068c-7.657,0-13.877-6.22-13.877-13.877V34.728c0-7.656,6.22-13.877,13.877-13.877h305.863
		c7.656,0,13.877,6.221,13.877,13.877V71.532z"
					/>
					<rect x="180.044" y="168.59" width="20.851" height="238.229" />
					<rect x="289.104" y="168.59" width="20.851" height="238.229" />
				</svg>
			</button>
		</div>
	);
}

export default SkillCard;

SkillCard.propTypes = {
	name: PropTypes.string,
	onDeleteCard: PropTypes.func.isRequired,
};

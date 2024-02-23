import PropTypes from 'prop-types';

function ExtraPanel({extra, onUpdateCard}) {
	const enteringExtra = (value) => onUpdateCard('', value, 'extra');
	return (
		<div className="extraPanel">
			<h1>Additional Information</h1>
			<textarea
				className="extraPanelInput"
				placeholder="Tell us about yourself, your hobbies, interests, etc."
				onChange={(e) => enteringExtra(e.target.value)}
				value={extra}
			/>
		</div>
	);
}

export default ExtraPanel;

ExtraPanel.propTypes = {
	extra: PropTypes.string,
	onUpdateCard: PropTypes.func,
};

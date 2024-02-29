import PropTypes from 'prop-types';

function ExtraPanel({extra, onUpdateCard}) {
	const enteringExtra = (value) => onUpdateCard('', value, 'extra');
	return (
		<div className="extraPanel">
			<p className="h2">Additional Information</p>
			<textarea
				rows="10"
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

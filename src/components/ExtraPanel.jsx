import PropTypes from 'prop-types';
import {useImmer} from 'use-immer';
// import {useEffect} from 'react';

function ExtraPanel({extra, onUpdateCard}) {
	const [newExtra, updateExtra] = useImmer(extra);
	const enteringExtra = (value) => (
		updateExtra(value), onUpdateCard('', newExtra, 'extra')
	);
	return (
		<div className="extraPanel">
			<h1>Additional Information</h1>
			<textarea
				className="extraPanelInput"
				placeholder="Tell us about yourself, your hobbies, interests, etc."
				onChange={(e) => enteringExtra(e.target.value)}
				value={newExtra}
			/>
		</div>
	);
}

export default ExtraPanel;

ExtraPanel.propTypes = {
	extra: PropTypes.string,
	onUpdateCard: PropTypes.func,
};

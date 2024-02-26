import PropTypes from 'prop-types';

function ButtonsPanel(props) {
	return (
		<div className="buttonPanel">
			<button onClick={props.onTogglePreview}>
				{props.isShowResume ? 'Hide preview' : 'Show preview'}
			</button>
			<button onClick={props.onResetResume}>Clear Resume</button>
			<button onClick={props.onLoadExample}>Load example</button>
			<button onClick={window.print}>Upload to pdf</button>
		</div>
	);
}

ButtonsPanel.propTypes = {
	onTogglePreview: PropTypes.func,
	onResetResume: PropTypes.func,
	onLoadExample: PropTypes.func,
	isShowResume: PropTypes.bool,
};

export default ButtonsPanel;

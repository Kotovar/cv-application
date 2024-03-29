import PropTypes from 'prop-types';

function ButtonsPanel(props) {
	function print() {
		if (!props.isShowResume) {
			props.onTogglePreview();
			setTimeout(() => {
				window.print();
			}, 500);
		} else {
			window.print();
		}
	}

	return (
		<div className="buttonPanel">
			<button className="button" onClick={props.onTogglePreview}>
				{props.isShowResume ? 'Hide preview' : 'Show preview'}
			</button>
			<button className="button" onClick={props.onResetResume}>
				Clear Resume
			</button>
			<button className="button" onClick={props.onLoadExample}>
				Load example
			</button>
			<button className="button" onClick={print}>
				Upload to pdf
			</button>
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

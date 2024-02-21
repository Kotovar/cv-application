import PropTypes from 'prop-types';

function ButtonsPanel(props) {
	return (
		<div className="buttonPanel">
			<button onClick={props.onTogglePreview}>Свернуть превью</button>
			<button>Очистить резюме</button>
			<button>Выгрузить в pdf</button>
		</div>
	);
}

ButtonsPanel.propTypes = {
	onTogglePreview: PropTypes.func.isRequired,
};

export default ButtonsPanel;

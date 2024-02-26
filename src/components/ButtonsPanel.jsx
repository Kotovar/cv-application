import PropTypes from 'prop-types';

function ButtonsPanel(props) {
	return (
		<div className="buttonPanel">
			<button onClick={props.onTogglePreview}>Свернуть превью</button>
			<button onClick={props.onResetResume}>Очистить резюме</button>
			<button>Показать пример</button>
			<button>Выгрузить в pdf</button>
		</div>
	);
}

ButtonsPanel.propTypes = {
	onTogglePreview: PropTypes.func.isRequired,
	onResetResume: PropTypes.func.isRequired,
};

export default ButtonsPanel;

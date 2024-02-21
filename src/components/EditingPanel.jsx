import ButtonsPanel from './ButtonsPanel';
import PropTypes from 'prop-types';
import MainInformationPanel from './MainInformationPanel';

function EditingPanel(props) {
	return (
		<div className="editor">
			<ButtonsPanel onTogglePreview={props.onTogglePreview} />
			<MainInformationPanel />
		</div>
	);
}

EditingPanel.propTypes = {
	onTogglePreview: PropTypes.func.isRequired,
};

export default EditingPanel;

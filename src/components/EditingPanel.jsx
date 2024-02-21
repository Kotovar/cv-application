import ButtonsPanel from './ButtonsPanel';
import PropTypes from 'prop-types';
import MainInformationPanel from './MainInformationPanel';
import WorkInformationPanel from './WorkMainPanel';
import EducationInformationPanel from './EducationMainPanel';

function EditingPanel(props) {
	return (
		<div className="editor">
			<ButtonsPanel onTogglePreview={props.onTogglePreview} />
			<MainInformationPanel onPortfolioChange={props.onPortfolioChange} />
			<WorkInformationPanel
				works={props.works}
				onDeleteWorkCard={props.onDeleteWorkCard}
				onUpdateWorkCard={props.onUpdateWorkCard}
				onAddWorkCard={props.onAddWorkCard}
			/>
			<EducationInformationPanel />
		</div>
	);
}

EditingPanel.propTypes = {
	onTogglePreview: PropTypes.func.isRequired,
	onPortfolioChange: PropTypes.func.isRequired,
	onDeleteWorkCard: PropTypes.func.isRequired,
	onUpdateWorkCard: PropTypes.func.isRequired,
	onAddWorkCard: PropTypes.func.isRequired,
	works: PropTypes.array,
};

export default EditingPanel;

import ButtonsPanel from './ButtonsPanel';
import PropTypes from 'prop-types';
import MainInformationPanel from './MainPanel';
import WorkInformationPanel from './WorkPanel';
import EducationInformationPanel from './EducationPanel';

function EditingPanel(props) {
	return (
		<div className="editor">
			<ButtonsPanel onTogglePreview={props.onTogglePreview} />
			<MainInformationPanel onPortfolioChange={props.onPortfolioChange} />
			<WorkInformationPanel
				works={props.works}
				onDeleteWorkCard={props.onDeleteWorkCard}
				onUpdateWorkCard={props.onUpdateWorkCard}
				onAddWorkCard={props.onAddCard}
			/>
			<EducationInformationPanel
				educations={props.educations}
				onAddEducationCard={props.onAddCard}
				onDeleteEducationCard={props.onDeleteEducationCard}
				onUpdateEducationCard={props.onUpdateEducationCard}
			/>
		</div>
	);
}

EditingPanel.propTypes = {
	onTogglePreview: PropTypes.func.isRequired,
	onPortfolioChange: PropTypes.func.isRequired,
	onDeleteWorkCard: PropTypes.func.isRequired,
	onUpdateWorkCard: PropTypes.func.isRequired,
	onAddCard: PropTypes.func.isRequired,
	onDeleteEducationCard: PropTypes.func.isRequired,
	onUpdateEducationCard: PropTypes.func.isRequired,
	onAddEducationCard: PropTypes.func.isRequired,
	works: PropTypes.array,
	educations: PropTypes.array,
};

export default EditingPanel;

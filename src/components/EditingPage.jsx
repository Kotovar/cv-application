import ButtonsPanel from './ButtonsPanel';
import PropTypes from 'prop-types';
import MainInformationPanel from './MainPanel';
import CardList from './CardList';
import SkillsPanel from './SkillsPanel';
import ExtraPanel from './ExtraPanel';

function EditingPanel(props) {
	return (
		<div className="editor">
			<ButtonsPanel
				onTogglePreview={props.onTogglePreview}
				onResetResume={props.onResetResume}
			/>
			<MainInformationPanel
				onPortfolioChange={props.onPortfolioChange}
				mainField={props.mainField}
			/>
			<CardList
				cards={props.works}
				cardType="work"
				onDeleteCard={props.onDeleteCard}
				onUpdateCard={props.onUpdateCard}
				onAddCard={props.onAddCard}
			/>
			<CardList
				cards={props.educations}
				cardType="education"
				onDeleteCard={props.onDeleteCard}
				onUpdateCard={props.onUpdateCard}
				onAddCard={props.onAddCard}
			/>
			<SkillsPanel
				skills={props.skills}
				onDeleteCard={props.onDeleteCard}
				onAddCard={props.onAddCard}
			/>
			<ExtraPanel extra={props.extra} onUpdateCard={props.onUpdateCard} />
		</div>
	);
}

EditingPanel.propTypes = {
	onTogglePreview: PropTypes.func.isRequired,
	onPortfolioChange: PropTypes.func.isRequired,
	onDeleteCard: PropTypes.func.isRequired,
	onUpdateCard: PropTypes.func.isRequired,
	onAddCard: PropTypes.func.isRequired,
	onResetResume: PropTypes.func.isRequired,
	works: PropTypes.array,
	educations: PropTypes.array,
	skills: PropTypes.array,

	mainField: PropTypes.object,

	extra: PropTypes.string,
};

export default EditingPanel;

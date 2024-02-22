import ButtonsPanel from './ButtonsPanel';
import PropTypes from 'prop-types';
import MainInformationPanel from './MainPanel';
import CardList from './CardList';
import SkillsPanel from './SkillsPanel';

function EditingPanel(props) {
	return (
		<div className="editor">
			<ButtonsPanel onTogglePreview={props.onTogglePreview} />
			<MainInformationPanel onPortfolioChange={props.onPortfolioChange} />
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
		</div>
	);
}

EditingPanel.propTypes = {
	onTogglePreview: PropTypes.func.isRequired,
	onPortfolioChange: PropTypes.func.isRequired,
	onDeleteCard: PropTypes.func.isRequired,
	onUpdateCard: PropTypes.func.isRequired,
	onAddCard: PropTypes.func.isRequired,
	works: PropTypes.array,
	educations: PropTypes.array,
	skills: PropTypes.array,
};

export default EditingPanel;

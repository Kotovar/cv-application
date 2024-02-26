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
				onLoadExample={props.onLoadExample}
				isShowResume={props.isShowResume}
			/>
			<MainInformationPanel
				onPortfolioChange={props.onPortfolioChange}
				mainField={props.mainField}
				onLoadAvatar={props.onLoadAvatar}
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
	onTogglePreview: PropTypes.func,
	onPortfolioChange: PropTypes.func,
	onDeleteCard: PropTypes.func,
	onUpdateCard: PropTypes.func,
	onAddCard: PropTypes.func,
	onResetResume: PropTypes.func,
	onLoadExample: PropTypes.func,
	onLoadAvatar: PropTypes.func,
	works: PropTypes.array,
	educations: PropTypes.array,
	skills: PropTypes.array,

	mainField: PropTypes.object,

	extra: PropTypes.string,
	isShowResume: PropTypes.bool,
};

export default EditingPanel;

import SkillCard from './SkillCard';
import PropTypes from 'prop-types';

function SkillsPanel(props) {
	const skillList = Array.from(new Set(props.skills)).map((skill) => (
		<SkillCard key={skill} name={skill} onDeleteCard={props.onDeleteCard} />
	));

	return (
		<div className="skillsPanel">
			<div className="skillsPanel__list">{skillList}</div>
			<div className="skillsPanel__inputField">
				<form onSubmit={(e) => e.preventDefault()}>
					<input
						type="text"
						className="skillsPanel__input input_field"
						placeholder="Skill such as javascript or learning ability"
					/>
					<button>✓</button>
				</form>
			</div>
		</div>
	);
}

export default SkillsPanel;

SkillsPanel.propTypes = {
	skills: PropTypes.array,
	onDeleteCard: PropTypes.func.isRequired,
};

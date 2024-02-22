import SkillCard from './SkillCard';
import PropTypes from 'prop-types';
import {useImmer} from 'use-immer';

function SkillsPanel(props) {
	const skillList = Array.from(new Set(props.skills)).map((skill) => (
		<SkillCard key={skill} name={skill} onDeleteCard={props.onDeleteCard} />
	));

	const [newSkill, updateNewSkill] = useImmer('');

	const enteringSkill = (value) => updateNewSkill(value);

	function updateCard() {
		props.skills.includes(newSkill)
			? null
			: (props.onAddCard(newSkill, 'skill'), updateNewSkill(''));
	}

	return (
		<div className="skillsPanel">
			<h1>Skills</h1>
			<div className="skillsPanel__list">{skillList}</div>
			<div className="skillsPanel__inputField">
				<form onSubmit={(e) => e.preventDefault()}>
					<input
						type="text"
						className="skillsPanel__input input_field"
						placeholder="Skill such as javascript or learning ability"
						onChange={(e) => enteringSkill(e.target.value)}
						value={newSkill}
					/>
					<button onClick={updateCard} disabled={!newSkill}>
						✓
					</button>
				</form>
			</div>
		</div>
	);
}

export default SkillsPanel;

SkillsPanel.propTypes = {
	skills: PropTypes.array,
	onDeleteCard: PropTypes.func.isRequired,
	onAddCard: PropTypes.func.isRequired,
};

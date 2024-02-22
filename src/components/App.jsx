import EditingPanel from './EditingPage';
import PreviewPanel from './PreviewPage';
import {useState} from 'react';
import {useImmer} from 'use-immer';

function App() {
	const [show, setShow] = useState(true);
	const [portfolio, updatePortfolio] = useImmer(initialContacts);

	const handleTogglePreview = () => setShow(!show);

	function handlePortfolioMainChange(property, value) {
		updatePortfolio((draft) => {
			draft.mainField[property] = value;
		});
	}

	function updateCard(oldCardName, newCard, section) {
		updatePortfolio((draft) => {
			const {work, education} = draft;
			switch (section) {
				case 'work':
					draft.work = work.map((el) =>
						el.companyName === oldCardName ? newCard : el,
					);
					break;
				case 'education':
					draft.education = education.map((el) =>
						el.establishment === oldCardName ? newCard : el,
					);
					break;
				case 'extra':
					draft.extra = newCard;
					break;
			}
		});
	}

	function addCard(newCard, section) {
		updatePortfolio((draft) => {
			switch (section) {
				case 'work':
					draft.work.push(newCard);
					break;
				case 'education':
					draft.education.push(newCard);
					break;
				case 'skill':
					draft.skills.push(newCard);
					break;
			}
		});
	}

	function deleteCard(name, section) {
		updatePortfolio((draft) => {
			switch (section) {
				case 'work':
					draft.work = draft.work.filter((el) => el.companyName !== name);
					break;
				case 'education':
					draft.education = draft.education.filter(
						(el) => el.establishment !== name,
					);
					break;
				case 'skill':
					draft.skills = draft.skills.filter((el) => el !== name);
					break;
			}
		});
	}

	return (
		<>
			<EditingPanel
				onTogglePreview={handleTogglePreview}
				onPortfolioChange={handlePortfolioMainChange}
				onDeleteCard={deleteCard}
				onUpdateCard={updateCard}
				onAddCard={addCard}
				works={portfolio.work}
				educations={portfolio.education}
				skills={portfolio.skills}
				extra={portfolio.extra}
			/>
			{show && (
				<PreviewPanel
					contacts={portfolio.mainField}
					works={portfolio.work}
					educations={portfolio.education}
					skills={portfolio.skills}
					extra={portfolio.extra}
				/>
			)}
		</>
	);
}

export default App;

const initialContacts = {
	mainField: {
		name: 'Dmitrii',
		email: 'neasit3@gmail.com',
		phone: '8-923-343-32-12',
		speciality: 'Frontend Software Engineer',
		address: 'Russia, Krasnoyarsk',
		link: 'https://kotovar.github.io/Homepage/',
	},
	work: [
		{
			companyName: '1cBit',
			jobPosition: 'Manager',
			startOfWork: '01-2016',
			endOfWork: '12-2022',
			workplaceResponsibilities: 'do that and that',
		},
		{
			companyName: 'NewJob',
			jobPosition: 'Frontend Developer',
			startOfWork: '04-2024',
			endOfWork: 'current',
			workplaceResponsibilities: 'do that and that',
		},
	],
	education: [
		{
			establishment: 'Siberian State Technological University',
			degree: 'Specialist Degree',
			startOfEducation: '2008',
			endOfEducation: '2013',
			location: 'Russia, Krasnoyarsk',
		},
	],
	skills: ['javaScript', 'Html', 'Css', 'Css', 'Webpack'],
	extra:
		'Focused on professional growth in frontend development, I am dedicated to self-learning through resources like roadmap.sh/frontend and The Odin Project.',
};

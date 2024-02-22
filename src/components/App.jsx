import EditingPanel from './EditingPage';
import PreviewPanel from './PreviewPage';
import {useState} from 'react';
import {useImmer} from 'use-immer';

function App() {
	const [show, setShow] = useState(true);
	const [portfolio, updatePortfolio] = useImmer(initialContacts);

	function handleTogglePreview() {
		setShow(!show);
	}

	function handlePortfolioMainChange(property, value) {
		updatePortfolio((draft) => {
			draft.mainField[property] = value;
		});
	}

	function updateWorkCard(oldCardName, newCard) {
		updatePortfolio((draft) => {
			for (let i = 0; i < draft.work.length; i++) {
				if (draft.work[i].companyName === oldCardName) {
					draft.work[i] = newCard;
				}
			}
		});
	}

	// Объединить с функцией выше
	function updateEducationCard(oldCardName, newCard) {
		updatePortfolio((draft) => {
			for (let i = 0; i < draft.education.length; i++) {
				if (draft.education[i].establishment === oldCardName) {
					draft.education[i] = newCard;
				}
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
			}

			// section === 'work'
			// 	? draft.work.push(newCard)
			// 	: draft.education.push(newCard);
		});
	}

	function deleteWorkCard(companyName) {
		updatePortfolio((draft) => {
			draft.work = draft.work.filter((el) => el.companyName !== companyName);
		});
	}

	// Объединить с функцией выше
	function deleteEducationCard(establishmentName) {
		updatePortfolio((draft) => {
			draft.education = draft.education.filter(
				(el) => el.establishment !== establishmentName,
			);
		});
	}

	return (
		<>
			<EditingPanel
				onTogglePreview={handleTogglePreview}
				onPortfolioChange={handlePortfolioMainChange}
				onDeleteWorkCard={deleteWorkCard}
				onUpdateWorkCard={updateWorkCard}
				onAddCard={addCard}
				works={portfolio.work}
				educations={portfolio.education}
				onDeleteEducationCard={deleteEducationCard}
				onUpdateEducationCard={updateEducationCard}
			/>
			{show && (
				<PreviewPanel
					contacts={portfolio.mainField}
					works={portfolio.work}
					educations={portfolio.education}
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
		phone: '8-923-348-65-68',
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
			establishment: 'Siberian State Technological University, Krasnoyarsk',
			degree: 'Specialist Degree',
			startOfEducation: '2008',
			endOfEducation: '2013',
			location: 'Russia, Krasnoyarsk',
		},
	],
};

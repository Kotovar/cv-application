import EditingPanel from './EditingPanel';
import PreviewPanel from './PreviewPanel';
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

	function addWorkCard(newCard) {
		updatePortfolio((draft) => {
			draft.work.push(newCard);
		});
	}

	function deleteWorkCard(companyName) {
		updatePortfolio((draft) => {
			draft.work = draft.work.filter((el) => el.companyName !== companyName);
		});
	}

	return (
		<>
			<EditingPanel
				onTogglePreview={handleTogglePreview}
				onPortfolioChange={handlePortfolioMainChange}
				onDeleteWorkCard={deleteWorkCard}
				onUpdateWorkCard={updateWorkCard}
				onAddWorkCard={addWorkCard}
				works={portfolio.work}
			/>
			{show && (
				<PreviewPanel contacts={portfolio.mainField} works={portfolio.work} />
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
};

import EditingPanel from './EditingPage';
import PreviewPanel from './PreviewPage';
import {useState} from 'react';
import {useImmer} from 'use-immer';
import defaultImage from '/public/images/avatar.jpg';
import {useRef} from 'react';

function App() {
	const [show, setShow] = useState(true);
	const [image, setImage] = useState(defaultImage);
	const [portfolio, updatePortfolio] = useImmer(initialContacts);
	const inputImgPrevRef = useRef(null);
	const inputImgRef = useRef(null);

	const handleTogglePreview = () => setShow(!show);

	const resetResume = () => {
		updatePortfolio(emptyResume);
		loadAvatar(defaultImage);

		inputImgPrevRef.current.value &&= '';
		inputImgRef.current.value &&= '';
	};

	const loadExample = () => updatePortfolio(initialContacts);

	const loadAvatar = (value) => setImage(value);

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
				onLoadAvatar={loadAvatar}
				onDeleteCard={deleteCard}
				onUpdateCard={updateCard}
				onAddCard={addCard}
				onResetResume={resetResume}
				onLoadExample={loadExample}
				works={portfolio.work}
				educations={portfolio.education}
				skills={portfolio.skills}
				extra={portfolio.extra}
				mainField={portfolio.mainField}
				isShowResume={show}
				inputImgRef={inputImgRef}
			/>
			{show && (
				<PreviewPanel
					contacts={portfolio.mainField}
					works={portfolio.work}
					educations={portfolio.education}
					onLoadAvatar={loadAvatar}
					skills={portfolio.skills}
					extra={portfolio.extra}
					image={image}
					inputImgPrevRef={inputImgPrevRef}
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
			startOfWork: '2016-01',
			endOfWork: '2022-12',
			workplaceResponsibilities:
				'Technical Proficiency: Deployed and managed Electronic Digital Signatures (EDS) and implemented SBIS software solutions for diverse business needs. Configured and troubleshot workstations for Windows and macOS, optimizing for state and electronic portal access, SBIS applications, and POS systems.\n\nProblem-Solving: Demonstrated ability to swiftly diagnose and resolve complex technical issues, including software errors, hardware compatibility, and system configuration challenges, enhancing operational efficiency and customer satisfaction.',
		},
		{
			companyName: 'NewJob',
			jobPosition: 'Frontend Developer',
			startOfWork: '2024-01',
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
	skills: [
		'Html',
		'Css',
		'Sass',
		'javaScript',
		'React',
		'Jest',
		'Webpack',
		'Vite',
	],
	extra:
		'Focused on professional growth in frontend development, I am dedicated to self-learning through resources like roadmap.sh/frontend and The Odin Project.',
};

const emptyResume = {
	mainField: {
		name: '',
		email: '',
		phone: '',
		speciality: '',
		address: '',
		link: '',
	},
	work: [],
	education: [],
	skills: [],
	extra: '',
};

import EditingPanel from './EditingPanel';
import PreviewPanel from './PreviewPanel';
import {useState} from 'react';

function App() {
	const [show, setShow] = useState(true);

	function handleTogglePreview() {
		setShow(!show);
	}

	return (
		<>
			<EditingPanel onTogglePreview={handleTogglePreview} />
			{show && <PreviewPanel contacts={initialContacts} />}
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
};

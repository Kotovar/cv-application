import EditingPanel from './EditingPanel';
import PreviewPanel from './PreviewPanel';
import {useContext} from 'react';
import {ResumeProvider, ResumeContext} from './Context';

const App = () => {
	const {preview} = useContext(ResumeContext);

	return (
		<ResumeProvider>
			<EditingPanel />
			{preview && <PreviewPanel />}
		</ResumeProvider>
	);
};

export default App;

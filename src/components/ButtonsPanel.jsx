import {ResumeContext} from './Context';
import {useContext} from 'react';

function ButtonsPanel() {
	function showViewPanel() {}

	return (
		<div className="buttonPanel">
			<button onClick={showViewPanel}>Свернуть превью</button>
			<button>Очистить резюме</button>
			<button>Выгрузить в pdf</button>
		</div>
	);
}

export default ButtonsPanel;

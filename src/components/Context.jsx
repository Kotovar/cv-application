import {createContext, useState} from 'react';

const initial = {
	preview: true,
};

export const ResumeContext = createContext(initial);

// Создаем компонент-провайдер, который принимает детей в качестве пропсов
export const ResumeProvider = ({children}) => {
	// Создаем хук состояния для объекта с данными резюме
	const [resume, setResume] = useState({});

	// Создаем функции для обновления разных частей объекта
	const updatePersonalInfo = (info) => {
		// Используем spread operator для копирования и обновления объекта
		setResume({...resume, personalInfo: info});
	};

	const showPreview = () => {
		// Используем spread operator для копирования и обновления объекта
		setResume({...resume, preview: !resume.preview});
	};

	const addWorkCard = (card) => {
		// Используем immer для создания нового неизменяемого объекта
		setResume((draft) => {
			// Проверяем, есть ли у объекта свойство workCards, если нет, то создаем его как пустой массив
			if (!draft.workCards) {
				draft.workCards = [];
			}
			// Добавляем новую карточку в конец массива
			draft.workCards.push(card);
		});
	};

	const deleteWorkCard = (index) => {
		// Используем immer для создания нового неизменяемого объекта
		setResume((draft) => {
			// Удаляем карточку по индексу из массива
			draft.workCards.splice(index, 1);
		});
	};

	// Аналогично для других частей объекта, например, educationCards, skills, etc.

	// Передаем значение и функции в качестве второго аргумента в провайдер
	return (
		<ResumeContext.Provider
			value={{
				resume,
				setResume, // Экспортируем функцию setResume вместе с объектом resume
				updatePersonalInfo,
				addWorkCard,
				deleteWorkCard,
				showPreview,
			}}
		>
			{children}
		</ResumeContext.Provider>
	);
};

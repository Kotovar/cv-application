function MainInformationPanel() {
	return (
		<div className="mainInformationPanel">
			<div className="mainInformationPanel__inputs">
				<label htmlFor="name">Full name</label>
				<input type="text" id="name" />
				<label htmlFor="email">Email</label>
				<input type="email" id="email" />
				<label htmlFor="phone">Phone number</label>
				<input type="tel" id="phone" />
				<label htmlFor="speciality">Speciality</label>
				<input type="text" id="speciality" />
				<label htmlFor="address">Address</label>
				<input type="text" id="address" />
				<label htmlFor="link">Link</label>
				<input type="url" id="link" />
			</div>
			<div className="mainInformationPanel__buttons">
				<button>Загрузить фото</button>
				<button>Редактировать</button>
				<button>Сохранить</button>
			</div>
		</div>
	);
}

export default MainInformationPanel;

import PropTypes from 'prop-types';

function MainInformationPanel({onPortfolioChange, mainField, onLoadAvatar}) {
	return (
		<div className="mainInformationPanel">
			<h1>Personal information</h1>
			<div className="mainInformationPanel__inputs">
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="input_field">
						<label htmlFor="name">Full name</label>
						<input
							type="text"
							id="name"
							onChange={(e) => onPortfolioChange('name', e.target.value)}
							value={mainField.name}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							onChange={(e) => onPortfolioChange('email', e.target.value)}
							value={mainField.email}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="phone">Phone number</label>
						<input
							type="tel"
							id="phone"
							onChange={(e) => onPortfolioChange('phone', e.target.value)}
							value={mainField.phone}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="speciality">Speciality</label>
						<input
							type="text"
							id="speciality"
							onChange={(e) => onPortfolioChange('speciality', e.target.value)}
							value={mainField.speciality}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="address">Address</label>
						<input
							type="text"
							id="address"
							onChange={(e) => onPortfolioChange('address', e.target.value)}
							value={mainField.address}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="link">Link</label>
						<input
							type="url"
							id="link"
							onChange={(e) => onPortfolioChange('link', e.target.value)}
							value={mainField.link}
						/>
					</div>
				</form>
			</div>
			<div className="mainInformationPanel__buttons">
				<label htmlFor="inputImg" className="labelForFile labelBorder">
					Загрузить фото
				</label>
				<input
					id="inputImg"
					type="file"
					name="inputImg"
					accept=".jpg, .jpeg, .png, .webp, image/jpeg, image/png, image/webp"
					onChange={(e) => {
						if (e.target.files.length > 0) {
							onLoadAvatar(e.target.files[0]);
						}
					}}
				/>
			</div>
		</div>
	);
}

export default MainInformationPanel;

MainInformationPanel.propTypes = {
	onPortfolioChange: PropTypes.func,
	onLoadAvatar: PropTypes.func,
	mainField: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string,
		phone: PropTypes.string,
		speciality: PropTypes.string,
		address: PropTypes.string,
		link: PropTypes.string,
	}),
};

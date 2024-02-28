import PropTypes from 'prop-types';

function MainInformationPanel({
	onPortfolioChange,
	mainField,
	onLoadAvatar,
	inputImgRef,
}) {
	return (
		<div className="mainInformationPanel">
			<p className="h2">Personal information</p>
			<div className="mainInformationPanel__inputs">
				<form className="personalForm" onSubmit={(e) => e.preventDefault()}>
					<div className="input_field">
						<label className="h3" htmlFor="name">
							Full name
						</label>
						<input
							type="text"
							id="name"
							onChange={(e) => onPortfolioChange('name', e.target.value)}
							value={mainField.name}
						/>
					</div>
					<div className="input_field">
						<label className="h3" htmlFor="email">
							Email
						</label>
						<input
							type="email"
							id="email"
							onChange={(e) => onPortfolioChange('email', e.target.value)}
							value={mainField.email}
						/>
					</div>
					<div className="input_field">
						<label className="h3" htmlFor="phone">
							Phone number
						</label>
						<input
							type="tel"
							id="phone"
							onChange={(e) => onPortfolioChange('phone', e.target.value)}
							value={mainField.phone}
						/>
					</div>
					<div className="input_field">
						<label className="h3" htmlFor="speciality">
							Speciality
						</label>
						<input
							type="text"
							id="speciality"
							onChange={(e) => onPortfolioChange('speciality', e.target.value)}
							value={mainField.speciality}
						/>
					</div>
					<div className="input_field">
						<label className="h3" htmlFor="address">
							Address
						</label>
						<input
							type="text"
							id="address"
							onChange={(e) => onPortfolioChange('address', e.target.value)}
							value={mainField.address}
						/>
					</div>
					<div className="input_field">
						<label className="h3" htmlFor="link">
							Link
						</label>
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
				<label htmlFor="inputImg" className="labelForFile button">
					Загрузить фото
				</label>
				<input
					id="inputImg"
					className="visually-hidden"
					type="file"
					name="inputImg"
					accept=".jpg, .jpeg, .png, .webp, image/jpeg, image/png, image/webp"
					onChange={(e) => {
						if (e.target.files.length > 0) {
							onLoadAvatar(e.target.files[0]);
						}
					}}
					ref={inputImgRef}
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
	inputImgRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

import PropTypes from 'prop-types';

function MainInformationPanel({onPortfolioChange}) {
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
						/>
					</div>
					<div className="input_field">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							onChange={(e) => onPortfolioChange('email', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="phone">Phone number</label>
						<input
							type="tel"
							id="phone"
							onChange={(e) => onPortfolioChange('phone', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="speciality">Speciality</label>
						<input
							type="text"
							id="speciality"
							onChange={(e) => onPortfolioChange('speciality', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="address">Address</label>
						<input
							type="text"
							id="address"
							onChange={(e) => onPortfolioChange('address', e.target.value)}
						/>
					</div>
					<div className="input_field">
						<label htmlFor="link">Link</label>
						<input
							type="url"
							id="link"
							onChange={(e) => onPortfolioChange('link', e.target.value)}
						/>
					</div>
				</form>
			</div>
			<div className="mainInformationPanel__buttons">
				<button>Загрузить фото</button>
			</div>
		</div>
	);
}

export default MainInformationPanel;

MainInformationPanel.propTypes = {
	onPortfolioChange: PropTypes.func.isRequired,
};

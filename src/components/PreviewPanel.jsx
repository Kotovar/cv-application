import PropTypes from 'prop-types';

function PreviewPanel({contacts}) {
	return (
		<div className="preview">
			<div className="preview__main">
				<div className="preview__main_avatar">
					<img src="../../public/images/avatar.jpg" alt="avatar" />
				</div>
				<div className="preview-left-text-field">
					<h1 className="preview-left-text-field__name">
						{contacts.mainField.name}
					</h1>
					<p className="preview-left-text-field__speciality">
						{contacts.mainField.speciality}
					</p>
					<p className="preview-left-text-field__address">
						{contacts.mainField.address}
					</p>
				</div>
				<div className="preview-right-text-field">
					<p className="preview-right-text-field__phone">
						{contacts.mainField.phone}
					</p>
					<p className="preview-right-text-field__email">
						{contacts.mainField.email}
					</p>
					<p className="preview-right-text-field__link">
						{contacts.mainField.link}
					</p>
				</div>
			</div>
		</div>
	);
}

export default PreviewPanel;

PreviewPanel.propTypes = {
	contacts: PropTypes.shape({
		mainField: PropTypes.shape({
			name: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired,
			phone: PropTypes.string.isRequired,
			speciality: PropTypes.string.isRequired,
			address: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
};

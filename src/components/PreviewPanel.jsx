import PropTypes from 'prop-types';

function PreviewPanel({contacts, works}) {
	const worksList = works.map((work) => (
		<div key={work.companyName} className="preview__work-card">
			<div className="preview__work-card__left">
				<div className="preview__work-card__left__start_data">
					<p>{work.startOfWork}</p>
				</div>
				<div className="preview__work-card__left__end_data">
					<p>{work.endOfWork}</p>
				</div>
			</div>

			<div className="preview__work-card__right">
				<p className="review__work-card__right_company">{work.companyName}</p>
				<p className="review__work-card__right_job">{work.jobPosition}</p>
				<p className="review__work-card__right_responsibilities">
					{work.workplaceResponsibilities}
				</p>
			</div>
		</div>
	));

	return (
		<div className="preview">
			<div className="preview__main">
				<div className="preview__main__avatar">
					<img src="../../public/images/avatar.jpg" alt="avatar" />
				</div>
				<div className="preview-left">
					<h1 className="preview-left__name">{contacts.name}</h1>
					<p className="preview-left__speciality">{contacts.speciality}</p>
					<p className="preview-left__address">{contacts.address}</p>
				</div>
				<div className="preview-right">
					<p className="preview-right__phone">{contacts.phone}</p>
					<p className="preview-right__email">{contacts.email}</p>
					<p className="preview-right__link">{contacts.link}</p>
				</div>
			</div>

			<div className="work-section">
				<h1>Work experience</h1>
				{worksList}
			</div>
		</div>
	);
}

export default PreviewPanel;

PreviewPanel.propTypes = {
	contacts: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		speciality: PropTypes.string.isRequired,
		address: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
	}).isRequired,

	works: PropTypes.array.isRequired,
};
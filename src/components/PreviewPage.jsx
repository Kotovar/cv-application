import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {useState} from 'react';

function PreviewPanel({
	contacts,
	works,
	educations,
	skills,
	extra,
	image,
	onLoadAvatar,
	inputImgPrevRef,
}) {
	const [imageUrl, setImageUrl] = useState(null);

	useEffect(() => {
		let newUrl;

		if (image) {
			if (typeof image === 'string') {
				setImageUrl(image);
				if (newUrl) {
					URL.revokeObjectURL(newUrl);
				}
			} else {
				newUrl = URL.createObjectURL(image);
				setImageUrl(newUrl);

				return () => {
					URL.revokeObjectURL(newUrl);
				};
			}
		}
	}, [image]);

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

	const educationList = educations.map((education) => (
		<div
			key={education.establishment + education.degree}
			className="preview__education-card"
		>
			<div className="preview__education-card__left">
				<div className="preview__education-card__start_data">
					<p>{education.startOfEducation}</p>
				</div>
				<div className="preview__education-card__end_data">
					<p>{education.endOfEducation}</p>
				</div>
			</div>

			<div className="preview__education-card__right">
				<p className="preview__education-card__right_degree">
					{education.degree}
				</p>
				<p className="preview__education-card__right_establishment">
					{education.establishment}
				</p>
				<p className="preview__education-card__right_location">
					{education.location}
				</p>
			</div>
		</div>
	));

	const skillsList = skills.map((skill) => (
		<div key={skill} className="skills-section-card">
			<div>{skill}</div>
		</div>
	));

	return (
		<div className="preview">
			<div className="preview__main">
				<label htmlFor="inputImgPrev" className="labelForFile">
					<div className="preview__main__avatar">
						<img src={imageUrl} alt="avatar" />
					</div>
				</label>
				<input
					id="inputImgPrev"
					type="file"
					name="inputImgPrev"
					accept=".jpg, .jpeg, .png, .webp, image/jpeg, image/png, image/webp"
					onChange={(e) => {
						if (e.target.files.length > 0) {
							onLoadAvatar(e.target.files[0]);
						}
					}}
					ref={inputImgPrevRef}
				/>
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
			<div className="education-section">
				<h1>Education</h1>
				{educationList}
			</div>
			<div className="skills-section">
				<h1>Skills</h1>
				<div className="skills-section-list">{skillsList}</div>
			</div>
			<div className="extra-section">
				<h1>Additional Information</h1>
				<div className="extra-section-list">{extra}</div>
			</div>
		</div>
	);
}

export default PreviewPanel;

PreviewPanel.propTypes = {
	contacts: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string,
		phone: PropTypes.string,
		speciality: PropTypes.string,
		address: PropTypes.string,
		link: PropTypes.string,
	}).isRequired,

	inputImgPrevRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	works: PropTypes.array,
	educations: PropTypes.array,
	skills: PropTypes.array,
	extra: PropTypes.string,
	onLoadAvatar: PropTypes.func,

	image: PropTypes.oneOfType([PropTypes.instanceOf(File), PropTypes.string])
		.isRequired,
};

import { Card, Timeline } from 'flowbite-react';
import { useLanguage } from '../../context/LanguajeContext';
import { useEffect, useState } from 'react';
import { text } from '../../../i18n/En';
import { text as textEs } from '../../../i18n/Es';

function Experience() {
	const { language } = useLanguage();
	const [textLanguage, setTextLanguage] = useState(text);

	console.log('language', language);
	useEffect(() => {
		if (language === 'es') {
			setTextLanguage(textEs);
		} else {
			setTextLanguage(text);
		}
	}, [language]);
	return (
		<>
			<div className="min-w-min mt-8">
				<Card>
					<Timeline>
						<Timeline.Item>
							<Timeline.Point />
							<Timeline.Content>
								<Timeline.Time>{text.dateNow}</Timeline.Time>
								<Timeline.Title>
									Metaphorce by Forte Innovation Consulting
								</Timeline.Title>
								<Timeline.Body>
									{textLanguage.descriptionNow}
								</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
						<Timeline.Item>
							<Timeline.Point />
							<Timeline.Content>
								<Timeline.Time>{text.dateLast}</Timeline.Time>
								<Timeline.Title>
									Forte Innovation Consulting
								</Timeline.Title>
								<Timeline.Body>
									{textLanguage.descriptionLast}
									unitarias
								</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
					</Timeline>
				</Card>
			</div>
		</>
	);
}

export default Experience;

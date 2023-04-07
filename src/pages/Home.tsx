import Section from '../components/Section';
import ThemeButton from '../components/ThemeButton';
import { text } from '../../i18n/En';
import { text as textEs } from '../../i18n/Es';
import LanguajeButton from '../components/LanguajeButton';
import { useDetectedLenguaje } from '../hooks/useDetectedLenguaje';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguajeContext';

function Home() {
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
			<div className="border border-slate-500 px-5 py-2 flex flex-row justify-around">
				{/* about */}
				<Section>{textLanguage.home}</Section>
				{/* experience*/}
				<Section>{textLanguage.experience}</Section>
				{/* projects */}
				<Section>{textLanguage.projects}</Section>
				{/* theme */}
				<Section>
					<ThemeButton />
				</Section>
				{/* i18n */}
				<Section>
					<LanguajeButton />
				</Section>
			</div>
		</>
	);
}

export default Home;

import Section from '../components/Section';
import ThemeButton from '../components/ThemeButton';
import { text } from '../../i18n/En';
import { text as textEs } from '../../i18n/Es';
import LanguajeButton from '../components/LanguajeButton';
import { useDetectedLenguaje } from '../hooks/useDetectedLenguaje';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguajeContext';
import CardProfile from '../components/UI/CardProfile';
import Experience from '../components/UI/Experience';

function Home() {
	const { language } = useLanguage();
	const [textLanguage, setTextLanguage] = useState(text);
	const [currentCard, setCurrentCard] = useState(1);

	console.log('language', language);
	useEffect(() => {
		if (language === 'es') {
			setTextLanguage(textEs);
		} else {
			setTextLanguage(text);
		}
	}, [language]);

	useEffect(() => {
		console.log('showCard', currentCard);
	}, [currentCard]);

	return (
		<>
			<div className="border border-slate-500 px-5 py-2 flex flex-row justify-around rounded-md">
				{/* about */}
				<Section>
					{' '}
					{
						<button
							onClick={() => {
								if (currentCard === 1) return;
								setCurrentCard(1);
								console.log('showCard', currentCard);
							}}>
							{textLanguage.home}
						</button>
					}
				</Section>
				{/* experience*/}
				<Section>
					{
						<button
							onClick={() => {
								if (currentCard === 2) return;
								setCurrentCard(2);
								console.log('showCard', currentCard);
							}}>
							{textLanguage.experience}
						</button>
					}
				</Section>
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
			{
				<>
					{currentCard === 1 && <CardProfile />}
					{currentCard === 2 && <Experience />}
				</>
			}
		</>
	);
}

export default Home;

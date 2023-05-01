import Section from '../components/Section';
import ThemeButton from '../components/ThemeButton';
import { text } from '../../i18n/En';
import { text as textEs } from '../../i18n/Es';
import LanguajeButton from '../components/LanguajeButton';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguajeContext';
import CardProfile from '../components/UI/CardProfile';
import Experience from '../components/UI/Experience';
import CardProyect from '../components/UI/CardProyect';

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

	return (
		<>
			<main className="h-screen w-screen flex flex-col px-2  md:justify-center lg:justify-center md:items-center lg:items-center pt-4">
				<div className="border border-slate-500 px-5 py-2 flex flex-row justify-around rounded-md ">
					{/* about */}
					<Section>
						{' '}
						{
							<button
								onClick={() => {
									if (currentCard === 1) return;
									setCurrentCard(1);
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
								}}>
								{textLanguage.experience}
							</button>
						}
					</Section>
					{/* projects */}
					<Section>
						{
							<button
								onClick={() => {
									if (currentCard === 3) return;
									setCurrentCard(3);
								}}>
								{textLanguage.projects}
							</button>
						}
					</Section>
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
					<div className="h-full  px-2 flex flex-col items-center ">
						<>
							{currentCard === 1 && <CardProfile />}
							{currentCard === 2 && <Experience />}
							{currentCard === 3 && <CardProyect />}
						</>
					</div>
				}
			</main>
		</>
	);
}

export default Home;

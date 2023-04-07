import { useLanguage } from '../context/LanguajeContext';

function LanguajeButton() {
	const { language, setLanguage } = useLanguage();
	const flag = language === 'es' ? '🇪🇸' : '🇺🇸';

	const toggleLanguage = () => {
		const newLanguage = language === 'es' ? 'en' : 'es';
		setLanguage(newLanguage);
	};

	return (
		<>
			<button onClick={toggleLanguage}>{flag}</button>
		</>
	);
}

export default LanguajeButton;

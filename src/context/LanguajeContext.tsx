import {
	createContext,
	useContext,
	useEffect,
	useState
} from 'react';

interface LanguageContextProps {
	language: string;
	setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
	language: 'en',
	setLanguage: () => {}
});

export function useLanguage(): LanguageContextProps {
	return useContext(LanguageContext);
}
type Props = {
	children: React.ReactNode;
};

export function LanguageProvider({ children }: Props) {
	const [language, setLanguage] = useState<string>('es');

	useEffect(() => {
		const lang = window.localStorage.getItem('language');
		if (lang) {
			setLanguage(lang);
		}
	}, []);

	const value = {
		language,
		setLanguage: (lang: string) => {
			setLanguage(lang);
			window.localStorage.setItem('language', lang);
			document.title = lang === 'es' ? 'Portafolio' : 'Portfolio';
		}
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

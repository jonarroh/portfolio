import { useLayoutEffect, useState } from 'react';

export const useDetectedLenguaje = () => {
	const [language, setLanguage] = useState<string>(() => {
		const lang = window.localStorage.getItem('language');
		return lang ? lang : window.navigator.language;
	});

	useLayoutEffect(() => {
		window.localStorage.setItem('language', language);
	}, [language]);

	return { language, setLanguage };
};

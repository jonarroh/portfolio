import { useState, useLayoutEffect } from 'react';

function ThemeButton() {
	const [themeDark, setThemeDark] = useState<boolean>(() => {
		const theme = window.localStorage.getItem('theme');
		return theme
			? theme === 'dark'
			: window.matchMedia &&
					window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	useLayoutEffect(() => {
		if (themeDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		window.localStorage.setItem(
			'theme',
			themeDark ? 'dark' : 'light'
		);
	}, [themeDark]);

	const handleClick = () => {
		setThemeDark(!themeDark);
	};

	return (
		<>
			<button onClick={handleClick}>{themeDark ? '☀️' : '🌕'}</button>
		</>
	);
}

export default ThemeButton;

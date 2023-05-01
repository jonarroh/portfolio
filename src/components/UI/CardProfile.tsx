import { Card, Dropdown } from 'flowbite-react';
import { useLanguage } from '../../context/LanguajeContext';
import { useEffect, useState } from 'react';
import { text as textEs } from '../../../i18n/Es';
import { text } from '../../../i18n/En';
function CardProfile() {
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
			<div className="w-80 mt-8">
				<Card>
					<div className="flex flex-col items-center pb-10">
						<img
							className="mb-3 h-24 w-24 rounded-full shadow-lg"
							src="https://avatars.githubusercontent.com/u/87589672?v=4"
							alt="Jonathan icon"
						/>
						<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
							Jonarroh
						</h5>
						<span className="text-sm text-gray-500 dark:text-gray-400">
							{textLanguage.job}
						</span>
						<div className="mt-4 flex space-x-3 lg:mt-6">
							<a
								href="#"
								className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								{textLanguage.contact}
							</a>
							<a
								href="https://github.com/jonarroh"
								target="_blank"
								className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
								Github
							</a>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
}

export default CardProfile;

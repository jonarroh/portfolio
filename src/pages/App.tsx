import { LanguageProvider } from '../context/LanguajeContext';
import Home from './Home';

function App() {
	return (
		<LanguageProvider>
			<Home />
		</LanguageProvider>
	);
}

export default App;

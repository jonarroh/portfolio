import Section from '../components/Section';
import ThemeButton from '../components/ThemeButton';

function Home() {
	return (
		<>
			<div className="border border-slate-500 px-5 py-2 flex flex-row justify-around">
				{/* about */}
				<Section>me</Section>
				{/* experience*/}
				<Section>experience</Section>
				{/* projects */}
				<Section>projects</Section>
				{/* theme */}
				<Section>
					<ThemeButton />
				</Section>
			</div>
		</>
	);
}

export default Home;

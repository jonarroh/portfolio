import { Card } from 'flowbite-react';
import proyects from '../../proyects.json';

interface Props {
	name: string;
	description: string;
	url: string;
	tech: string[];
	img: string;
}

function CardProyect() {
	console.log(proyects);
	return (
		<>
			{proyects.map((proyect: Props) => (
				<div
					className="max-w-md mt-4 overflow-scroll"
					key={proyect.name}>
					<Card horizontal={true}>
						<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{proyect.name}
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">
							{proyect.description}
						</p>
					</Card>
				</div>
			))}
		</>
	);
}

export default CardProyect;

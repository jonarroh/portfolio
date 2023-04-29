import { Card, Timeline } from 'flowbite-react';

function Experience() {
	return (
		<>
			<div className="min-w-min mt-8">
				<Card>
					<Timeline>
						<Timeline.Item>
							<Timeline.Point />
							<Timeline.Content>
								<Timeline.Time>Actualmente</Timeline.Time>
								<Timeline.Title>
									Metaphorce by Forte Innovation Consulting
								</Timeline.Title>
								<Timeline.Body>
									Desarrollo usando typescript/javascript
								</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
						<Timeline.Item>
							<Timeline.Point />
							<Timeline.Content>
								<Timeline.Time>junio - septiembre 2022</Timeline.Time>
								<Timeline.Title>
									Forte Innovation Consulting
								</Timeline.Title>
								<Timeline.Body>
									Cree documentacion de los procesos con UML, realice
									interfaces de usuario con Vue, vue-router, vuex, asi
									como tambien me enseñaron a reaclizar pruebas
									unitarias
								</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
					</Timeline>
				</Card>
			</div>
		</>
	);
}

export default Experience;

import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Separator from "../components/Separator";

export default function Experience() {
	const items = [
		{
			date: "2023",
			title: "Amgen",
			subtitle: "Biomedical Engineering Capstone Student",
			description: [
				"Design and prototype of and assistive device that provides stability for patients when performing self-injection at home",
				"In charge of design of stability port and the interaction between the needle guard, especially the insertion canal.",
				"Creo Parametrics was used to create different alternatives for the stability port.",
				"Knowledge of Design, Biomechanics and Physics was used to provide a final design of the product.",
			],
			certificate: null,
		},
		{
			date: "2022",
			title: "BMES",
			subtitle: "Professional Development Activities Leader",
			description: [
				"Responsible for coordinating activities that help develop the “soft skills” of the professional",
				"Organized and coordinated professional panels and informative sessions about the profession of biomedical engineering and the future developments of the profession.",
			],
			certificate: null,
		},
		{
			date: "2022",
			title: "Techno Inventors",
			subtitle: "Instructor of Robotics & Programming",
			description: [
				"Managed robotic projects using programs such as Arduino, Scratch, Blender",
			],
			certificate: "certificate_technoinventors.pdf",
		},
		{
			date: "2018",
			title: "Medlife",
			subtitle: "Volunteer",
			description: [
				"Assisted in helping in the rural areas of Perú to build houses, supply food and help doctors care for their patients.",
				"Put my leadership skills to the test in helping organize projects like painting houses, leading a group in providing medicine, etc.",
			],
			certificate: "certificate_medlife.pdf",
		},
	];
	return (
		<Container fluid>
			{items.map((item, index) => {
				return (
					<div key={index} className="timelines">
						<Card className="timeline">
							<Card.Header>{item.date}</Card.Header>
							<Card.Body>
								<Card.Title>{item.title}</Card.Title>
								<Card.Subtitle>{item.subtitle}</Card.Subtitle>
								<Card.Text></Card.Text>
								<ListGroup variant="flush">
									{item.description.map((desc, i) => {
										return <ListGroup.Item key={i}>{desc}</ListGroup.Item>;
									})}
									{item.certificate ? (
										<Button
											href={
												"portfolio/src/assets/certificates/" + item.certificate
											}
											target="_blank"
										>
											View Certificate
										</Button>
									) : null}
								</ListGroup>
							</Card.Body>
						</Card>
						{index !== items.length - 1 ? <Separator /> : null}
					</div>
				);
			})}
		</Container>
	);
}

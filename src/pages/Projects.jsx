import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import creo from "../assets/images/creo1.png";
import pedal from "../assets/images/pedal1.jpg";
import needle from "../assets/images/sketch2.jpg";

export default function Projects() {
	const items = [
		{
			date: "2023",
			image: needle,
			title: "Stable Needle Guard",
			description:
				"Design and prototype of and assistive device that provides stability for patients when performing self-injection	at home",
		},
		{
			date: "2022",
			image: pedal,
			title: "Driving Pedal Extension",
			description:
				"Design and prototype of an assistive driving device for patients that suffer with a disability in which they can only use their left leg to work the car pedals.",
		},
		{
			date: "2022",
			image: creo,
			title: "Creo Parametrics Project",
			description:
				"Used Creo Parametric to design various models using tools such as Extrude, Drawing Sweep & Assembly.",
		},
	];

	return (
		<Container className="projects">
			<Row className="item-cards">
				{items.map((item, index) => {
					return (
						<Col sm={12} md={6} lg={4} xl={3} key={index}>
							<Card className="item-card">
								<Card.Header>{item.date}</Card.Header>
								<Card.Img variant="top" src={item.image} />
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
									<Accordion>
										<Accordion.Item defaultactivekey="0" eventKey="0">
											<Accordion.Header>More info</Accordion.Header>
											<Accordion.Body>{item.description}</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getProjects } from "../api/rest.api";

export default function Projects() {
	return (
		<Container className="projects">
			<Row className="item-cards">
				{getProjects().map((item, index) => {
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

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import creo1 from "../assets/images/creo1.png";
import creo2 from "../assets/images/creo2.png";
import creo3 from "../assets/images/creo3.png";
import creo4 from "../assets/images/creo4.png";
import creo5 from "../assets/images/creo5.png";
import pedal1 from "../assets/images/pedal1.jpg";
import pedal2 from "../assets/images/pedal2.jpg";
import sketch1 from "../assets/images/sketch1.jpg";
import sketch2 from "../assets/images/sketch2.jpg";
import sketch3 from "../assets/images/sketch3.jpg";

export default function Designs() {
	const items = [
		{
			title: "Stable Needle Guard",
			image: [sketch1, sketch2, sketch3],
		},
		{
			title: "Accessibility Pedal",
			image: [pedal1, pedal2],
		},
		{
			title: "CREO Designs",
			image: [creo1, creo2, creo3, creo4, creo5],
		},
	];

	return (
		<div className="designs">
			{items.map((item, index) => {
				return (
					<Container key={index}>
						<h1>{item.title}</h1>
						<Row className="item-cards">
							{item.image.map((image, key) => {
								return (
									<Col sm={12} md={6} lg={4} xl={3} key={key}>
										<Card className="item-card">
											<Card.Img variant="top" src={image} />
										</Card>
									</Col>
								);
							})}
						</Row>
					</Container>
				);
			})}
		</div>
	);
}

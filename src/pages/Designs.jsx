import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getDesigns } from "../api/rest.api";

export default function Designs() {
	return (
		<div className="designs">
			{getDesigns().map((item, index) => {
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

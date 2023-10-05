import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="home">
			<Carousel variant="dark" interval={3000} className="carousel-slides">
				<Carousel.Item className="slide" onClick={() => navigate("/projects")}>
					<img src={"/portfolio/images/pedal1.jpg"} alt="projects slide" />
					<Carousel.Caption className="caption">
						<h3>Projects</h3>
						<p>See the projects I've worked on</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item
					className="slide"
					onClick={() => navigate("/experience")}
				>
					<img src={"/portfolio/images/sketch1.jpg"} alt="work slide" />
					<Carousel.Caption className="caption">
						<h3>Experience</h3>
						<p>Know my work experience</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="slide" onClick={() => navigate("/designs")}>
					<img src={"/portfolio/images/creo5.png"} alt="research slide" />
					<Carousel.Caption className="caption">
						<h3>Designs</h3>
						<p>Check out my designs</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Button
				variant="primary"
				href="/portfolio/documents/Resume_Graciela_Lebron.pdf"
				target="_blank"
			>
				View Resume
			</Button>
		</div>
	);
}

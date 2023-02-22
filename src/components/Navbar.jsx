import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navigation from "react-bootstrap/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();

	console.log(location.pathname);

	return (
		<>
			<Navigation
				bg="light"
				variant="light"
				expand="md"
				sticky="top"
				collapseOnSelect
			>
				<Container>
					<Navigation.Brand href="#/">Graciela's Portfolio</Navigation.Brand>
					<Navigation.Toggle aria-controls="basic-navbar-nav" />
					<Navigation.Collapse id="basic-navbar-nav">
						<Nav activeKey={"#" + location.pathname} className="me-auto">
							<Nav.Link href="#/projects">Projects</Nav.Link>
							<Nav.Link href="#/designs">Designs</Nav.Link>
							<Nav.Link href="#/experience">Experience</Nav.Link>
						</Nav>
					</Navigation.Collapse>
				</Container>
			</Navigation>
			<Outlet />
		</>
	);
}

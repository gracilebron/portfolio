import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
        <Navbar
            bg="light"
            variant="light"
            fixed="bottom"
            className="justify-content-center"
        >
            <Nav activeKey={''}>
                <Nav.Link
                    href="https://www.linkedin.com/in/graciela-lebron/"
                    target="_blank"
                >
                    LinkedIn
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

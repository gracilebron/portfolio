import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { getCertifications } from '../api/rest.api';

export default function Certifications() {
    return (
        <div className="certifications">
            {getCertifications().map((item, index) => {
                return (
                    <Container key={index}>
                        <h1>{item.title}</h1>
                        <Row className="item-cards">
                            <a href={item.link} target="_blank">
                                <img src={item.image} alt={item.title} />
                            </a>
                        </Row>
                    </Container>
                );
            })}
        </div>
    );
}

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SponsorCarousel from './Components/SponsorCarousel'
import './Home.css';

const Home = () => {
    return ( 
        <Container>
           
            <Row id="carousel-row">
                <Col id="sponsor-carousel">
                    <SponsorCarousel/>
                </Col>
            </Row>
            <Row>
                <Col md={2} id="side-bar">SideBar</Col>
                <Col md={10} id="main-content">Main App Content</Col>
            </Row>
        </Container>
    );
}
 
export default Home;
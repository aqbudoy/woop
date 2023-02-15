import { Nav, Navbar,Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo_wbackground.jpg'

function NavigationBar() {
    return(
        <Navbar id="woop-nav">
            
            <Navbar.Brand className="d-flex align-items-center justify-content-center">
                        <img src={logo}/>
                    </Navbar.Brand>
            <Container>
                <Nav>
                    <LinkContainer to="/scheduling">
                        <Nav.Link>
                            Scheduling
                        </Nav.Link>
                    </LinkContainer>
                    <Nav.Link>
                        Transaction History
                    </Nav.Link>
                    <Nav.Link>
                        Riders
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
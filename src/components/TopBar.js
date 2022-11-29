import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

function TopBar() {
    return (
        <>
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                    <img src="https://mms.businesswire.com/media/20210331005579/en/868438/5/instacart-logo-wordmark-4000x1600-e4f3c6f.jpg" alt="Instacart" style={{ width: "130px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#LogIn">Log In</Nav.Link>
                        <Button variant="success" className="rounded-pill">Sign Up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TopBar
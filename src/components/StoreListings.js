import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function StoreListings() {
    return (
        <>
            <h2>Browse stores in Houston</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }} >
                    <Row>
                        <Col xs=".5" >
                            <Image src="https://media.istockphoto.com/id/1316331605/vector/modern-city-building-exterior-office-center-or-business-house.jpg?b=1&s=170667a&w=0&k=20&c=-6ZMCwIrZyxdjCkVV2HqVSI6VvrUHp_NAAf_NNxE2wk=" roundedCircle style={{width: "50px"}} />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image src="https://media.istockphoto.com/id/1316331605/vector/modern-city-building-exterior-office-center-or-business-house.jpg?b=1&s=170667a&w=0&k=20&c=-6ZMCwIrZyxdjCkVV2HqVSI6VvrUHp_NAAf_NNxE2wk=" roundedCircle style={{width: "50px"}} />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image src="https://media.istockphoto.com/id/1316331605/vector/modern-city-building-exterior-office-center-or-business-house.jpg?b=1&s=170667a&w=0&k=20&c=-6ZMCwIrZyxdjCkVV2HqVSI6VvrUHp_NAAf_NNxE2wk=" roundedCircle style={{width: "50px"}} />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default StoreListings;
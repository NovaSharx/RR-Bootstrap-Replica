import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import heroImage from '../pexels-jane-doan-1128678.jpg'

function HeroSection() {
    return (
        <>
            <Card className="bg-dark text-dark rounded-0 border-0">
                <div style={{ display: "flex", justifyContent: "flex-end", backgroundColor: "#F4F4F4" }}>
                    <Card.Img src={heroImage} alt="Fruit image" className="rounded-0" style={{ width: "800px" }} />
                </div>
                <Card.ImgOverlay style={{ display: "flex", paddingLeft: "150px", alignItems: "center" }}>
                    <div style={{ width: "550px", textAlign: "left" }}>
                        <h1>Order groceries for delivery or pickup today</h1>
                        <p>Whatever you want from local stores, brought right to your door.</p>
                        <form>
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Control type="address" placeholder="Enter address" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}

export default HeroSection
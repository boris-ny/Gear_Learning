import { Component } from "react";
import "./Cards.css";
import {
  Row,
  Col,
  Card,
  Button,
  Container,
  Image,
} from "react-bootstrap";


import { Link } from "react-router-dom";

class Cards extends Component {
  constructor() {
    super();
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    let loggedIn = true;
    let buttonName = "Take Test";
    let path = "/tests";
    if (token == null) {
      loggedIn = false;
      buttonName = "Sign-Up";
      path = "/signup";
    }
    this.state = {
      buttonName,
      path,
      loggedIn,
    };
  }

  render() {
    return (
      <Container id="cards-part" className="cards-part">
        <Row>
          <Col>
            <h2 className="text-center how" style={{ fontSize: "2.2rem" }}>
              How We Work
            </h2>
          </Col>
        </Row>

        
          <Card className="text-center">
            <Card.Img variant="top" src="/assets/onlineTutorials.jpg" />
            <Card.Body>
              <Card.Title className="head-card">Online Tutorials</Card.Title>
              <Card.Text>
                With the online tutorials you learn a lot of thing different
                things. You can imagine you as a driver while watching the
                videos. They teach new rules to you.
              </Card.Text>
            </Card.Body>
            <Card.Link className="mb-2" href="/tutorials">
              <Button variant="secondary" size="lg" className="card-button">
                Videos
              </Button>
            </Card.Link>
          </Card>


        <Card className="text-center ">
          <Card.Img variant="top" src="/assets/practice.jpg" />
          <Card.Body>
            <Card.Title className="head-card">Buy Access</Card.Title>
            <Card.Text>
              When you registered to our page you can find more tests. More
              practice makes you perfect so you can easily pass the police test
              at first try.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Link className="mb-2" href="/signup">
            <Button variant="secondary" size="lg" className="card-button ">
              {this.state.buttonName}
            </Button>
          </Card.Link>
        </Card>

          <Card className="text-center">
            <Card.Img variant="top" src="/assets/drivingTestTips.jpg" />
            <Card.Body>
              <Card.Title className="head-card">Driving Test Tips</Card.Title>
              <Card.Text>
                The pages have been prepared to give you some of the most
                important rules to remember in your theory test. Read and learn
                them for your achievement.
              </Card.Text>
            </Card.Body>
            <Card.Link className="mb-2" href="drivingTips">
              <Button variant="secondary" size="lg" className="card-button">
                Tips
              </Button>
            </Card.Link>
          </Card>
        

        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            md={{ span: 4, offset: 4 }}
            className="mt-5 mb-2"
          >
            <a href="#comment-part">
              {/* later maybe practice-part */}
              <Image
                src="/assets/bottom.png"
                className="go-second d-none d-xl-block"
                roundedCircle
              />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;

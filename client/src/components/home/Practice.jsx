import React from "react";
import "./Practice.css";
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Container fluid id="practice-part" className=" third-part">
          <Row className="justify-content-md-center ">
            <Col xs={12} className="practice-text-first">
              <h1>Take Free Test</h1>
            </Col>
            <Col xs={12} className="text-center mt-1">
              <div>AN EASY WAY TO STUDY BORING STUFF</div>
            </Col>
            <Col
              xs={{ span: 8, offset: 3 }}
              md={{ span: 5, offset: 1 }}
              className="mt-3">
              <Link to="/freetest">
                <Image
                  src="/assets/free-online.jpeg"
                  roundedCircle
                  className="practice-pic"
                  width="70%"
                />
              </Link>
            </Col>
          </Row>
        </Container>
        <Container fluid className="comment-Button mb-5">
          <Row>
            <Col xs={12}>
              <a href="#comment-part">
                <Image
                  src="/assets/bottom.png"
                  className="third-go d-none d-xl-block"
                  roundedCircle
                />
              </a>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Practice;

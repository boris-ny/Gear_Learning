// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ContactPart.css";
import { Container, Col, Row } from "react-bootstrap";

const ContactPart = () => {
  return (
    <Container className="contact-part">
      <Row className="parts">
        <Col xs={{ span: "11", offset: "1" }} sm={5}>
          <Row>
            <Col xs={1}>
              <i className="fas fa-home contacts-i"></i>
            </Col>
            <Col xs={4}>
              <p className="contacts">Mailing Address</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                WebWinners Driving School
                <br />
                Boulevard Théo Lambert 75,
                <br />
                1070 Anderlecht
              </p>
            </Col>
          </Row>
        </Col>

        <Col xs={{ span: "11", offset: "1" }} sm={5}>
          <Row>
            <Col xs={1}>
              <i className="fas fa-comment contacts-i"></i>
            </Col>
            <Col xs={4}>
              <p className="contacts">Social</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <a href="#">
                  <i
                    className="fab fa-linkedin contacts-i"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    class="fab fa-github-square contacts-i"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    class="fab fa-facebook-square contacts-i"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    class="fab fa-google-plus-square contacts-i"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    class="fab fa-twitter-square contacts-i"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="parts">
        <Col xs={{ span: "11", offset: "1" }} sm={5}>
          <Row>
            <Col xs={1}>
              <i className="fas fa-envelope contacts-i"></i>
            </Col>
            <Col xs={4}>
              <p className="contacts">Email</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <a href="/">info@webwinners.be</a>
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: "11", offset: "1" }} sm={5}>
          <Row>
            <Col xs={1}>
              <i className="fas fa-phone contacts-i"></i>
            </Col>
            <Col xs={1}>
              <p className="contacts">Phone</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>(032) 123-0000</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPart;

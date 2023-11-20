// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactPlayer from "react-player";
import "./Tutorials.css";
import { Container, Col, Row } from "react-bootstrap";
import CustomNavbar from "../home/CustomNavbar";
import Footer from "../home/Footer";

const Tutorials = () => {
  return (
    <>
      <CustomNavbar />
      <Container fluid className="main">
        <Row className="video-part">
          <Col xs={10} sm={7} lg={6} xl={3}>
            <p className="header">Driving At Night</p>
            <ReactPlayer
              className="video-section"
              controls
              url="https://youtu.be/_qkuautHKlo"
              width="100%"
            />
          </Col>
          <Col xs={10} sm={7} lg={6} xl={3}>
            <p className="header">Child Seat</p>
            <ReactPlayer
              className="video-section"
              controls
              url="https://youtu.be/Sg5i9YInU64"
              width="100%"
            />
          </Col>
          <Col xs={10} sm={7} lg={6} xl={3}>
            <p className="header">Parallel Parking</p>
            <ReactPlayer
              className="video-section"
              controls
              url="https://youtu.be/https://youtu.be/l4LcfZeS4qw"
              width="100%"
            />
          </Col>
        </Row>
        <Row className="video-part">
          <Col xs={10} sm={7} lg={6} xl={3}>
            <p className="header">Dashboard lights</p>
            <ReactPlayer
              className="video-section"
              controls
              url="https://youtu.be/7FJV2eI2KD0"
              width="100%"
            />
          </Col>
          <Col xs={10} sm={7} lg={6} xl={3}>
            <p className="header">Air Bag and Seat Belts</p>
            <ReactPlayer
              className="video-section"
              controls
              url="https://youtu.be/R4ekbB5EzZM"
              width="100%"
            />
          </Col>
          <Col xs={10} sm={7} lg={6} xl={3}>
            <p className="header">Accidents</p>
            <ReactPlayer
              className="video-section"
              controls
              url="https://youtu.be/Etlmh1PIloA"
              width="100%"
            />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default Tutorials;

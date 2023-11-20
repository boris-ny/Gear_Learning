import { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "../home/CustomNavbar";
import Footer from "../home/Footer";
import "./Tests.css";

const Tests = () => {
  const [fileNames] = useState([
    {
      filename: "Equipment",
      filePath:
        "/assets/tests/Equipment/1/2015_01_27_03_26_0820141205_123346.jpg",
    },
    {
      filename: "Commissioning",
      filePath:
        "/assets/tests/Commissioning/1/2013_02_09_10_41_50IMG_1723.jpeg",
    },
    {
      filename: "Location_on_the_road",
      filePath:
        "/assets/tests/Location_on_the_road/1/2013_04_20_09_58_59najnnfoto--43-.jpg",
    },
  ]);
  return (
    <>
      <CustomNavbar />
      <Container fluid className="tests-part mt-5">
        <Col
          xs={{ span: 9, offset: 1 }}
          sm={{ span: 7, offset: 2 }}
          md={{ span: 4, offset: 4 }}
          className="middle text-center"
        >
          <Row className="extra-part">
            <p className="head-tests">Take More Tests</p>
          </Row>
          <Row className="extra-part">
            <p className="text-tests">
              More practice makes you perfect so you can easily pass the police
              test at first try.
            </p>
          </Row>
        </Col>
        <Row className="image-part p-4">
          {fileNames.map((obj, id) => (
            <Col key={id} xs={8} md={5} lg={3}  className="m-2 p-1">
              <Row className="justify-content-center">
                <Col>
                <p >
                  {" "}
                  {obj.filename} Test
                </p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                <Link
                  to={{
                    pathname: "/freetest",
                    tests: {
                      testName: `${obj.filename}`,
                    },
                  }}
                  onClick={() => localStorage.setItem("testN", obj.filename)}
                >
                  <Image
                    key={id}
                    src={obj.filePath}
                    width="100%"
                    rounded
                  />{" "}
                </Link>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Tests;

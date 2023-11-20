// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResultsNavbar from "./ResultsNavbar";
import Footer from "../home/Footer";
import "./Results.css";

const Result = () => {
  const [results, setResults] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const userAnswer = JSON.parse(window.localStorage.getItem("userAnswer"));
  const test = window.localStorage.getItem("testN");

  //console.log(userAnswer);
  useEffect(() => {
    const request_result = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userAnswer: userAnswer }),
    };
    const fetchResult = () => {
      return fetch(`/api/tests/result/'${test}'`, request_result)
        .then((response) => response.json())
        .then((data) => data);
    };
    console.log(fetchResult(), 1);
    fetchResult().then((el) => {
      setResults(el);
    });

    // Fetch file names
    const fetchFileNames = () => {
      return fetch(`/api/tests/filenames`)
        .then((res) => res.json())
        .then((data) => data);
    };

    fetchFileNames().then((data) => {
      setFileNames(data);
    });
  }, [userAnswer, test]);
  return (
    <>
      <ResultsNavbar />
      <Container fluid className="result-part">
        <Row className="picture-part">
          {fileNames
            .filter((obj) => obj.testName === test)
            .sort(
              (a, b) => Number(a.situationNumber) - Number(b.situationNumber)
            )
            .map((obj, id) =>
              results
                .filter(
                  (el) => Number(el.sequence) === Number(obj.situationNumber)
                  // + window.localStorage.getItem("firstSituationId")
                )
                .map((a) => (
                  <Col
                    key={id}
                    xs={5}
                    md={4}
                    lg={3}
                    xl={2}
                    className="image-border m-1"
                    style={
                      a.result
                        ? { border: "groove 3px green" }
                        : { border: "groove 3px red" }
                    }
                  >
                    <Row>
                      <Col className="text-center">{obj.situationNumber}</Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col>
                        <Link
                          to={{
                            pathname: "/oneResultPage",
                            situation: {
                              situationNo: `${obj.situationNumber}`,
                            },
                          }}
                        >
                          <Image
                            key={id}
                            src={obj.fileRelativePath}
                            width="100%"
                            className="image-border p-2"
                            onClick = {() => localStorage.setItem("sit_num" , obj.situationNumber) }
                          />{" "}
                        </Link>
                      </Col>
                    </Row>
                    <Row className="text-center">
                      <Col>
                        <p> {a.result ? "True" : "False"} </p>
                      </Col>
                    </Row>
                  </Col>
                ))
            )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Result;

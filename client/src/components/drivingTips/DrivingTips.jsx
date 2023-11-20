import React from "react";
import "./DrivingTips.css";
import { Row, Col, Image, Container } from "react-bootstrap";
import CustomNavbar from "../home/CustomNavbar";
import Footer from "../home/Footer";

const DrivingTips = () => {
  return (
    <>
      <CustomNavbar />
      <Container fluid className="first-container" onLoad={window.scroll(0, 0)}>
        <Row>
          <Col>
            <h1 className="text-center header-tips"> Driving Tips </h1>
          </Col>
        </Row>
        <Row className="first-part first">
          <Col className="text-part order2" xs={12} md={6}>
            <p>
              The following pages have been prepared to give you some of the
              most important rules to remember before your theory test. If you
              get very nervous at going to the theory test, then it might be a
              good idea to not tell too many about it so that you don´t put
              extra pressure on yourself. Also you could order the theory test
              early in the morning so you don't have much time to think about
              it. Mostly your first answer is correct, by 80%, so think twice
              before you change your answer. Only if you are 100% sure should
              you change your answer. When you answer the questions and have
              doubts about a single image, then you should not focus only on
              that, because there is a risk that you do not hear the next
              question. But if in doubt, do not not answer – that will count as
              a mistake if there is no answer. You must have at least 20 correct
              images of 25 images to pass the test. Multiple errors in an image
              count as one error, so 20 out of 25 images should be error-free.
              Do not skip the answers because you cannot recall the question
              later. The test at the police is not intended to make you fail,
              but to check that you have the necessary knowledge of the most
              important rules and to see how you will react in the different
              traffic situations. (always remember to be critical and never take
              chances).
            </p>
          </Col>
          <Col className="tips-image-part order1" xs={12} md={5}>
            <Image
              src="/assets/drivingTipsBckgrnd.jpg"
              width="100%"
              height="90%"
            />
          </Col>
        </Row>

        <Row className="first-part second">
          <Col className="tips-image-part order3" xs={12} md={5}>
            <Image src="/assets/danger.jpg" width="100%" height="90%" />
          </Col>
          <Col className="text-part order4" xs={12} md={6}>
            <Row className="position-header">
              <Col>
                <p className="sub-header-tips">
                  Danger, disadvantage and unnecessary disadvantage
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Never endanger yourself or others. You are "at a disadvantage"
                  if you drive in a way that, without being in danger, gets in
                  the way of the other road users and forces them to slow down /
                  increase speed, change location on the road or hold back. For
                  certain manoeuvres, e.g. starting from the curb, changing
                  lanes (all parallel manoeuvres) and in the case of sudden
                  stopping, you can not always avoid getting in the way of
                  others (packed traffic), but you must ensure that the
                  manoeuvre is not to "unnecessary inconvenience". In all
                  manoeuvres when you meet others, you must not be at a
                  disadvantage, whether there is packed traffic or not.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="first-part third">
          <Col className="text-part order6" xs={12} md={6}>
            <Row className="position-header">
              <Col>
                <p className="sub-header-tips">Duties</p>
              </Col>
            </Row>
            <Row className="pl-5">
              <Col>
                <p>
                  Unconditional duty means that you must show that you can and
                  will stop and hold back for traffic coming from both your
                  right and left. You have unconditional duty in the following
                  situations: There are shark teeth, There is a road sign for
                  unconditional duty (triangular board with the point down),
                  There is a stop sign (meaning full stop) Driving into a
                  roundabout, When crossing a sidewalk - a bicycle path - you
                  enter or exit from a garage or private property, Leaving a
                  parking lot, gas station, gravel road or leaving a clearly
                  subordinate road that has a different surface (typically
                  cobblestone). Leaving a pedestrian area, living- and play
                  area. Right hand duty means that you have to wait for all
                  vehicles coming from your right. This applies where the rules
                  for unconditional duty is not present. (These rules do not
                  apply for merging or changing lanes!).
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="tips-image-part order5" xs={12} md={5}>
            <Image src="/assets/trafficDuties.jpeg" width="100%" height="90%" />
          </Col>
        </Row>

        <Row className="first-part fourth">
          <Col className="tips-image-part order7" xs={12} md={5}>
            <Image
              src="/assets/speedRestrictions.jpg"
              width="100%"
              height="90%"
              className="image-hover"
            />
          </Col>
          <Col className="text-part order8" xs={12} md={6}>
            <Row className="position-header">
              <Col>
                <p className="sub-header-tips">Speed Restrictions</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Speed restrictions must always be respected and you must never
                  drive faster than what is the limit on the traffic sign. You
                  must drive 50 km/h in built-up areas when there are good
                  driving conditions. Always lower your speed when you get close
                  to a traffic intersection without traffic lights. Drive about
                  5-10 km/h if you have to comply with your right hand duty, and
                  approx. 30 km/h if the traffic from the side road has
                  unconditional duty from their residential roads. Pay special
                  attention to children, the elderly, the disabled, and school
                  patrols.
                  <br />
                  Inside a built-up area: 50 km/h
                  <br />
                  Outside a built-up area: 80 km/h
                  <br />
                  On a motorway: 120 km/h
                  <br />
                  On an express road/ motor traffic road: 80 km/h
                  <br />
                  Maximum speed for: Bus: 80 km/h Truck: 80 km/h
                  <br />
                  Car with Trailer: 80 km/h Tractor: 30 km/h, some tractors 40
                  km/h
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};
export default DrivingTips;

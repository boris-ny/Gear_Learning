import { Col, Row, Image } from "react-bootstrap";
import "./Pictures.css";

const Picture = () => {
  return (
    <Row>
      <Col xs={5} md={12}>
        <Image src="" className="first-image mt-5" />
      </Col>
      <Row className="driver-card d-none d-md-block">
        <h1 className="card-title">Learn on your schedule</h1>

        {/* <h3 className="">
          Anywhere, anytime.
          <br /> Prepare for your driving licence today!
        </h3> */}
      </Row>
      <a href="#cards-part">
        <Image
          src="../public/assets/bottom.png"
          className="go d-none d-xl-block"
          roundedCircle
        />
      </a>
    </Row>
  );
};

export default Picture;

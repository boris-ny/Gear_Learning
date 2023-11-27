import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ReactPlayer from "react-player";

const Videos = () => {
  const contents = [
    {
      video: "https://youtu.be/wNJLUguG3Cg?si=Jr6ILAw8WtvMMjFX",
      description:
        "In this video we do an Over view of the different Types of Road Traffic Signs, by means of a road traffic signs chart, made available by the department Of Transport, Rwanda.  Be sure to watch the rest of the video series, where we have a detailed look at individual road signs, traffic signals and road markings.",
    },
    {
      video: "https://youtu.be/abVZPyq5YZQ?si=h2ANU-9tUV3Ckh_K",
      description:
        "In this video you will learn all about CONTROL SIGNS, which are regulatory road traffic signs.  We will cover each of the control signs and their meanings, to help you prepare for your K53 Learners License test.  Be sure to watch the rest of the video series, where we have a detailed look at individual road signs, traffic signals and road markings.",
    },
    { video: "https://youtu.be/3hDQ5N8kXGM?si=GR3uBwFa6_p3BZge",description:"Road Signs // Traffic Signs // List of Road Signs and Traffic Symbols // Road Symbols Vocabulary" },
  ];
  return (
    <>
      <Container>
        <h1 className="mt-4">
          <span className="badge text-bg-info">Videos</span>
        </h1>
        {contents.map((content, index) => (
          <Row className="py-5 d-flex justify-content-center" key={index}>
            <Col>
              <ReactPlayer url={content.video} controls={true} />
            </Col>

            <Col className="mt-3 lead fs-4 text-align-justify">
              {content.description}
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Videos;

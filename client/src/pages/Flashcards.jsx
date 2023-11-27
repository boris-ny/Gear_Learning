import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import FlashcardModal from "../components/FlashcardModal";

const Flashcards = () => {
  const [show, setShow] = useState(false);

  const [item, setItem] = useState();
  const handleShow = (item) => {
    setShow(true);
    setItem(item);
  };
  const items = [
    {
      title: "Stop Sign",
      description:
        "The stop sign, easily recognized by its octagonal shape and bold red color, is one of the most universal road signs. When drivers approach this sign, they must stop, regardless of the traffic flow. This means the vehicle should come to a complete halt, with the wheels no longer rolling. After stopping, drivers must yield to any other vehicles or pedestrians in the intersection or roadway before proceeding.",
      image:
        "https://www.hseblog.com/wp-content/uploads/2023/08/Stop-Sign-Road-Signs.webp",
    },
    {
      title: "Speed Limit",
      description:
        "Typically round or rectangular, speed limit signs prominently display a numerical value. This number indicates the maximum permitted speed for that specific stretch of road, ensuring safety and proper traffic flow. Depending on the country, the speed can be represented in miles per hour (mph) or kilometers per hour (km/h). Adhering to these limits is essential not just for safety but also to avoid penalties or fines.",
      image:
        "https://www.hseblog.com/wp-content/uploads/2023/08/Speed-Limit-Road-Signs.webp",
    },
    {
      title: "No Entry",
      description:
        "This sign, a bold red circle with a white horizontal line across its center, is a straightforward command. It signals to drivers that they are not allowed to proceed or enter a particular road or area. Such signs are often found at one-way street exits, closed roads, or certain restricted zones.",
      image:
        "https://www.hseblog.com/wp-content/uploads/2023/08/No-Entry-Road-Signs.webp",
    },
    {
      title: "Zebra Crossing",
      description:
        "Often marked with an icon of a person walking, the pedestrian crossing sign alerts drivers to areas where people may be crossing the road. These areas require drivers to be vigilant and prepared to stop to allow pedestrians to cross safely. They are common near shopping areas, schools, and other places with high foot traffic.",
      image:
        "https://www.hseblog.com/wp-content/uploads/2023/08/Pedestrian-Crossing-Road-Signs.webp",
    },
    {
      title: "No Parking",
      description:
        "A no-parking sign clearly directs drivers that they are not allowed to park their vehicles in that area. These zones could be reserved for specific purposes, such as loading zones or near intersections, crosswalks, or fire hydrants where parked vehicles could obstruct visibility or access. In some cases, the sign may indicate a specific time period during which parking is not allowed.",
      image:
        "https://www.hseblog.com/wp-content/uploads/2023/08/No-Parking-Road-Signs.webp",
    },
    {
      title: "Roundabout",
      description:
        "A sign depicting arrows in a circular pattern, the roundabout sign warns drivers of an approaching circular intersection. In a roundabout, traffic flows in one direction around a central island. Vehicles already in the roundabout generally have the right of way, and those entering must yield to them.",
      image:
        "https://www.hseblog.com/wp-content/uploads/2023/08/Roundabout-Road-Signs.webp",
    },
    {
      title: "No U-Turn",
      description:
        "The No U-Turn sign, recognizable by its U-turn symbol enclosed within a red circle and slashed by a diagonal line, is a directive prohibiting drivers from making a 180-degree turn to reverse their direction on the road. This restriction can be due to various reasons like road layout, traffic flow, or specific hazards, ensuring that vehicles move smoothly and safely without the potential disruption and dangers associated with U-turns.",
      image:
        "https://www.hseblog.com/wp-content/uploads/2023/08/No-U-Turn-Road-Signs.webp",
    },
    {
      title: " Slippery When Wet",
      description:
        "The sign showcasing a car skidding is a cautionary warning for drivers. It indicates that the specific stretch of road may become particularly slippery under wet conditions, such as after rainfall. Drivers encountering this sign are advised to reduce their speed and exercise extra caution, as the risk of losing control of the vehicle increases in such areas.",
      image:
        "https://www.hseblog.com/wp-content/uploads/2023/08/Slippery-When-Wet-Road-Signs.webp",
    },
    {
      title: "Animal Crossing",
      description:
        "The sign that displays an animal image, such as a deer or moose, serves as a cautionary note for drivers. Such signs are typically placed in areas known for frequent animal movements. Drivers should be on the lookout for animals suddenly entering the roadway, especially during dawn or dusk when many animals are most active.",
      image:
        "https://www.hseblog.com/wp-content/uploads/2023/08/Animal-Crossing-Road-Signs.webp",
    },
    {
      title: "No Overtaking/Passing",
      description:
        "This sign, either rectangular with a diagram of cars or round with vehicles enclosed in a red circle, is a directive for drivers. It strictly prohibits them from overtaking or passing vehicles in certain areas. Such zones are often determined based on limited visibility, road configurations, or potential hazards, ensuring safe and orderly traffic flow.",
      image:
        "https://www.hseblog.com/wp-content/uploads/2023/08/No-OvertakingPassing-Road-Signs.webp",
    },
  ];
  return (
    <>
      <Container className="mt-5">
        <h1>
          <span className="badge text-bg-info">FLASH CARDS</span>
        </h1>
      </Container>
      <Container className="mt-5 px-auto mx-auto">
        <Row className="">
          {items.map((item, index) => (
            <Col key={index} lg="3" className="mt-4">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={item.image} loading="lazy"/>
                <Card.Body>
                  <Card.Title className="fs-4">
                    <strong>{item.title}</strong>
                  </Card.Title>
                  <Card.Text
                    style={{
                      height: "120px",
                    }}>
                    {item.description.slice(0, 140) + "..."}
                  </Card.Text>
                  <Button
                    
                    className="btn btn-primary"
                    onClick={() => handleShow(item)}>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
        <FlashcardModal
          show={show}
          Onhide={() => setShow(false)}
          title={item?.title}
          Image={item?.image}
          description={item?.description}
        />
    </>
  );
};

export default Flashcards;

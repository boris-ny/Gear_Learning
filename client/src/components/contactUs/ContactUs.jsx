import React from "react";
import { Row } from "react-bootstrap";
import CustomNavbar from "../home/CustomNavbar";
import ContactPart from "./ContactPart";
import Footer from "../home/Footer";

const ContactUs = () => {
  return (
    <>
      <CustomNavbar />
      <h1 className="header-contact">WebWinners Driving School</h1>
      {/* <Row xs={10} className="justify-content-center m-5">
        <iframe
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Boulevard%20Théo%20Lambert%2075%20Anderlecht&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="1000"
          height="450"
          frameBorder="0"
          title="map"
        ></iframe>
        <a href="https://add-map.org/"></a>
        <script
          type="text/javascript"
          src="https://embedmaps.com/google-maps-authorization/script.js?id=683425cbbe6092d39b7cb7b715999de9c38d5c31"
        ></script>
      </Row> */}
      <ContactPart />
      <Footer />
    </>
  );
};

export default ContactUs;

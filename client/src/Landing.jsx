import { Component } from "react";
import Picture from "./components/home/Picture";
import Cards from "./components/home/Cards";
import Practice from "./components/home/Practice";
import Footer from "./components/home/Footer";
import CustomNavbar from "./components/home/CustomNavbar";
import CommentApp from "./components/comment/CommentApp";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      message: "Loading...",
    };
  }

  componentDidMount() {
    fetch("http://localhost:6000/")
      .then((res) => res.text())
      .then((res) => this.setState({ message: res }));
  }

  render() {
    return (
      <>
        <CustomNavbar />
        <Picture />
        <Cards />
        {/* <Practice /> */}
        <CommentApp />
        <Footer />
      </>
    );
  }
}

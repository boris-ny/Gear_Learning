/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container, Image } from "react-bootstrap";

import CommentList from "./ListComment";
import CommentForm from "./formComment";

//import CommentApp from "./components/comment/CommentApp";

class CommentApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false,
      
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:6000/api/comments")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          comments: res,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments],
    });
  }
  render() {
    return (
      <Container
        fluid
        id="comment-part"
        className="App  shadow mt-5"
        overflow="scroll"
      >
        <Row>
          <Col xs={{ span: 4, offset: 2 }}>
            <h2 className="comment-head" style={{ marginTop: "100px" }}>
              Comments
            </h2>
          </Col>
          <Col xs={{ span: 8, offset: 2 }} className="pt-3 ">
            <h6>Leave your comment or feedback here</h6>
          </Col>
          <Col xs={{ span: 8, offset: 2 }}>
            <CommentForm addComment={this.addComment} />
          </Col>
          <Col xs={{ span: 8, offset: 2 }} className="pt-5 bg-white">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentApp;

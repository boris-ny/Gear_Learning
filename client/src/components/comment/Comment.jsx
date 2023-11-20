// eslint-disable-next-line no-unused-vars
import React from "react";
import userImage from "./user-default.png";
import PropTypes from "prop-types";

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Comment(props) {
  const { name, message, type, time } = props.comment;

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        src={userImage}
        height="48"
        alt={name}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{time}</small>
        <h6 className="mt-0 mb-1 text-muted">{name}</h6>
        Type:- {type}
        <h6> {message}</h6>
      </div>
    </div>
  );
}

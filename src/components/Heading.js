import React from "react";

export const Heading = (props) => {
  return (
    <h2 className="Heading">
      {props.text} <span>{props.span}</span>
    </h2>
  );
};

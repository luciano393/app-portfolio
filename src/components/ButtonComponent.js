import React from "react";

export const ButtonComponent = (props) => {
  return <button className={props.className}>{props.text}</button>;
};

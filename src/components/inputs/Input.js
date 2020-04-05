import React from "react";
import "./scss/inputs.scss";

export function Input({ name, title, ...rest }) {
  return (
    <>
      <input {...rest} placeholder={title}></input>
    </>
  );
}

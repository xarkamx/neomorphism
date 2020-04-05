import React from "react";
import "./scss/inputs.scss";
export function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}

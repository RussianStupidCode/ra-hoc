import React from "react";
import { dateFormat } from "../../../helpers/utils";

const withDatePretty = (Component) => (props) => {
  return <Component date={dateFormat(props.date)}></Component>;
};

export default withDatePretty;

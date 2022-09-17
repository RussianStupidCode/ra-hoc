import React from "react";
import Popular from "./popular";
import New from "./new";

const withView = (Component) => (props) => {
  const { views } = props;

  if (views > 1000) {
    return (
      <Popular>
        <Component {...props} />
      </Popular>
    );
  }

  if (views < 100) {
    return (
      <New>
        <Component {...props} />
      </New>
    );
  }

  return <Component {...props} />;
};

export default withView;

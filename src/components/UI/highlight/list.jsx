import React from "react";
import Video from "./video";
import Article from "./article";
import withView from "./withView";

function List(props) {
  const getComponent = (item) => {
    return item.type === "video" ? withView(Video) : withView(Article);
  };

  return props.list.map((item, index) => {
    const Component = getComponent(item);

    return <Component key={index} {...item} />;
  });
}

export default List;

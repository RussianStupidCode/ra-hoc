import React from "react";
import Video from "./video";

function VideoList(props) {
  return props.list.map((item, index) => (
    <Video url={item.url} key={index} date={item.date} />
  ));
}

export default VideoList;

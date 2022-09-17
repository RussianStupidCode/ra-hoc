import React from "react";
import DateTime from "./dateTime";
import withDatePretty from "./withPretty";

function Video(props) {
  const DateTimePretty = withDatePretty(DateTime);

  return (
    <div className="video">
      <iframe
        title="unique"
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}
export default Video;

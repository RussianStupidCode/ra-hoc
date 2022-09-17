import React from "react";
import { ROUTER_PATH } from "../../../helpers/path";

function Article(props) {
  return (
    <div className="item item-article">
      <h3>
        <a href={ROUTER_PATH.base}>{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}

export default Article;

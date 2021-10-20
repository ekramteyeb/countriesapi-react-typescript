import React from "react";
import { Image } from "react-bootstrap";

import "./style.scss";

type PropType = {
  url : string
}

export default function Flag({ url } : PropType) {
  return <Image className="flag" src={url} fluid />;
}

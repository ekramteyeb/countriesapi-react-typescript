import { Image } from "react-bootstrap";

import "./style.scss";

export default function Flag({ url }) {
  return <Image className="flag" src={url} fluid />;
}

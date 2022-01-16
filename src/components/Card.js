import React from "react";
import { useHover } from "../hooks";
import { Panel } from "./styled";

function Card({ card }) {
  const { author, url } = card;
  const [hoverRef, isActive] = useHover();

  return (
    <Panel img={url} ref={hoverRef} className={isActive ? "active" : ""}>
      <h3>{author}</h3>
    </Panel>
  );
}

export default Card;

import React from "react";
import { Container } from "./styled";

function ExpandingCards({ cards, resourceName, itemComponent: ItemComponent }) {
  return (
    <Container>
      {cards.map((card) => (
        <ItemComponent key={card.id} {...{ [resourceName]: card }} />
      ))}
    </Container>
  );
}

export default ExpandingCards;

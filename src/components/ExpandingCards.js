import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 90vw;
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

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

import * as React from 'react';
import DraggableCard from '../DraggableCard/DraggableCard';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import flow from 'lodash/flow';
import moment from 'moment';
import { IDraggableCardsListProps  } from "./DraggableCardsList.I";

class DraggableCardsList extends React.Component<IDraggableCardsListProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {cards, title, moveCard, clickCard} = this.props;
    return (
      <div className="draggable-cards-list">
        <p className="draggable-cards-list-title">{title}</p>
        {  cards.map((card, i) => (
            <DraggableCard
              key={card.name}
              indicatorColor={card.color}
              index={i}
              id={card.name}
              text={card.name}
              subtitle={card.startDate && card.endDate ? `${moment(card.endDate).diff(moment(card.startDate), 'days') + 1} day(s)` : '0 days'}
              moveCard={moveCard}
              clickCard={() => clickCard(card.id)}
              class={'draggable-card'}
            />
          )
        )}
      </div>
    );
  }
}

export default flow(
  DragDropContext(HTML5Backend)
)(DraggableCardsList);

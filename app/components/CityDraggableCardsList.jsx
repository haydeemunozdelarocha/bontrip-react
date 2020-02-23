import React from 'react';
import DraggableCard from './DraggableCard';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import flow from 'lodash/flow';
import moment from 'moment';

class CityDraggableCardsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('new props in cards!', this.props);
    let { cards } = this.props;

    return (
      <div className="draggable-cards-list">
        <p className="draggable-cards-list-title">{this.props.title}</p>
        {  cards.map((card, i) => (
            <DraggableCard
              key={card.name}
              indicatorColor={card.color}
              index={i}
              id={card.name}
              text={card.name}
              subtitle={card.startDate && card.endDate ? `${moment(card.endDate).diff(moment(card.startDate), 'days') + 1} day(s)` : '0 days'}
              moveCard={this.props.moveCard}
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
)(CityDraggableCardsList);

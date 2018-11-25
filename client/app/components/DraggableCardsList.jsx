import React from 'react';
import { connect } from 'react-redux';
import DraggableCard from './DraggableCard';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import flow from 'lodash/flow';

class DraggableCardsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { cards } = this.props;

    return (
      <div className="draggable-cards-list">
        <p className="draggable-cards-list-title">{this.props.title}</p>
        {  cards.map((card, i) => (
            <DraggableCard
              key={card.name}
              index={i}
              id={card.name}
              text={`${card.country === 'United States' ? `${card.name}, ${card.state}` : `${card.name}, ${card.country}`}`}
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
  connect(null),
  DragDropContext(HTML5Backend)
)(DraggableCardsList);

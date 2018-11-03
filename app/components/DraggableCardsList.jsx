import React from 'react';
import { connect } from 'react-redux';
import DraggableCard from './DraggableCard';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class DraggableCardsList extends React.Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
  }

  moveCard(dragIndex, hoverIndex) {
    this.props.changeOrder(dragIndex, hoverIndex);
  }

  render() {
    return (
      <div className="draggable-cards-list">
        <p className="draggable-cards-list-title" data-tooltip tabIndex="1" title="Fancy word for a beetle." data-position="bottom" data-alignment="center">{this.props.title}</p>
        {  this.props.cards.map((card, i) => (
          <DraggableCard
            index={i}
            id={card.name}
            text={`${card.country === 'United States' ? `${card.name}, ${card.state}` : `${card.name}, ${card.country}`}`}
            moveCard={this.moveCard}
            class={'draggable-card'}
          />
        ))}
      </div>
    );
  }
}

DraggableCardsList = DragDropContext(HTML5Backend)(DraggableCardsList);
export default connect(null)(DraggableCardsList);

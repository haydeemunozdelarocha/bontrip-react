import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import {
  DragSource,
  DropTarget,
  ConnectDropTarget,
  ConnectDragSource,
} from 'react-dnd';

const ItemTypes = {
  CARD: 'card',
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    }
  },
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.moveCard(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex
  }
};

@DropTarget(ItemTypes.CARD, cardTarget, (connect) => ({
  connectDropTarget: connect.dropTarget(),
}))

@DragSource(
  ItemTypes.CARD,
  cardSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)

export default class DraggableCard extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    footerText: PropTypes.string.isRequired,
    moveCard: PropTypes.func.isRequired,
  };

  exapandCard() {
    $(this).addClass('draggable-card-expanded');
  }

  render() {
    const {
      text,
      footerText,
      expandableContent,
      isDragging,
      connectDragSource,
      connectDropTarget,
    } = this.props;

    const opacity = isDragging ? 0 : 1;

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(
          <div className={`draggable-card ${this.props.class}`} style={{opacity}}>
            <span className="draggable-card-content">{text}</span>
            <span className="draggable-card-handle"></span>
            <span className="draggable-card-footer">{footerText}</span>
          </div>)
      )
    )
  }
}

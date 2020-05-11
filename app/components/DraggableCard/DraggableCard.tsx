import * as React from 'react';
import { findDOMNode } from 'react-dom';
import {
  DragSource,
  DropTarget,
  ConnectDropTarget,
  ConnectDragSource,
} from 'react-dnd';
import {IDraggableCardProps} from "./DraggableCard.I";
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

class DraggableCard extends React.Component<IDraggableCardProps> {

  render() {
    const {
      text,
      subtitle,
      indicatorColor,
      footerText,
      isDragging,
      clickCard,
      connectDragSource,
      connectDropTarget,
    } = this.props;

    const opacity = isDragging ? 0 : 1;

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(
          <div className={`draggable-card ${this.props.class}`} style={{opacity}} onClick={clickCard}>
            <span className="draggable-card__indicator" style={{backgroundColor: indicatorColor}}></span>
            <span className="draggable-card__content">{text}</span>
            <span className="draggable-card__subtitle">{subtitle}</span>
            <span className="draggable-card__handle"></span>
            <span className="draggable-card__footer">{footerText}</span>
          </div>)
      )
    )
  }
}

export default DraggableCard;

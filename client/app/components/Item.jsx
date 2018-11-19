import React, { PropTypes } from 'react';

const propTypes = {
  isDragging: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export function Item(props) {
  const { text, isDragging } = props;
  const opacity = isDragging ? 0 : 1;

  return (
    <div className={item-types} style={{opacity }}>
      {text}
    </div>
  );
}

Item.propTypes = propTypes;

export function createItem(item, isDragging) {
  return <Item text={item.text} isDragging={true}/>;
}

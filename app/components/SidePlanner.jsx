import React, { Component } from 'react'
import update from 'immutability-helper'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DayCard from './DayCard'

const style = {
  width: '31%',
  height:'90%',
  right:0,
  backgroundColor:"#eaf9f9",
  padding:'10px',
  position:'absolute'
}


class SidePlanner extends Component {
  constructor(props) {
    super(props)
    this.moveCard = this.moveCard.bind(this)
    this.state = {
      cards: [
        {
          id: 1,
          text: 'Write a cool JS library',
        },
        {
          id: 2,
          text: 'Make it generic enough',
        },
        {
          id: 3,
          text: 'Write README',
        },
        {
          id: 4,
          text: 'Create some examples',
        },
        {
          id: 5,
          text:
            'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
          id: 6,
          text: '???',
        },
        {
          id: 7,
          text: 'PROFIT',
        },
      ],
    }
  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }

  render() {
    const { cards } = this.state

    return (
      <div style={style}>
      <select>
      <option value="">Select Day</option>
      </select>
        {cards.map((card, i) => (
          <DayCard
            key={card.id}
            index={i}
            id={card.id}
            text={card.text}
            moveCard={this.moveCard}
          />
        ))}
      </div>
    )
  }
}
export default DragDropContext(HTML5Backend)(SidePlanner);

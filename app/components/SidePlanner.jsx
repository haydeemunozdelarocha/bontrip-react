import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DayCard from './DayCard';
var moment = require('moment');
var GetPlaces = require('GetPlaces');

const style = {
  width: '31%',
  height:'90%',
  right:0,
  backgroundColor:"#eaf9f9",
  padding:'10px',
  position:'absolute',
  zIndex:20
}

var SidePlanner = React.createClass({

  getInitialState: function(){
    this.moveCard = this.moveCard.bind(this);
    return {
            tripId:"57bf7be55f67aef8082e7d91",
            userId:"57aa78b2caf5ca16154f457c"
        }
  },
  moveCard:function(dragIndex, hoverIndex) {
    console.log(dragIndex);
    console.log(hoverIndex);
    this.props.changeOrder(dragIndex, hoverIndex);
  },
    buildOptions:function() {
    var dates =[];
    var start = moment(new Date(this.props.start));
    var end = moment(new Date(this.props.end));

    for (var m = moment(start); m.diff(end, 'days') <= 0; m.add(1, 'days')) {
      dates.push(m.format('MM-DD-YYYY'));
    }
        return dates;
    },
  render:function() {
    const { cards } = this.props;
    const dates = this.buildOptions();
    var checkCards = ()=>{if(cards.length == 0){
        return <p>You have no places scheduled yet, click on the map markers and add to this day.</p>
      }};
    var count = 0;
    return (
      <div style={style}>
      <select onChange={this.props.select} value={this.state.date}>
      {dates.map((date,j)=>(
        <option key={date} value={moment(date).format("MM-DD-YYYY")}>{moment(date).format("ddd DD/MM/YY")}</option>
        ))}
      </select>
        {checkCards()}
        {cards.map((card, i) => (
          <DayCard
            index={i}
            id={card._id}
            text={card.name}
            moveCard={this.moveCard}
          />
        ))}
      </div>
    )
  }
})
export default DragDropContext(HTML5Backend)(SidePlanner);

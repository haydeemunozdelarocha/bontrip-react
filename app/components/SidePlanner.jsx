import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DayCard from './DayCard';
import 'Sass';

var moment = require('moment');
var GetPlaces = require('GetPlaces');


var SidePlanner = React.createClass({

  getInitialState: function(){
    this.moveCard = this.moveCard.bind(this);
    return {
            tripId:this.props.tripId,
            userId:this.props.userId
        }
  },
  moveCard:function(dragIndex, hoverIndex) {
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
      <div id="side-planner-container">
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

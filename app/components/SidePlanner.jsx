import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DayCard from './DayCard';
import 'Sass';
var actions = require('Actions');

var moment = require('moment');
var GetPlaces = require('GetPlaces');


var SidePlanner = React.createClass({

  getInitialState: function(){

    this.moveCard = this.moveCard.bind(this);
    return {
            tripId:this.props.tripId,
            userId:this.props.userId,
            date:this.props.date,
            planner:false,
            start:this.props.start,
            end:this.props.end,
            selectedDates:this.props.selectedDates
   }
  },
  moveCard:function(dragIndex, hoverIndex) {
    this.props.changeOrder(dragIndex, hoverIndex);
  },
    buildOptions:function() {
    var dates =[];
    var start = this.state.start;
    var end = this.state.end;

    if(start !== end){
    for (var m = moment(start); m.diff(new Date(end), 'days') <= 0; m.add(1, 'days')) {
      dates.push(m.format('MM-DD-YYYY'));
    }
    } else {
      dates.push(start);
    }
    return dates;
    },
      showPlanner:function(){
    if(this.state.planner){
    $( "#side-planner-main-container" ).animate({
        marginRight: '-25%'
    }, 300);
    this.setState({
      planner:false
    })
    } else {
      $( "#side-planner-main-container" ).animate({
          marginRight: '0'
      }, 300);
    this.setState({
      planner:true
    })
    }
  },
  render:function() {
    const { cards } = this.props;
    const dates = this.buildOptions();
    var dateSelector = ()=>{
      if(this.state.selectedDates){
        return  <select onChange={this.props.select} value={this.state.date}>
          {dates.map((date,j)=>(
            <option key={date} value={moment(date).format("MM-DD-YYYY")}>{moment(date).format("ddd DD/MM/YY")}</option>
            ))}
          </select>;
        } else {
          return <div ref="dateSelector"><p>Select dates:</p><input type="date" ref="date1" onChange={this.props.getStart}/><input type="date" ref="date2" onChange={this.props.getEnd}/></div>
        }
    };
    var checkCards = ()=>{
      if(cards.length == 0){
        return <p>You have no places scheduled yet, click on the map markers and add to this day.</p>
      } };

    var count = 0;
    return (
    <div id="side-planner-main-container">
      <div id="side-planner-container">
        {dateSelector()}
        {checkCards()}
         {       cards.map((card, i) => (
          <DayCard
            index={i}
            id={card._id}
            text={card.name}
            moveCard={this.moveCard}
          />
        ))}
      </div>
       <div id="side-planner-tab">
      <img onClick={this.showPlanner} id="planner-tab-icon" src="/images/planner.png" />
      </div>
      </div>
    )
  }
})
export default DragDropContext(HTML5Backend)(SidePlanner);

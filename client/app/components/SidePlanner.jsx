import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DraggableCard from './DraggableCard';
var $= require('jquery');
var {connect} = require('react-redux');

var moment = require('moment');


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
    $( ".side-planner-main-container" ).toggleClass("open-planner", 300);

  },
  render:function() {
    const cards = this.props.state.trip.likedPlaces;
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
      <div id="side-planner-container">
        {dateSelector()}
        {checkCards()}
         {       cards.map((card, i) => (
          <DraggableCard
            index={i}
            id={card._id}
            text={card.name}
            moveCard={this.moveCard}
            class={"day-card"}
          />
        ))}
      </div>

    )
  }
})

const mapStateToProps = (state) => {
  return {
  state: state
}};
var SidePlanner = DragDropContext(HTML5Backend)(SidePlanner);
export default connect(mapStateToProps)(SidePlanner);

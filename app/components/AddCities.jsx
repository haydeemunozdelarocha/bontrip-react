import NewTripForm from './NewTripForm';

var React = require('react');
var {connect} = require('react-redux');
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
var actions = require('../actions/actions');
import DraggableCard from './DraggableCard';
var moment = require('moment');

export var AddCities = React.createClass({
  getInitialState: function(){
    this.moveCard = this.moveCard.bind(this);
    var cities = this.props.state.trip.selectedTrip.cities;

    return {
      date: moment(new Date()).format('YYYY-MM-DD'),
      start:null,
      end:null
    }
  },
    getStart:function(e){
    var {dispatch} = this.props;
    var date = moment(e.target.value).format('MM-DD-YYYY');
      this.setState({
        start:date
      })
    dispatch(actions.addStart(null,date));

  },
  getEnd:function(e){
    var {dispatch} = this.props;
    var date = moment(e.target.value).format('MM-DD-YYYY');
    if(this.state.start < date){
      this.setState({
        end:date
      })
    dispatch(actions.addEnd(null,date));
  }else {
    this.refs.date2.value = '';
    alert("Please select a start date before the end date.")
  }
  },
  moveCard:function(dragIndex, hoverIndex) {
    this.props.changeOrder(dragIndex, hoverIndex);
  },
  render: function () {
      return (
      <div id="add-cities-container">
        <NewTripForm/>
        <div className="city-cards">
        <p data-tooltip tabIndex="1" title="Fancy word for a beetle." data-position="bottom" data-alignment="center">{}</p>
          {    this.props.state.trip.selectedTrip.cities.map((card, i) => (
         <DraggableCard
            index={i}
            id={card.name}
            text={(card.country === "United States") ? card.name+", "+card.state : card.name+", "+card.country}
            moveCard={this.moveCard}
            class={"city-card"}
          />
        ))}
        </div>
      </div>
    );

  }
});

const mapStateToProps = (state) => {
  return {
  state: state
}};

AddCities = DragDropContext(HTML5Backend)(AddCities);
export default connect(mapStateToProps)(AddCities);

var React = require('react');
var Navigation = require('Navigation');
var ExploreCard = require('ExploreCard');
var GetPlaces = require('GetPlaces');


var Filters = React.createClass({

    getInitialState: function (){
    return {
      searchText:''
    };
  },
  render: function () {
var count = 1;
var searchStyle  = {borderRadius:'25px'};
var cityStyle  = {borderRadius:'25px'};
if(this.props.tripSelected){
  searchStyle.visibility = 'hidden';
  searchStyle.display = 'none';
} else {
  cityStyle.visibility = 'hidden';
  searchStyle.display = 'none';
}
      return (
      <div className="row" style={{marginTop:'2%'}}>
      <form>
      <div className="large-4 columns">
       <input type="text" placeholder="Search" style={searchStyle}/>
       </div>
       <div className="large-4 columns">
         <select id="city" style={cityStyle}>
         <option>Select City</option>
          {this.props.cities.map((x) => { count++; return <option id ='city{count}'>{x}</option>;})}
          </select>
          </div>
          <div className="large-4 columns">
            <select id="searchby" style={{borderRadius:'25px'}}>
              <option value="">Search By</option>
              <option value="all">All</option>
              <option value="recommended">Recommended</option>
            </select>
            </div>
       </form>
      </div>
    );

  }
});

module.exports = Filters;

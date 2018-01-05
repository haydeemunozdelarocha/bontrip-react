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
        cityStyle.display = 'none';
      }
      return (
      <div className="row" style={{marginTop:'2%'}}>
      <form>
       <div className="large-4 columns">
         <select onChange={this.props.changeCity} value={this.props.selectedCity} id="city" style={cityStyle}>
         <option>Select City</option>
          {this.props.cities.map((x) => {
            count++;
              return <option key={x}  id ='city{count}'>{x}</option>
            })}
          </select>
          </div>
          <div className="large-4 columns">
            <select id="searchby" style={{borderRadius:'25px'}} value={this.props.selectedCategory} onChange={this.props.changeCategory}>
              <option value="">Select Category</option>
              <option value="4d4b7104d754a06370d81259">Arts & Entertainment</option>
              <option value="4d4b7105d754a06374d81259">Food</option>
              <option value="4d4b7105d754a06376d81259">Nightlife</option>
              <option value="4d4b7105d754a06377d81259">Outdoors</option>
              <option value="4d4b7105d754a06378d81259">Shopping</option>
            </select>
            </div>
       </form>
      </div>
    );

  }
});

module.exports = Filters;

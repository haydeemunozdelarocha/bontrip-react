var React = require('react');
var Navigation = require('Navigation');
var ExploreCard = require('ExploreCard');
var GetPlaces = require('GetPlaces');


var Filters = React.createClass({

    getInitialState: function (){
      console.log('getting initial state');
    return {
      searchText:''
    };
  },
  render: function () {

      return (
      <div className="row">
      <form>
      <div className="large-4 columns">
       <input type="text" placeholder="Search"/>
       </div>
       <div className="large-4 columns">
         <select>
            <option value="">Cities</option>
            <option value="starbuck">Starbuck</option>
            <option value="hotdog">Hot Dog</option>
            <option value="apollo">Apollo</option>
          </select>
          </div>
          <div className="large-4 columns">
            <select>
              <option value="">Search By</option>
              <option value="redwing">All</option>
              <option value="narcho">Recommended</option>
            </select>
            </div>
       </form>
      </div>
    );

  }
});

module.exports = Filters;

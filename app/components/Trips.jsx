var React = require('react');
var Navigation = require('Navigation');
var TripCard = require('TripCard');
var GetTrips = require('GetTrips');



var Trips = React.createClass({

    getInitialState: function (){
      console.log('getting initial state')
    return {
      loading: true,
      trips:{}
     }
  },
  componentDidMount: function() {
    console.log(this.state.loading);
    if(this.state.loading){
    this.retrieveTrips();
    }
  },
  retrieveTrips: function (){
    console.log('getting trips')

    var user= {
    _id: {
        $oid: "57aa78b2caf5ca16154f457c"
    },
    salt: "acc3840aafc6b2bb25725aa57b676d47107ed931798b3c84b2fb9d34608c9c6b",
    hash: "5efd884a4ce6528953cdc0dc41092fb86c5af262ad682e409566cbc519b9acd92191008b6f6cccf87ac40e0f6f06f7b69665046b0281c7177dc0e081bd9a34a3e495199c49981d52d03c600445c84c8a99d5e5a7726724f9d05416cc7a9d15921e04d232b14089ade2dc6e7e68bca5f92b420964c2e35adde062aca18d14209731f772185ccc857a9aaf5e62b578e19b8d84bde7426fd2c08ee2e862240d5079c9194d0e5165cb9eafc39f5b9bb87f756f55fb2f61f74c1433bc2386567b7875dd370f673ecedc8e785f5092a62274cc6ad19cc62d07eaf70738f210075b117087c057df6d490c4b5cf65e18e49b6ce96a7fd15556c2c66fa0a198456a8fb4eb4a45f6aee3e520fbd3bb362cdcc6ab7165a496a3343d77db8e8d12b62461c5359fcc5333477a1647420347d2ce76b39b64a84e82d8aedb4ad2afdd411a54086b4dc6676cc2ecbcce34cc082ac2adae431ada69c24752f341963c6cf546a8662b055ebdd0c80638369371b51b87509c73598a5d25e6dc4756e4d8114ce65a26d3ede59c45b2f062ecb0f07696d524b2294907386512fdccac476d13a5dd602157f289b111156431603ead22be3ca6fe9e696c925b9af00fdea2615a14414e131751eab1a7c92a5899e84bcc781ae88c14102f9c337bad79f10ebe7157f03d78332c452425e8b72d13ebd0eda0c65a5038df195b0b4c83daf4f6f943571cae631f",
    username: "hi@you.com",
    __v: 0,
    tripId: "57aa78c3caf5ca16154f457d"
};
    var that = this;
    GetTrips.getTrips(user._id.$oid).then(function(res){
      that.setState({
        trips:res.data,
        loading:false,
        activeTrip:""
      })
    }, function(errorMessage){
      that.setState({
        loading:true
      })
      return   alert(errorMessage);
    })
  },
  render: function () {
      return (
      <div>
      <Navigation />
      <div className="row">
            {this.state.trips && Object.keys(this.state.trips).map(function(k, name) {
            return <TripCard name={this.state.trips[k].name} tripId={this.state.trips[k]._id} key={this.state.trips[k]._id}/>
        }.bind(this))}
      </div>
      </div>
    );

  }
});

module.exports = Trips;

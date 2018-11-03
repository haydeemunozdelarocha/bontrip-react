/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 959);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/moment/moment.js'\n    at Error (native)");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/react-redux/es/index.js'\n    at Error (native)");

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(134);

// const PATH = 'http://localhost:8080/';
var PATH = 'https://mighty-beach-23452.herokuapp.com/';
var CHECK_LOGIN = 'api/login/user';
var LOGIN = 'api/login';
var LOGOUT = 'api/login/logout';
var SIGNUP = 'api/login/signup';

module.exports = {
  checkUser: function checkUser() {
    console.log('checking user');
    var requestUrl = '' + PATH + ('' + CHECK_LOGIN);

    return axios.request({
      method: 'get',
      url: requestUrl
    }).then(function (res, err) {
      if (res) {
        console.log(res);
        return res;
      } else {
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },
  loginUser: function loginUser(username, password) {
    var requestUrl = '' + PATH + ('' + LOGIN);

    return axios.request({
      method: 'post',
      url: requestUrl,
      data: {
        username: username,
        password: password
      }
    }).then(function (res, err) {
      if (res) {
        console.log(res);
        return res;
      } else {
        console.log(err);
        return err;
      }
    }, function (res) {
      console.log(res);
      throw new Error('error');
    });
  },
  logoutUser: function logoutUser(username) {
    var requestUrl = '' + PATH + ('' + LOGOUT);

    return axios.request({
      method: 'get',
      url: requestUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        username: username
      }
    }).then(function (res, err) {
      if (res) {
        console.log(res);
        return res;
      } else {
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },
  signupUser: function signupUser(username, password) {
    var requestUrl = '' + PATH + ('' + SIGNUP);

    return axios.request({
      method: 'post',
      url: requestUrl,
      data: {
        username: username,
        password: password
      }
    }).then(function (res, err) {
      if (res) {
        console.log(res);
        return res;
      } else {
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  }
};

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/axios/index.js'\n    at Error (native)");

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/react-async-script-loader/lib/index.js'\n    at Error (native)");

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/react-dnd/lib/index.js'\n    at Error (native)");

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/react-dom/index.js'\n    at Error (native)");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/react/react.js'\n    at Error (native)");

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(179);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(43);

var _reactRedux = __webpack_require__(13);

var _configureStore = __webpack_require__(476);

var configureStore = _interopRequireWildcard(_configureStore);

var _Trips = __webpack_require__(474);

var _Trips2 = _interopRequireDefault(_Trips);

var _Home = __webpack_require__(458);

var _Home2 = _interopRequireDefault(_Home);

var _Explore = __webpack_require__(205);

var _Explore2 = _interopRequireDefault(_Explore);

var _Login = __webpack_require__(460);

var _Login2 = _interopRequireDefault(_Login);

var _Logout = __webpack_require__(461);

var _Logout2 = _interopRequireDefault(_Logout);

var _Signup = __webpack_require__(471);

var _Signup2 = _interopRequireDefault(_Signup);

var _Planner = __webpack_require__(467);

var _Planner2 = _interopRequireDefault(_Planner);

var _AddTrip = __webpack_require__(453);

var _AddTrip2 = _interopRequireDefault(_AddTrip);

var _NewPlace = __webpack_require__(465);

var _NewPlace2 = _interopRequireDefault(_NewPlace);

__webpack_require__(958);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = configureStore.loadState();
// export const store = createStore(root);

store.subscribe(function () {
  configureStore.saveState(store.getState());
});

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/trips', component: _Trips2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _Signup2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/explore', component: _Explore2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/planner', component: _Planner2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/newtrip', component: _AddTrip2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/newplace', component: _NewPlace2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/logout', component: _Logout2.default })
  )
), document.getElementById('app'));

exports.store = store;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(52);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(179);

var _reactDnd = __webpack_require__(177);

var _ItemTypes = __webpack_require__(459);

var _ItemTypes2 = _interopRequireDefault(_ItemTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cardSource = {
  beginDrag: function beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

var cardTarget = {
  hover: function hover(props, monitor, component) {
    var dragIndex = monitor.getItem().index;
    var hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    var hoverBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();

    // Get vertical middle
    var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    var clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    var hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

var DraggableCard = (_dec = (0, _reactDnd.DropTarget)(_ItemTypes2.default.CARD, cardTarget, function (connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}), _dec2 = (0, _reactDnd.DragSource)(_ItemTypes2.default.CARD, cardSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  _inherits(DraggableCard, _Component);

  function DraggableCard() {
    _classCallCheck(this, DraggableCard);

    return _possibleConstructorReturn(this, (DraggableCard.__proto__ || Object.getPrototypeOf(DraggableCard)).apply(this, arguments));
  }

  _createClass(DraggableCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          isDragging = _props.isDragging,
          connectDragSource = _props.connectDragSource,
          connectDropTarget = _props.connectDropTarget;

      var opacity = isDragging ? 0 : 1;

      return connectDragSource(connectDropTarget(_react2.default.createElement(
        'div',
        { className: 'draggable-card ' + this.props.class, style: { opacity: opacity } },
        _react2.default.createElement(
          'span',
          { className: 'draggable-card-content' },
          text
        ),
        _react2.default.createElement('span', { className: 'draggable-card-handle' })
      )));
    }
  }]);

  return DraggableCard;
}(_react.Component), _class2.propTypes = {
  connectDragSource: _propTypes2.default.func.isRequired,
  connectDropTarget: _propTypes2.default.func.isRequired,
  index: _propTypes2.default.number.isRequired,
  isDragging: _propTypes2.default.bool.isRequired,
  id: _propTypes2.default.any.isRequired,
  text: _propTypes2.default.string.isRequired,
  moveCard: _propTypes2.default.func.isRequired
}, _temp)) || _class) || _class);
exports.default = DraggableCard;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Explore = undefined;

var _ExploreCard = __webpack_require__(457);

var _ExploreCard2 = _interopRequireDefault(_ExploreCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(2);
var GetPlaces = __webpack_require__(97);

var _require = __webpack_require__(13),
    connect = _require.connect;

var $ = __webpack_require__(87);
var SideExplore = __webpack_require__(469);
var Explore = exports.Explore = React.createClass({
  displayName: 'Explore',


  getInitialState: function getInitialState() {

    return {
      venue: {},
      places: this.props.places,
      city: this.props.city,
      cities: this.props.cities,
      category: '',
      showSide: 'none',
      explore: false };
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    if (this.state.city != prevState.city || this.state.category != prevState.category) {
      this.setState({ loading: 'visible' });
      this.props.retrievePlaces(this.state.category);
    }
  },
  viewPlace: function viewPlace(place_id) {
    var that = this;
    GetPlaces.viewPlace(place_id).then(function (res) {

      that.setState({
        venue: res.data
      });
      that.setState({
        showSide: 'block'
      });
    }, function (errorMessage) {
      return console.log(errorMessage);
    });
  },
  handleSideClose: function handleSideClose() {
    this.setState({ showSide: "none" });
  },
  changeCategory: function changeCategory(event) {
    this.setState({
      category: event.target.value,
      places: []
    });
  },
  showExplore: function showExplore() {
    console.log('show explore');
    $(".explore-tab-container").toggleClass("open-explore", 300);
  },
  render: function render() {

    if (this.props.state.trip.selectedTrip.id) {
      var trip = true;
    } else {
      var trip = false;
    }
    if (this.props.loading === 'hidden') {
      var displayLoading = 'none';
    } else {
      var displayLoading = 'flex';
    }
    if (this.props.open) {
      var show = 'visible';
      var display = 'block';
    } else {
      var show = 'hidden';
      var display = 'none';
    }
    return React.createElement(
      'div',
      { id: 'explore-content' },
      React.createElement(
        'div',
        { className: 'filters' },
        React.createElement(
          'select',
          { id: 'searchby', style: { width: '90%' }, value: this.state.category, onChange: this.changeCategory },
          React.createElement(
            'option',
            { value: '' },
            'Select Category'
          ),
          React.createElement(
            'option',
            { value: '4d4b7104d754a06370d81259' },
            'Arts & Entertainment'
          ),
          React.createElement(
            'option',
            { value: '4d4b7105d754a06374d81259' },
            'Food'
          ),
          React.createElement(
            'option',
            { value: '4d4b7105d754a06376d81259' },
            'Nightlife'
          ),
          React.createElement(
            'option',
            { value: '4d4b7105d754a06377d81259' },
            'Outdoors'
          ),
          React.createElement(
            'option',
            { value: '4d4b7105d754a06378d81259' },
            'Shopping'
          )
        )
      ),
      React.createElement(SideExplore, { handleClose: this.handleSideClose, display: this.state.showSide, name: this.state.venue.name, description: this.state.venue.description, rating: this.state.venue.rating, photos: this.state.venue.photos }),
      React.createElement(
        'div',
        { className: 'row', id: 'explore-container' },
        React.createElement(
          'div',
          { id: 'explore-loading-container', style: { visibility: this.props.loading, display: displayLoading } },
          React.createElement('i', { className: 'fa fa-spinner fa-spin', ref: 'spinner', 'aria-hidden': 'true' })
        ),
        this.props.places && Object.keys(this.props.places).map(function (k, name) {
          return React.createElement(_ExploreCard2.default, { fetchPlaces: this.props.fetchPlaces, viewPlace: this.viewPlace, name: this.props.places[k].venue.name, lat: this.props.places[k].venue.location.lat, lng: this.props.places[k].venue.location.lng, category: this.props.places[k].venue.categories[0].name, rating: this.props.places[k].venue.rating, photo: this.props.places[k].photo, place_id: this.props.places[k].venue.id, key: this.props.places[k].venue.id });
        }.bind(this))
      )
    );
  }
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = connect(mapStateToProps)(Explore);

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidepanel = function (_React$Component) {
  _inherits(Sidepanel, _React$Component);

  function Sidepanel(props) {
    _classCallCheck(this, Sidepanel);

    var _this2 = _possibleConstructorReturn(this, (Sidepanel.__proto__ || Object.getPrototypeOf(Sidepanel)).call(this, props));

    _this2.state = {
      open: false
    };
    return _this2;
  }

  _createClass(Sidepanel, [{
    key: 'togglePanel',
    value: function togglePanel() {
      var _this = this;
      console.log('toggling');
      _this.setState({ open: !_this.state.open });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'sidepanel sidepanel-' + this.props.orientation + ' ' + (this.state.open ? 'is-open' : 'is-closed') },
        _react2.default.createElement(
          'div',
          { className: 'sidepanel-content' },
          this.props.children
        ),
        _react2.default.createElement(
          'div',
          { className: 'sidepanel-tab', onClick: this.togglePanel.bind(this) },
          _react2.default.createElement('img', { className: 'sidepanel-tab-image', src: this.props.image })
        )
      );
    }
  }]);

  return Sidepanel;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null)(Sidepanel);

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCityObject = parseCityObject;
exports.saveCity = saveCity;
exports.removeCity = removeCity;
exports.reverseGeoCode = reverseGeoCode;
exports.navigateTo = navigateTo;

var _actions = __webpack_require__(31);

var actions = _interopRequireWildcard(_actions);

var _reactRouter = __webpack_require__(43);

var _app = __webpack_require__(203);

var _promise = __webpack_require__(392);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function parseCityObject(cityObject) {
  var city = {};
  var address_components = cityObject.address_components;
  address_components.forEach(function (component) {
    if (isAddressComponentValid(component)) {
      var componentType = getComponentType(component);
      city[componentType] = component.long_name;
    }
  });
  city.coordinates = cityObject.geometry.location;
  return city;
}

function saveCity(cityInfo, callback) {
  console.log('saving city', callback);
  var is_formatted = 'address_components' in cityInfo;
  var city = is_formatted ? parseCityObject(cityInfo) : cityInfo;
  console.log(city);
  _app.store.dispatch(actions.addCity(null, city));
  callback();
}

function removeCity(cityInfo, callback) {
  console.log('removing city');
  // TODO: fix is not removing city
  var city = cityInfo.name;
  _app.store.dispatch(actions.removeCity(null, city));
  callback();
}

function reverseGeoCode(googleLocation) {
  var geocoder = new google.maps.Geocoder();
  var latlng = { lat: parseFloat(googleLocation.lat()), lng: parseFloat(googleLocation.lng()) };

  return new _promise2.default(function (resolve, reject) {
    geocoder.geocode({ 'location': latlng }, function (results, status) {
      if (status === 'OK') {
        if (results[0]) {
          var cityNameresults = results.filter(function (result) {
            return result.types.includes('locality') && result.types.includes('political');
          });
          console.log(cityNameresults);
          resolve(cityNameresults[0]);
        } else {
          window.alert('No results found');
          reject();
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
        reject();
      }
    });
  });
}

function navigateTo(location) {
  console.log('navigating');
  _reactRouter.browserHistory.push(location);
}

function getComponentType(address_component) {
  switch (address_component.types[0]) {
    case 'locality':
    case 'administrative_area_level_3':
      return 'name';
    case 'country':
      return 'country';
    case 'administrative_area_level_1':
      return 'state';
  }
}

function isAddressComponentValid(address_component) {
  return address_component.long_name.length > 0;
}

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/app/actions/actions.jsx'\n    at Error (native)");

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/promise/index.js'\n    at Error (native)");

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/react-dnd-html5-backend/lib/index.js'\n    at Error (native)");

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/react-router/lib/index.js'\n    at Error (native)");

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/babel-polyfill/lib/index.js'\n    at Error (native)");

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

module.exports = {"home":["/images/paris.jpg","/images/sardinia.jpg","/images/iceland.jpg","/images/madrid.jpg","/images/tokyo.jpg","/images/patagonia.jpg"]}

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(134);

// const PATH = 'http://localhost:8080/';
var PATH = 'https://mighty-beach-23452.herokuapp.com/';
var GET_TRIPS = 'api/trips/';
var SAVE_TRIP = 'api/trips';
var SELECT_TRIP = 'api/trips/select/';
var DELETE_TRIP = 'api/trips/delete/';

module.exports = {
  getTrips: function getTrips(user_id) {
    var requestUrl = '' + PATH + ('' + GET_TRIPS) + user_id;

    return axios.request({
      method: 'get',
      url: requestUrl,
      data: {
        _id: user_id
      }
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },
  selectTrip: function selectTrip(tripId) {

    var requestUrl = '' + PATH + ('' + SELECT_TRIP) + tripId;

    return axios.request({
      method: 'get',
      url: requestUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },
  deleteTrip: function deleteTrip(tripId) {
    var requestUrl = '' + PATH + ('' + DELETE_TRIP) + tripId;
    return axios.request({
      method: 'post',
      url: requestUrl
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },
  saveTrip: function saveTrip(trip) {
    var requestUrl = '' + PATH + ('' + SAVE_TRIP);

    return axios.request({
      method: 'post',
      url: requestUrl,
      data: trip
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  }
};

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _actions = __webpack_require__(31);

var _actions2 = _interopRequireDefault(_actions);

var _reactRouter = __webpack_require__(43);

var _Header = __webpack_require__(54);

var _Header2 = _interopRequireDefault(_Header);

var _CitiesMap = __webpack_require__(454);

var _CitiesMap2 = _interopRequireDefault(_CitiesMap);

var _Sidepanel = __webpack_require__(206);

var _Sidepanel2 = _interopRequireDefault(_Sidepanel);

var _NewTripForm = __webpack_require__(466);

var _NewTripForm2 = _interopRequireDefault(_NewTripForm);

var _DraggableCardsList = __webpack_require__(456);

var _DraggableCardsList2 = _interopRequireDefault(_DraggableCardsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTrip = function (_React$Component) {
  _inherits(AddTrip, _React$Component);

  function AddTrip(props) {
    _classCallCheck(this, AddTrip);

    var _this = _possibleConstructorReturn(this, (AddTrip.__proto__ || Object.getPrototypeOf(AddTrip)).call(this, props));

    var reduxState = props.state;

    _this.state = {
      loaded: false,
      user: reduxState.login.user,
      trip: reduxState.trip.selectedTrip.id,
      cards: [],
      places: [],
      likedPlaces: reduxState.trip.likedPlaces || [],
      location: reduxState.trip.selectedTrip.cities[0].coordinates || null,
      cities: reduxState.trip.selectedTrip.cities || [],
      view: 'all',
      category: '',
      loadingExplore: 'visible',
      selectedDates: false
    };
    return _this;
  }

  _createClass(AddTrip, [{
    key: 'saveTrip',
    value: function saveTrip() {
      if (!this.props.end || !this.props.start) {
        alert('Please select your travel dates on left panel.');
      }
      if (!this.props.user) {
        if (confirm('You are not logged in. Your changes will disappear if you leave the page. Would you like to login?')) {
          _reactRouter.browserHistory.push({ pathname: '/login' });
        } else {
          _reactRouter.browserHistory.push({ pathname: '/planner' });
        }
      } else {
        _reactRouter.browserHistory.push({ pathname: '/planner' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { navigation: false, home: false }),
        _react2.default.createElement(
          _Sidepanel2.default,
          { image: '/images/cities-01.png', orientation: 'left' },
          _react2.default.createElement(_NewTripForm2.default, null),
          _react2.default.createElement(_DraggableCardsList2.default, { cards: this.state.cities, title: 'Cities' })
        ),
        _react2.default.createElement(_CitiesMap2.default, { loaded: this.state.loaded, location: this.state.location, cities: this.state.cities })
      );
    }
  }]);

  return AddTrip;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(AddTrip);

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _Map = __webpack_require__(462);

var _Map2 = _interopRequireDefault(_Map);

var _actions = __webpack_require__(31);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import ReactDOM from 'react-dom';
// import scriptLoader from 'react-async-script-loader';


// const key = process.env.GOOGLE_KEY;

var CitiesMap = function (_React$Component) {
  _inherits(CitiesMap, _React$Component);

  function CitiesMap(props) {
    _classCallCheck(this, CitiesMap);

    console.log('state in cities map');

    var _this = _possibleConstructorReturn(this, (CitiesMap.__proto__ || Object.getPrototypeOf(CitiesMap)).call(this, props));

    _this.state = {
      loaded: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      start: _this.props.location
    };
    return _this;
  }

  _createClass(CitiesMap, [{
    key: 'removeCity',
    value: function removeCity(city) {
      var dispatch = this.props.dispatch;

      confirm('Remove city from trip?');
      dispatch(actions.removeCity(null, city));
    }
  }, {
    key: 'render',
    value: function render() {
      var cities = this.props.state.trip.selectedTrip.cities;

      return _react2.default.createElement(_Map2.default, { markers: cities, clickMarkerCallback: this.removeCity });
    }
  }]);

  return CitiesMap;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

// var CitiesMap = scriptLoader(["https://maps.googleapis.com/maps/api/js?key="+key+"&libraries=places"]
// )(CitiesMap);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CitiesMap);

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _reactAsyncScriptLoader = __webpack_require__(175);

var _reactAsyncScriptLoader2 = _interopRequireDefault(_reactAsyncScriptLoader);

var _app = __webpack_require__(207);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var key = "AIzaSyBFbdU04K-I7AsMCnUvfbDFLITWlZZIbfI";

var CityAutocomplete = function (_React$Component) {
  _inherits(CityAutocomplete, _React$Component);

  function CityAutocomplete(props) {
    _classCallCheck(this, CityAutocomplete);

    var _this = _possibleConstructorReturn(this, (CityAutocomplete.__proto__ || Object.getPrototypeOf(CityAutocomplete)).call(this, props));

    _this.state = {
      loading: true
    };
    return _this;
  }

  _createClass(CityAutocomplete, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var isScriptLoaded = _ref.isScriptLoaded;

      if (isScriptLoaded && !this.props.isScriptLoaded) {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!nextState.loading) {
        this.loadAutocomplete();
        return true;
      }
      return false;
    }
  }, {
    key: 'loadAutocomplete',
    value: function loadAutocomplete() {
      var input = document.getElementById('pac-input');
      var options = {
        types: ['(cities)']
      };
      var autocomplete = new google.maps.places.Autocomplete(input, options);

      autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        console.log('place', place);
        var callback = function callback() {
          return (0, _app.navigateTo)('/newtrip');
        };
        (0, _app.saveCity)(place, callback);
      });
    }

    // handleNewRequest(text) {
    //   let cities = [];
    //   cities.push(text.text);
    //   this.setState({cities: cities});
    //   this.saveCity(this.state.cities);
    // }

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'autocomplete l-centered-block' },
        _react2.default.createElement('input', { className: 'input-light', type: 'text', id: 'pac-input', placeholder: 'Where to?' })
      );
    }
  }]);

  return CityAutocomplete;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactAsyncScriptLoader2.default)(['https://maps.googleapis.com/maps/api/js?key=' + key + '&libraries=places'])(CityAutocomplete));

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _DraggableCard = __webpack_require__(204);

var _DraggableCard2 = _interopRequireDefault(_DraggableCard);

var _reactDnd = __webpack_require__(177);

var _reactDndHtml5Backend = __webpack_require__(396);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DraggableCardsList = function (_React$Component) {
  _inherits(DraggableCardsList, _React$Component);

  function DraggableCardsList(props) {
    _classCallCheck(this, DraggableCardsList);

    var _this = _possibleConstructorReturn(this, (DraggableCardsList.__proto__ || Object.getPrototypeOf(DraggableCardsList)).call(this, props));

    _this.moveCard = _this.moveCard.bind(_this);
    return _this;
  }

  _createClass(DraggableCardsList, [{
    key: 'moveCard',
    value: function moveCard(dragIndex, hoverIndex) {
      this.props.changeOrder(dragIndex, hoverIndex);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'draggable-cards-list' },
        _react2.default.createElement(
          'p',
          { className: 'draggable-cards-list-title', 'data-tooltip': true, tabIndex: '1', title: 'Fancy word for a beetle.', 'data-position': 'bottom', 'data-alignment': 'center' },
          this.props.title
        ),
        this.props.cards.map(function (card, i) {
          return _react2.default.createElement(_DraggableCard2.default, {
            index: i,
            id: card.name,
            text: '' + (card.country === 'United States' ? card.name + ', ' + card.state : card.name + ', ' + card.country),
            moveCard: _this2.moveCard,
            'class': 'draggable-card'
          });
        })
      );
    }
  }]);

  return DraggableCardsList;
}(_react2.default.Component);

DraggableCardsList = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(DraggableCardsList);
exports.default = (0, _reactRedux.connect)(null)(DraggableCardsList);

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __webpack_require__(2);
var GetPlaces = __webpack_require__(97);
var actions = __webpack_require__(31);

var _require = __webpack_require__(13),
    connect = _require.connect;

var ExploreCard = exports.ExploreCard = React.createClass({
  displayName: 'ExploreCard',

  getInitialState: function getInitialState() {
    return { liked: false };
  },
  handleMore: function handleMore(e) {
    var id = this.props.place_id;
    this.props.viewPlace(id);
  },
  handleLike: function handleLike(e) {
    var place = { venueId: this.props.place_id,
      source: 'fs',
      user_id: this.props.state.login.user,
      tripId: this.props.state.trip.selectedTrip.id,
      category: this.props.category,
      image: this.props.photo,
      coordinates: { lat: this.props.lat,
        lon: this.props.lng },
      name: this.props.name };
    this.addPlace(place);
  },
  addPlace: function addPlace(place) {
    var that = this;
    if (this.props.state.login.user.length > 0) {
      GetPlaces.addPlace(place).then(function (res) {
        if (res.data._id) {
          that.props.fetchPlaces();
        }
      }, function (errorMessage) {
        console.log(errorMessage);
      });
    } else {
      // this.setState({liked:true})
      var dispatch = that.props.dispatch;

      dispatch(actions.likedPlaces(place));
    }
  },
  render: function render() {
    var _this = this;

    var _props = this.props,
        name = _props.name,
        place_id = _props.place_id,
        photo = _props.photo,
        category = _props.category,
        selected = _props.selected;

    if (this.state.liked) {
      var likeIcon = React.createElement('i', { style: { color: 'white' }, className: 'fa fa-check', 'aria-hidden': 'true' });
    } else {
      var likeIcon = '+';
    }
    return React.createElement(
      'div',
      { className: 'explore-card' },
      React.createElement('img', { src: this.props.photo }),
      React.createElement(
        'div',
        { className: 'venue-name' },
        React.createElement(
          'a',
          { onClick: function onClick() {
              _this.handleMore();
            } },
          name
        ),
        React.createElement(
          'p',
          { onClick: function onClick() {
              _this.handleLike();
            } },
          likeIcon
        )
      )
    );
  }
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = connect(mapStateToProps)(ExploreCard);

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _reactRouter = __webpack_require__(43);

var _actions = __webpack_require__(31);

var actions = _interopRequireWildcard(_actions);

var _Header = __webpack_require__(54);

var _Header2 = _interopRequireDefault(_Header);

var _CityAutocomplete = __webpack_require__(455);

var _CityAutocomplete2 = _interopRequireDefault(_CityAutocomplete);

var _Slideshow = __webpack_require__(472);

var _Slideshow2 = _interopRequireDefault(_Slideshow);

var _slideshow = __webpack_require__(451);

var images = _interopRequireWildcard(_slideshow);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.clearSelectedTrip();

    _this.state = {
      loading: true,
      buttonOff: false,
      citiesData: []
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'clearSelectedTrip',
    value: function clearSelectedTrip() {
      var dispatch = this.props.dispatch;

      dispatch(actions.clearSelectedTrip());
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkUser();
    }
  }, {
    key: 'checkUser',
    value: function checkUser() {
      if (this.props.state.login.user) {
        return _reactRouter.browserHistory.push({ pathname: '/trips' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'cover-page-layout' },
        _react2.default.createElement(_Header2.default, { isHomePage: true, loggedIn: false, buttonOff: this.state.buttonOff }),
        _react2.default.createElement(_Slideshow2.default, { fullscreen: true, images: images.home }),
        _react2.default.createElement(
          'div',
          { className: 'l-page-overlay' },
          _react2.default.createElement(_CityAutocomplete2.default, null)
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('div', { className: 'diagonal-line' }),
          _react2.default.createElement('div', { className: 'diagonal-line' })
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Home);

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  CARD: 'card'
};

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(43);

var _CheckUser = __webpack_require__(133);

var _CheckUser2 = _interopRequireDefault(_CheckUser);

var _reactRedux = __webpack_require__(13);

var _actions = __webpack_require__(31);

var actions = _interopRequireWildcard(_actions);

var _Header = __webpack_require__(54);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = exports.Login = _react2.default.createClass({
  displayName: 'Login',

  getInitialState: function getInitialState() {
    return {
      user: {},
      loginButtonOff: true
    };
  },
  componentDidMount: function componentDidMount() {
    this.checkUser();
  },
  checkUser: function checkUser() {
    var that = this;
    var dispatch = that.props.dispatch;

    _CheckUser2.default.checkUser().then(function (res) {
      if (!res.data._id) {
        that.setState({ user: false });
      } else if (res.data._id) {
        dispatch(actions.login(res.data._id));
        _reactRouter.browserHistory.push({ pathname: '/trips' });
      }
    }, function (errorMessage) {
      return console.log(errorMessage);
    });
  },
  login: function login() {
    var that = this;
    var dispatch = that.props.dispatch;

    var username = that.refs.username.value;
    var password = that.refs.password.value;
    _CheckUser2.default.loginUser(username, password).then(function (res) {
      that.setState({ user: true });
      dispatch(actions.login(res.data._id));
      _reactRouter.browserHistory.push({ pathname: '/trips' });
    }, function (errorMessage) {
      that.refs.password.value = '';
      that.refs.username.value = '';
      return console.log(errorMessage);
    });
  },
  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      'div',
      { className: 'login-container' },
      _react2.default.createElement(_Header2.default, { home: false, loggedIn: true }),
      _react2.default.createElement(
        'div',
        { className: 'login-form-container' },
        _react2.default.createElement(
          'form',
          { onSubmit: this.login },
          _react2.default.createElement('input', { placeholder: 'username', className: 'round-input', type: 'text', ref: 'username' }),
          _react2.default.createElement('input', { placeholder: 'password', className: 'round-input', type: 'password', ref: 'password' }),
          _react2.default.createElement(
            'button',
            { className: 'red-button button', type: 'button', onClick: function onClick() {
                _this.login();
              } },
            'Login'
          ),
          _react2.default.createElement(
            'a',
            { href: '/signup' },
            'Start planning your trip! Click to register'
          )
        )
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(null)(Login);

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _reactRouter = __webpack_require__(43);

var _actions = __webpack_require__(31);

var actions = _interopRequireWildcard(_actions);

var _CheckUser = __webpack_require__(133);

var _CheckUser2 = _interopRequireDefault(_CheckUser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logout = function (_React$Component) {
  _inherits(Logout, _React$Component);

  function Logout(props) {
    _classCallCheck(this, Logout);

    var _this2 = _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).call(this, props));

    _this2.state = {
      user: {},
      buttonOff: true
    };
    _this2.logout();
    return _this2;
  }

  _createClass(Logout, [{
    key: 'logout',
    value: function logout() {
      var _this = this;
      var dispatch = _this.props.dispatch;

      var username = this.props.state.login.user;
      _CheckUser2.default.logoutUser(username).then(function () {
        console.log(actions.logout);
        dispatch(actions.logout());
        console.log(username);
        _reactRouter.browserHistory.push({ pathname: '/' });
      }, function (errorMessage) {
        return alert(errorMessage);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Logout;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Logout);

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactAsyncScriptLoader = __webpack_require__(175);

var _reactAsyncScriptLoader2 = _interopRequireDefault(_reactAsyncScriptLoader);

var _reactRedux = __webpack_require__(13);

var _app = __webpack_require__(207);

var _promise = __webpack_require__(392);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var key = "AIzaSyBFbdU04K-I7AsMCnUvfbDFLITWlZZIbfI";

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this2 = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    _this2.state = {
      loaded: false,
      showingInfoWindow: false,
      activeMarker: {}
    };
    return _this2;
  }

  _createClass(Map, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          isScriptLoaded = _props.isScriptLoaded,
          isScriptLoadSucceed = _props.isScriptLoadSucceed;


      if (isScriptLoaded && isScriptLoadSucceed && !prevProps.isScriptLoaded && !prevProps.isScriptLoadSucceed) {
        this.loadMap();
      }
    }
  }, {
    key: 'loadMap',
    value: function loadMap() {
      var _this = this;
      var markers = _this.props.markers;

      var hasMarkers = markers.length > 0;
      var defaultCoordinates = {
        lat: 48.8566,
        lng: 2.3522
      };
      var setMapCenter = hasMarkers ? markers[0].coordinates : defaultCoordinates;
      var setZoomValue = hasMarkers ? 8 : 5;
      var mapContainer = document.getElementById('map');

      _this.map = new google.maps.Map(mapContainer, {
        zoom: setZoomValue,
        center: setMapCenter
      });

      _this.directionsService = new google.maps.DirectionsService();

      _this.map.addListener('click', function (event) {
        _this.getCity(event.latLng);
      });

      if (hasMarkers) {
        _this.initMarkers(markers);
      }
    }
  }, {
    key: 'getCity',
    value: function getCity(coordinates) {
      var _this = this;
      var markers = _this.props.markers;


      (0, _app.reverseGeoCode)(coordinates).then(function (data) {
        var city = (0, _app.parseCityObject)(data);
        var marker = _this.createMarker(city);
        var last_marker = markers[markers.length - 1];
        var start = last_marker.coordinates;
        var destination = city.coordinates;

        _this.calcRoute(start, destination).then(function (data) {
          city.directions = data;

          //TODO: write function to clean up event listeners
          google.maps.event.addListener(_this.infowindow, 'closeclick', function () {
            _this.removeMarker(marker);
          });
          _this.showInfoWindow(marker, city);
        });
      });
    }
  }, {
    key: 'removeMarker',
    value: function removeMarker(marker) {
      // TODO: fix directions display to only remove city that was deleted
      var _this = this;
      marker.setMap(null);
      _this.directionsDisplay.setMap(null);
    }
  }, {
    key: 'calcRoute',
    value: function calcRoute(city1, city2) {
      var _this = this;
      var request = {
        origin: city1,
        destination: city2,
        travelMode: google.maps.TravelMode.DRIVING
      };
      return new _promise2.default(function (resolve, reject) {
        _this.directionsService.route(request, function (response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            _this.directionsDisplay = new google.maps.DirectionsRenderer();
            _this.directionsDisplay.setMap(_this.map);

            _this.directionsDisplay.setDirections(response);
            _this.directionsDisplay.setOptions({ suppressMarkers: true });
            var directions = {
              distance: response.routes[0].legs[0].distance.text,
              duration: response.routes[0].legs[0].duration.text
            };
            resolve(directions);
          } else {
            alert('Directions Request from ' + start.toUrlValue(6) + ' to ' + end.toUrlValue(6) + ' failed: ' + status);
            reject();
          }
        });
      });
    }
  }, {
    key: 'initMarkers',
    value: function initMarkers(markers) {
      var _this = this;

      markers.map(function (marker, i) {
        var point = marker.coordinates;
        _this.createMarker(marker, i);

        if (markers.length > 1 && i !== markers.length - 1) {
          var _start = point;
          var destination = markers[i + 1].coordinates;
          _this.calcRoute(_start, destination);
        }
      });
    }
  }, {
    key: 'createMarker',
    value: function createMarker(marker, id) {
      var _this = this;

      var mapMarker = new google.maps.Marker({
        position: marker.coordinates,
        title: marker.name,
        visible: true,
        map: _this.map,
        id: id
      });

      _this.initInfoWindow();
      mapMarker.addListener('click', function () {
        return _this.showInfoWindow(mapMarker, marker);
      });

      return mapMarker;
    }
  }, {
    key: 'initInfoWindow',
    value: function initInfoWindow() {
      var _this = this;

      _this.infowindow = new google.maps.InfoWindow({
        content: ''
      });
    }
  }, {
    key: 'createInfoWindowContent',
    value: function createInfoWindowContent(cityInfo) {
      var _this = this;
      var markers = _this.props.markers;

      var name = cityInfo.country === 'United States' ? cityInfo.name + ', ' + cityInfo.state : cityInfo.name + ', ' + cityInfo.country;
      var distance = 'directions' in cityInfo ? 'Distance: ' + cityInfo.directions.distance : 'First Stop';
      var duration = 'directions' in cityInfo ? 'Duration: ' + cityInfo.directions.duration : '';
      var is_saved_city = markers.find(function (marker) {
        return marker.name === cityInfo.name;
      });
      var button_label = is_saved_city ? 'Remove' : 'Add to Trip';
      var button_handle = is_saved_city ? 'data-info-window-button-action="remove-city"' : 'data-info-window-button-action="save-city"';

      return '\n        <div class="infowindow-header">\n          <p class="infowindow-title">' + name + '</p>\n        </div>\n        <div class="infowindow-content">\n          <p class="infowindow-text">' + duration + '</p>\n          <p class="infowindow-text">' + distance + '</p>\n        </div>\n        <div class="infowindow-footer">\n          <button class="button small-button" data-info-window-button ' + button_handle + '>' + button_label + '</button>\n        </div>';
    }
  }, {
    key: 'showInfoWindow',
    value: function showInfoWindow(mapMarker, markerInfo) {
      var _this = this;
      _this.infowindow.setContent(this.createInfoWindowContent(markerInfo));
      _this.infowindow.open(_this.map, mapMarker);
      google.maps.event.addListener(_this.infowindow, 'domready', _this.initInfoWindowClickHandlers.bind(_this, markerInfo, mapMarker));
    }
  }, {
    key: 'initInfoWindowClickHandlers',
    value: function initInfoWindowClickHandlers(markerInfo, mapMarker) {
      var _this = this;
      var infoWindowButton = document.querySelector('[data-info-window-button]');

      infoWindowButton.addEventListener('click', function () {
        var infoWindowButtonAction = this.dataset.infoWindowButtonAction;
        if (infoWindowButtonAction === 'save-city') {
          (0, _app.saveCity)(markerInfo, _this.infowindow.close.bind(_this.infowindow));
        } else if (infoWindowButtonAction === 'remove-city') {
          (0, _app.removeCity)(markerInfo, _this.removeMarker.bind(_this, mapMarker));
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'l-full-page-wrapper map-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'map-header' },
          _react2.default.createElement(
            'button',
            { className: 'button small-button map-buttons-right', onClick: this.saveTrip },
            'Save Trip'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'map', id: 'map' },
          _react2.default.createElement('i', { className: 'centered-loading-icon fa fa-spinner fa-spin', ref: 'spinner', 'aria-hidden': 'true' })
        )
      );
    }
  }]);

  return Map;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var WrappedMap = (0, _reactAsyncScriptLoader2.default)(['https://maps.googleapis.com/maps/api/js?key=' + key + '&libraries=places'])(Map);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WrappedMap);

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapaContainer = undefined;

var _reactAsyncScriptLoader = __webpack_require__(175);

var _reactAsyncScriptLoader2 = _interopRequireDefault(_reactAsyncScriptLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(179);


var key = "AIzaSyBFbdU04K-I7AsMCnUvfbDFLITWlZZIbfI";

var MapaContainer = exports.MapaContainer = React.createClass({
  displayName: 'MapaContainer',

  getInitialState: function getInitialState() {

    return {
      loaded: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {

    if (prevProps.loaded !== this.props.loaded || prevProps.places.length !== this.props.places.length) {
      this.loadMap();
    }
  },

  loadMap: function loadMap() {
    console.log('loading');
    var that = this;
    var latitude = that.props.location.lat;
    var longitude = that.props.location.lng;

    var map = new google.maps.Map(that.refs.map, {
      zoom: 12,
      center: { lat: latitude, lng: longitude }
    });
    var div = document.createElement('div');
    var infowindow = new google.maps.InfoWindow({
      content: div
    });
    var places = that.props.places;

    that.props.places.map(function (place, i) {
      var coordinates = { lat: place.coordinates.lat, lng: place.coordinates.lon };

      var point = new google.maps.LatLng(coordinates.lat, coordinates.lng);

      var marker = new google.maps.Marker({
        position: point,
        title: place.name,
        visible: true,
        map: map,
        id: i
      });
      google.maps.event.addListener(marker, 'click', function () {
        that.setState({
          selectedPlace: that.props.places[marker.id],
          activeMarker: marker
        });
        ReactDOM.render(that.renderInfoWindow(that.state.selectedPlace), div);
        infowindow.setContent(div);
        infowindow.open(map, this);
      });
    });
    var div = document.createElement('div');
    ReactDOM.render(that.renderInfoWindow(that.state.selectedPlace), div);
    var infowindow = new google.maps.InfoWindow({
      content: div
    });
  },
  renderInfoWindow: function renderInfoWindow(place) {
    var that = this;
    return React.createElement(
      'div',
      { className: 'info-window' },
      React.createElement(
        'p',
        null,
        place.name
      ),
      React.createElement('img', { height: '140px', width: '140px', style: { marginLeft: '10px' }, src: place.image }),
      React.createElement(
        'button',
        { style: { marginTop: '5%' }, className: 'red-button button', onClick: that.props.schedulePlace.bind(that, place) },
        'Add to Day '
      )
    );
  },
  render: function render() {

    return React.createElement(
      'div',
      { id: 'map-container' },
      React.createElement(
        'div',
        { ref: 'map', id: 'map' },
        React.createElement('i', { className: 'fa fa-spinner fa-spin', ref: 'spinner', 'aria-hidden': 'true' })
      )
    );
  }
});

exports.default = (0, _reactAsyncScriptLoader2.default)(["https://maps.googleapis.com/maps/api/js?key=" + key])(MapaContainer);

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(43);

var _reactRedux = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = exports.Navigation = _react2.default.createClass({
  displayName: 'Navigation',

  render: function render() {
    var link = void 0;
    var caption = void 0;
    if (!this.props.user.length > 0) {
      link = "/login";
      caption = "Login";
    } else {
      link = "/logout";
      caption = "Logout";
    }
    return _react2.default.createElement(
      'ul',
      { className: this.props.type, id: 'menu' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.IndexLink,
          { to: '/', activeClassName: 'active', style: { color: '#0d1228' }, activeStyle: { color: '#0d1228', textDecoration: 'underline' } },
          'Home'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/explore', activeClassName: 'active', style: { color: '#0d1228' }, activeStyle: { color: '#0d1228', textDecoration: 'underline' } },
          'Explore'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/planner', activeClassName: 'active', style: { color: '#0d1228' }, activeStyle: { color: '#0d1228', textDecoration: 'underline' } },
          'Planner'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: link, activeClassName: 'active', style: { color: '#0d1228' }, activeStyle: { color: '#0d1228', textDecoration: 'underline' } },
          caption
        )
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(null)(Navigation);

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewPlace = undefined;

var _Header = __webpack_require__(54);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(2);

var GetPlaces = __webpack_require__(97);

var _require = __webpack_require__(13),
    connect = _require.connect;

var inputStyle = {
  borderRadius: '25px'
};

var NewPlace = exports.NewPlace = React.createClass({
  displayName: 'NewPlace',


  getInitialState: function getInitialState() {
    return {
      user: {},
      citiesData: [],
      cities: []
    };
  },
  componentDidMount: function componentDidMount() {},
  saveTrip: function saveTrip() {},
  handleChange: function handleChange(input) {
    console.log('handling');
    var that = this;
    console.log(that.state.citiesData);

    GetPlaces.getGoogleCities(input).then(function (res) {
      that.setState({ citiesData: res.data });
    }, function (errorMessage) {

      return console.log(errorMessage);
    });
  },
  handleNewRequest: function handleNewRequest(text) {
    var cities = [];
    cities.push(text.text);
    this.setState({ citiesData: [], cities: cities });
  },
  handleRequestDelete: function handleRequestDelete(chip) {
    var cities = this.state.cities;
    cities.splice(chip, 1);
    this.setState({ cities: cities });
  },
  render: function render() {
    var _this = this;

    var count = 0;
    return React.createElement(
      'div',
      { style: { backgroundColor: "#eaf9f9", height: '100vh', width: '100%' } },
      React.createElement(_Header2.default, { loggedIn: this.state.user }),
      React.createElement(
        'div',
        { style: { width: '100%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center' } },
        React.createElement(
          'div',
          { style: { width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' } },
          React.createElement('input', { placeholder: 'Name', style: inputStyle, type: 'text', ref: 'name' }),
          React.createElement('input', { placeholder: 'Address', style: inputStyle, type: 'text', ref: 'address' }),
          React.createElement('input', { placeholder: 'Description', style: inputStyle, type: 'text', ref: 'description' }),
          React.createElement(
            'select',
            { style: inputStyle },
            React.createElement(
              'option',
              { value: '' },
              'Category'
            ),
            React.createElement(
              'option',
              { value: 'outdoor' },
              'Outdoor'
            ),
            React.createElement(
              'option',
              { value: 'retail' },
              'Retail'
            ),
            React.createElement(
              'option',
              { value: 'museum' },
              'Museum & Cultural'
            ),
            React.createElement(
              'option',
              { value: 'restaurant' },
              'Restaurant'
            )
          ),
          React.createElement(
            'button',
            { style: { marginTop: '10px', float: 'right', backgroundColor: '#e5500b', color: '#fff' }, className: 'button', type: 'button', onClick: function onClick() {
                _this.saveTrip;
              } },
            'Select'
          )
        )
      )
    );
  }
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = connect(mapStateToProps)(NewPlace);

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _actions = __webpack_require__(31);

var actions = _interopRequireWildcard(_actions);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewTripForm = function (_React$Component) {
  _inherits(NewTripForm, _React$Component);

  function NewTripForm(props) {
    _classCallCheck(this, NewTripForm);

    var _this2 = _possibleConstructorReturn(this, (NewTripForm.__proto__ || Object.getPrototypeOf(NewTripForm)).call(this, props));

    var today = (0, _moment2.default)(new Date()).format('YYYY-MM-DD');
    _this2.state = {
      today: today,
      start: today,
      end: null
    };
    return _this2;
  }

  _createClass(NewTripForm, [{
    key: 'setTripStart',
    value: function setTripStart(e) {
      var dispatch = this.props.dispatch;

      var start_date = (0, _moment2.default)(e.target.value).format('MM-DD-YYYY');
      this.setState({
        start: start_date
      });
      dispatch(actions.addStart(null, start_date));
    }
  }, {
    key: 'setTripEnd',
    value: function setTripEnd(e) {
      var _this = this;
      var dispatch = _this.props.dispatch;

      var end_date = (0, _moment2.default)(e.target.value).format('MM-DD-YYYY');

      if (_this.state.start < end_date) {
        _this.setState({
          end: end_date
        });
        dispatch(actions.addEnd(null, end_date));
      } else {
        _this.refs.enddate.value = '';
        alert('Please select a start date before the end date.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Select dates:'
        ),
        _react2.default.createElement('input', { type: 'date', ref: 'startdate', min: this.state.today, onChange: this.setTripStart }),
        _react2.default.createElement('input', { type: 'date', ref: 'enddate', min: this.state.start, onChange: this.setTripEnd })
      );
    }
  }]);

  return NewTripForm;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(NewTripForm);

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _actions = __webpack_require__(31);

var actions = _interopRequireWildcard(_actions);

var _GetPlaces = __webpack_require__(97);

var _GetPlaces2 = _interopRequireDefault(_GetPlaces);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _immutabilityHelper = __webpack_require__(728);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _Header = __webpack_require__(54);

var _Header2 = _interopRequireDefault(_Header);

var _Explore = __webpack_require__(205);

var _Explore2 = _interopRequireDefault(_Explore);

var _MapaContainer = __webpack_require__(463);

var _MapaContainer2 = _interopRequireDefault(_MapaContainer);

var _SidePlanner = __webpack_require__(470);

var _SidePlanner2 = _interopRequireDefault(_SidePlanner);

var _Sidepanel = __webpack_require__(206);

var _Sidepanel2 = _interopRequireDefault(_Sidepanel);

var _RightPanel = __webpack_require__(468);

var _RightPanel2 = _interopRequireDefault(_RightPanel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Planner = function (_React$Component) {
  _inherits(Planner, _React$Component);

  function Planner(props) {
    _classCallCheck(this, Planner);

    var _this = _possibleConstructorReturn(this, (Planner.__proto__ || Object.getPrototypeOf(Planner)).call(this, props));

    var cities = _this.props.state.trip.selectedTrip.cities || _this.props.location.state.cities;
    var likedPlaces = _this.props.state.trip.likedPlaces || [];
    var dates = _this.props.state.trip.selectedTrip.end ? true : false;
    _this.state = {
      loaded: false,
      user: _this.props.state.login.user,
      trip: _this.props.state.trip.selectedTrip.id,
      date: _this.props.state.trip.selectedTrip.start || (0, _moment2.default)(new Date()).format('YYYY-MM-DD'),
      cards: [],
      places: [],
      likedPlaces: likedPlaces,
      location: {},
      city: cities[0].name + "," + cities[0].state + "," + cities[0].country,
      cities: cities,
      view: 'all',
      category: '',
      loadingExplore: 'visible',
      selectedDates: dates
    };
    return _this;
  }

  _createClass(Planner, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      if (JSON.stringify(this.props.state.trip.likedPlaces) !== JSON.stringify(nextProps.state.trip.likedPlaces)) {
        this.setState({
          location: { lat: nextProps.state.trip.likedPlaces[0].coordinates.lat,
            lng: nextProps.state.trip.likedPlaces[0].coordinates.lon },
          likedPlaces: nextProps.state.trip.likedPlaces,
          cards: nextProps.state.trip.likedPlaces.filter(function (place) {
            return place.day === _this2.state.date;
          })
        });
      }
      return true;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchPlaces();
      this.retrievePlaces();
      this.scheduledPlaces();
    }
  }, {
    key: 'select',
    value: function select(event) {
      var date = event.target.value;
      this.setState({ date: date }, function () {
        this.scheduledPlaces();
      });
    }
  }, {
    key: 'scheduledPlaces',
    value: function scheduledPlaces() {
      var that = this;
      var user = that.state.user;
      var date = that.state.date;
      var trip = that.state.trip;
      if (trip && user && date) {
        _GetPlaces2.default.getDay(trip, user).then(function (res) {
          if (that.state.view === 'all' && res.data) {
            that.setState({
              cards: res.data
            });
          } else if (res.data.length == 0) {
            that.setState({
              cards: []
            });
          } else {
            that.setState({
              cards: res.data,
              likedPlaces: res.data
            });
          }
        }, function (errorMessage) {

          return console.log(errorMessage);
        });
      } else {
        var places = this.state.likedPlaces.filter(function (place) {
          return place.day === date;
        });
        that.setState({
          cards: places
        });
      }
    }
  }, {
    key: 'schedulingPlace',
    value: function schedulingPlace(marker) {
      var that = this;
      var id = marker._id || marker.venueId;
      var user = that.state.user;

      if (user.length > 0) {
        _GetPlaces2.default.schedulePlace(id, this.state.date).then(function (res) {
          that.scheduledPlaces();
        }, function (errorMessage) {

          return alert(errorMessage);
        });
      } else {
        var dispatch = that.props.dispatch;

        var date = that.state.date;
        dispatch(actions.schedulePlaces(id, date));
        window.location.reload();
      }
    }
  }, {
    key: 'fetchPlaces',
    value: function fetchPlaces() {
      var that = this;
      var user = that.state.user;
      var trip = that.state.trip;
      if (trip && user) {
        _GetPlaces2.default.getLikedPlaces(user, trip).then(function (res) {
          if (res.data.length > 0) {
            that.setState({
              likedPlaces: res.data,
              location: { lat: res.data[0].coordinates.lat,
                lng: res.data[0].coordinates.lon }
            });
          }
        }, function (errorMessage) {
          this.setState({
            likedPlaces: []
          });
          return alert(errorMessage);
        });
      } else {
        if (this.props.state.trip.likedPlaces.length > 0) {
          this.setState({
            location: { lat: this.props.state.trip.likedPlaces[0].coordinates.lat,
              lng: this.props.state.trip.likedPlaces[0].coordinates.lon },
            likedPlaces: this.props.state.trip.likedPlaces
          });
        }
      }
    }
  }, {
    key: 'retrievePlaces',
    value: function retrievePlaces(category) {
      var that = this;
      var cities = that.state.cities;
      var city = that.state.city;
      _GetPlaces2.default.getRecommended(city, category).then(function (res) {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          var newState = {
            places: res.data,
            loadingExplore: 'hidden',
            loaded: true
          };
          if (!that.state.location.lat) {
            newState = _extends({}, newState, { location: res.data[0].venue.location });
          }
          that.setState(newState);
        }
      }, function (errorMessage) {
        that.setState({
          loadingExplore: 'visible'
        });
        return console.log(errorMessage);
      });
    }
  }, {
    key: 'updateOrder',
    value: function updateOrder(dragIndex, hoverIndex) {
      var cards = this.state.cards;

      var dragCard = cards[dragIndex];
      var that = this;
      _GetPlaces2.default.changeOrder(cards[hoverIndex]._id, dragIndex, dragCard._id, hoverIndex).then(function (res) {
        that.setState((0, _immutabilityHelper2.default)(that.state, {
          cards: {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
          }
        }));
      }, function (errorMessage) {

        return console.log(errorMessage);
      });
    }
  }, {
    key: 'changeCity',
    value: function changeCity(event) {

      this.setState({
        city: event.target.value,
        likedPlaces: [],
        places: []
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(e) {
      var view = e.target.value;
      this.setState({
        view: view
      });
      if (view === 'all') {
        this.fetchPlaces();
      } else {
        this.scheduledPlaces();
      }
    }
  }, {
    key: 'getStart',
    value: function getStart(e) {
      var dispatch = this.props.dispatch;

      this.setState({
        date: e.target.value
      });
      dispatch(actions.trip('', this.state.cities, e.target.value, ''));
    }
  }, {
    key: 'getEnd',
    value: function getEnd(e) {
      if (this.props.state.trip.selectedTrip.start) {
        var dispatch = this.props.dispatch;

        dispatch(actions.trip('', this.state.cities, this.state.date, e.target.value));
        window.location.reload();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var count = 1;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_Header2.default, { home: false }),
          _react2.default.createElement(
            _Sidepanel2.default,
            { image: "/images/explore.png", orientation: 'left' },
            _react2.default.createElement(_Explore2.default, { loading: this.state.loadingExplore, retrievePlaces: this.retrievePlaces, city: this.state.city, cities: this.state.cities, places: this.state.places, fetchPlaces: this.fetchPlaces })
          ),
          _react2.default.createElement(
            'div',
            { id: 'city-container' },
            _react2.default.createElement(
              'select',
              { onChange: this.changeCity, style: { marginRight: '10px' }, id: 'city' },
              _react2.default.createElement(
                'option',
                null,
                'Select City'
              ),
              this.state.cities.map(function (x) {
                count++;
                if (_this3.state.city === x.name + "," + x.state + "," + x.country) {
                  return _react2.default.createElement(
                    'option',
                    { key: x, selected: true, value: x.name + ", " + x.state, id: 'city{count}' },
                    x.name + ", " + x.state
                  );
                } else {
                  return _react2.default.createElement(
                    'option',
                    { key: x, value: x.name + ", " + x.state, id: 'city{count}' },
                    x.name + ", " + x.state
                  );
                }
              })
            ),
            _react2.default.createElement(
              'select',
              { onChange: this.changeView, value: this.state.view, id: 'city' },
              _react2.default.createElement(
                'option',
                { value: 'all' },
                'View All'
              ),
              _react2.default.createElement(
                'option',
                { value: 'day' },
                'View Day'
              )
            )
          ),
          _react2.default.createElement(
            _RightPanel2.default,
            { image: "/images/planner.png" },
            _react2.default.createElement(_SidePlanner2.default, { getEnd: this.getEnd, getStart: this.getStart, selectedDates: this.state.selectedDates, tripId: this.props.state.trip.selectedTrip.id, userId: this.props.state.login.user, changeOrder: this.updateOrder, cards: this.state.cards, date: this.state.date, select: this.select, end: this.props.state.trip.selectedTrip.end, start: this.props.state.trip.selectedTrip.start })
          ),
          _react2.default.createElement(_MapaContainer2.default, { loaded: this.state.loaded, location: this.state.location, schedulePlace: this.schedulingPlace, date: this.state.date, places: this.state.likedPlaces })
        )
      );
    }
  }]);

  return Planner;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Planner);

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __webpack_require__(2);

var _require = __webpack_require__(13),
    connect = _require.connect;

var $ = __webpack_require__(87);

var RightPanel = exports.RightPanel = React.createClass({
  displayName: 'RightPanel',


  showRightPanel: function showRightPanel() {
    console.log('show explore');
    $(".right-main-container").toggleClass("open-planner", 300);
  },
  render: function render() {

    return React.createElement(
      'div',
      { className: 'right-main-container' },
      React.createElement(
        'div',
        { id: 'right-tab' },
        React.createElement('img', { onClick: this.showRightPanel, id: 'right-tab-icon', src: this.props.image })
      ),
      this.props.children
    );
  }
});

exports.default = connect(null)(RightPanel);

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(2);

var SideExplore = React.createClass({
  displayName: 'SideExplore',

  getInitialState: function getInitialState() {
    return { visible: 'hidden' };
  },
  render: function render() {
    var _this = this;

    var _props = this.props,
        name = _props.name,
        photos = _props.photos,
        rating = _props.rating,
        description = _props.description;

    if (!description) {
      description = 'No description available.';
    }
    var divStyle = {
      display: this.props.display
    };
    if (photos) {
      var photoInit = photos.groups[0].items[0].prefix + '300x300' + photos.groups[0].items[0].suffix;
      var photoCount = photos.groups[0].items[0].length;
    }
    return React.createElement(
      'div',
      { id: 'side-explore-container', style: divStyle, ref: 'side' },
      React.createElement(
        'div',
        null,
        React.createElement(
          'h4',
          { onClick: function onClick() {
              _this.props.handleClose();
            }, id: 'explore-close-button' },
          'X'
        )
      ),
      React.createElement(
        'h4',
        { style: { marginTop: '4%' } },
        name
      ),
      React.createElement('img', { src: photoInit, style: { marginBottom: '5px' } }),
      React.createElement(
        'p',
        null,
        React.createElement(
          'strong',
          null,
          'Rating: '
        ),
        rating
      ),
      React.createElement(
        'p',
        null,
        React.createElement(
          'strong',
          null,
          'Description:'
        )
      ),
      React.createElement(
        'p',
        null,
        description
      )
    );
  }
});

module.exports = SideExplore;

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDnd = __webpack_require__(177);

var _reactDndHtml5Backend = __webpack_require__(396);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _DraggableCard = __webpack_require__(204);

var _DraggableCard2 = _interopRequireDefault(_DraggableCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = __webpack_require__(87);

var _require = __webpack_require__(13),
    connect = _require.connect;

var moment = __webpack_require__(0);

var SidePlanner = _react2.default.createClass({
  displayName: 'SidePlanner',


  getInitialState: function getInitialState() {

    this.moveCard = this.moveCard.bind(this);
    return {
      tripId: this.props.tripId,
      userId: this.props.userId,
      date: this.props.date,
      planner: false,
      start: this.props.start,
      end: this.props.end,
      selectedDates: this.props.selectedDates
    };
  },
  moveCard: function moveCard(dragIndex, hoverIndex) {
    this.props.changeOrder(dragIndex, hoverIndex);
  },
  buildOptions: function buildOptions() {
    var dates = [];
    var start = this.state.start;
    var end = this.state.end;

    if (start !== end) {
      for (var m = moment(start); m.diff(new Date(end), 'days') <= 0; m.add(1, 'days')) {
        dates.push(m.format('MM-DD-YYYY'));
      }
    } else {
      dates.push(start);
    }
    return dates;
  },
  showPlanner: function showPlanner() {
    $(".side-planner-main-container").toggleClass("open-planner", 300);
  },
  render: function render() {
    var _this = this;

    var cards = this.props.state.trip.likedPlaces;
    var dates = this.buildOptions();
    var dateSelector = function dateSelector() {
      if (_this.state.selectedDates) {
        return _react2.default.createElement(
          'select',
          { onChange: _this.props.select, value: _this.state.date },
          dates.map(function (date, j) {
            return _react2.default.createElement(
              'option',
              { key: date, value: moment(date).format("MM-DD-YYYY") },
              moment(date).format("ddd DD/MM/YY")
            );
          })
        );
      } else {
        return _react2.default.createElement(
          'div',
          { ref: 'dateSelector' },
          _react2.default.createElement(
            'p',
            null,
            'Select dates:'
          ),
          _react2.default.createElement('input', { type: 'date', ref: 'date1', onChange: _this.props.getStart }),
          _react2.default.createElement('input', { type: 'date', ref: 'date2', onChange: _this.props.getEnd })
        );
      }
    };
    var checkCards = function checkCards() {
      if (cards.length == 0) {
        return _react2.default.createElement(
          'p',
          null,
          'You have no places scheduled yet, click on the map markers and add to this day.'
        );
      }
    };

    var count = 0;
    return _react2.default.createElement(
      'div',
      { id: 'side-planner-container' },
      dateSelector(),
      checkCards(),
      cards.map(function (card, i) {
        return _react2.default.createElement(_DraggableCard2.default, {
          index: i,
          id: card._id,
          text: card.name,
          moveCard: _this.moveCard,
          'class': "day-card"
        });
      })
    );
  }
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};
var SidePlanner = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(SidePlanner);
exports.default = connect(mapStateToProps)(SidePlanner);

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signup = undefined;

var _Header = __webpack_require__(54);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(2);

var _require = __webpack_require__(43),
    browserHistory = _require.browserHistory;

var CheckUser = __webpack_require__(133);

var _require2 = __webpack_require__(13),
    connect = _require2.connect;

var actions = __webpack_require__(31);

var Signup = exports.Signup = React.createClass({
  displayName: 'Signup',


  getInitialState: function getInitialState() {
    return {
      user: true,
      buttonOff: true
    };
  },
  signUp: function signUp() {
    var that = this;
    var dispatch = that.props.dispatch;

    var username = that.refs.username.value;
    var password = that.refs.password.value;
    CheckUser.signupUser(username, password).then(function (res) {
      if (res.data.message) {
        alert('ERROR: ' + res.data.name + '\n ' + res.data.message);
        that.refs.password.value = '';
        that.refs.username.value = '';
      } else {
        that.setState({ user: res.data._id });
        dispatch(actions.login(res.data._id));
        browserHistory.push({ pathname: '/trips' });
      }
    }, function (errorMessage) {
      that.refs.password.value = '';
      that.refs.username.value = '';
      return console.log(errorMessage);
    });
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      { className: 'login-container' },
      React.createElement(_Header2.default, { buttonOff: this.state.buttonOff, loggedIn: this.state.user }),
      React.createElement(
        'div',
        { className: 'login-form-container' },
        React.createElement(
          'form',
          { onSubmit: this.login },
          React.createElement('input', { placeholder: 'username', className: 'round-input', type: 'text', ref: 'username' }),
          React.createElement('input', { placeholder: 'password', className: 'round-input', type: 'password', ref: 'password' }),
          React.createElement('input', { placeholder: 'confirm password', className: 'round-input', type: 'password', ref: 'password' }),
          React.createElement(
            'button',
            { className: 'red-button button', type: 'button', onClick: function onClick() {
                _this.signUp();
              } },
            'Sign Up'
          )
        )
      )
    );
  }
});

exports.default = connect(null)(Signup);

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _jquery = __webpack_require__(87);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(951);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slideshow = function (_React$Component) {
  _inherits(Slideshow, _React$Component);

  function Slideshow(props) {
    _classCallCheck(this, Slideshow);

    var _this = _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).call(this, props));

    _this.updateDimensions();

    _this.state = {
      height: (0, _jquery2.default)(window).height(),
      width: (0, _jquery2.default)(window).width()
    };
    return _this;
  }

  _createClass(Slideshow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _jquery2.default)('[data-slideshow]').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        draggable: false,
        fade: true,
        speed: 1000,
        arrows: false
      });
    }
  }, {
    key: 'switchImage',
    value: function switchImage() {
      var _this2 = this;

      var count = this.state.count;
      var updatedCount = count < 5 ? count + 1 : 0;
      this.setState({ count: updatedCount }, function () {
        return setTimeout(_this2.switchImage.bind(_this2), 5000);
      });
    }
  }, {
    key: 'updateDimensions',
    value: function updateDimensions() {
      var currentWindowWidth = (0, _jquery2.default)(window).width();
      var currentWindowHeight = (0, _jquery2.default)(window).height();

      (0, _jquery2.default)('.slideshow').css('width', currentWindowWidth).css('height', currentWindowHeight);
    }
  }, {
    key: 'render',
    value: function render() {
      var images = this.props.images;

      console.log(images);

      return _react2.default.createElement(
        'ul',
        { className: 'slideshow', 'data-slideshow': true },
        images.map(function (image) {
          return _react2.default.createElement('li', { className: 'slideshow-item', style: { backgroundImage: 'url(' + image + ')' } });
        })
      );
    }
  }]);

  return Slideshow;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null)(Slideshow);

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(2);

var TripCard = React.createClass({
  displayName: "TripCard",

  handleSelect: function handleSelect(e) {
    var id = this.props.tripId;
    this.props.selectTrip(id);
  },
  render: function render() {
    var _this = this;

    var _props = this.props,
        name = _props.name,
        tripId = _props.tripId,
        photo = _props.photo;

    return React.createElement(
      "div",
      { className: "large-4 columns" },
      React.createElement(
        "div",
        { className: "panel callout", style: { borderRadius: '5px', boxShadow: '5px 8px rgba(138, 155, 168,.4)' } },
        React.createElement(
          "h4",
          null,
          name
        ),
        React.createElement(
          "div",
          { style: { width: '95%', minHeight: '55vh', height: 'auto', overflow: 'hidden', margin: '10px', position: 'relative' } },
          React.createElement("img", { style: { position: 'absolute', left: '-100%', right: '-100%', top: '-100%', bottom: '-100%', margin: 'auto', minHeight: '55vh', height: 'auto', width: 'auto' }, src: photo })
        ),
        React.createElement(
          "div",
          { style: { height: '10vh', width: '100%' } },
          React.createElement(
            "button",
            { style: { marginTop: '10px', float: 'right', backgroundColor: '#e5500b', color: '#fff', fontFamily: 'Dosis', textTransform: 'uppercase', borderRadius: '5px', fontWeight: '700', minWidth: '80px' }, className: "button", type: "button", onClick: function onClick() {
                _this.handleSelect();
              } },
            "Select"
          ),
          React.createElement(
            "a",
            { style: { marginTop: '10px', float: 'left' }, onClick: function onClick() {
                _this.props.deleteTrip({ tripId: tripId });
              } },
            "Delete"
          )
        )
      )
    );
  }
});

module.exports = TripCard;

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trips = undefined;

var _Header = __webpack_require__(54);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(2);
var TripCard = __webpack_require__(473);
var GetTrips = __webpack_require__(452);

var _require = __webpack_require__(13),
    connect = _require.connect;

var actions = __webpack_require__(31);

var _require2 = __webpack_require__(43),
    browserHistory = _require2.browserHistory;

var Trips = exports.Trips = React.createClass({
  displayName: 'Trips',


  getInitialState: function getInitialState() {
    return { loading: true, trips: [] };
  },
  componentWillMount: function componentWillMount() {
    if (this.state.loading) {
      this.retrieveTrips();
    }
  },
  selectTrip: function selectTrip(trip_id) {
    var that = this;
    var dispatch = that.props.dispatch;

    GetTrips.selectTrip(trip_id).then(function (res) {
      dispatch(actions.trip(trip_id, res.data.cities, res.data.start, res.data.end));
      browserHistory.push({ pathname: '/explore', state: that.state });
    }, function (errorMessage) {
      that.setState({
        user: {}
      });
      return alert(errorMessage);
    });
  },
  deleteTrip: function deleteTrip(trip_id) {
    var that = this;
    GetTrips.deleteTrip(trip_id.tripId).then(function (res) {
      browserHistory.push({ pathname: '/trips' });
    }, function (errorMessage) {
      return alert(errorMessage);
    });
  },
  retrieveTrips: function retrieveTrips() {
    var user = this.props.state.login.user;
    var that = this;
    GetTrips.getTrips(user).then(function (res) {
      that.setState({
        trips: res.data,
        loading: false,
        activeTrip: ""
      });
    }, function (errorMessage) {
      that.setState({
        loading: true
      });
      return console.log(errorMessage);
    });
  },
  render: function render() {
    var trips;
    if (!this.state.loading) {
      if (this.state.trips.length > 0) {
        trips = this.state.trips && Object.keys(this.state.trips).map(function (k, name) {
          return React.createElement(TripCard, { deleteTrip: this.deleteTrip, selectTrip: this.selectTrip, name: this.state.trips[k].name, tripId: this.state.trips[k]._id, photo: this.state.trips[k].photo, key: this.state.trips[k]._id });
        }.bind(this));
      } else {
        trips = React.createElement(
          'span',
          { style: { marginLeft: '2%' } },
          'No trips created yet. ',
          React.createElement(
            'a',
            { href: '/newtrip' },
            'Create your first trip.'
          )
        );
      }
    }
    return React.createElement(
      'div',
      null,
      React.createElement(_Header2.default, { loggedIn: this.state.user }),
      React.createElement(
        'div',
        { id: 'new-trip-button-container' },
        React.createElement(
          'a',
          { className: 'red-button button', href: '/newtrip' },
          'New Trip'
        )
      ),
      React.createElement(
        'div',
        { className: 'row', id: 'trips-container' },
        trips
      )
    );
  }
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = connect(mapStateToProps)(Trips);

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/app/store/configureStore.jsx'\n    at Error (native)");

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/prop-types/index.js'\n    at Error (native)");

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Navigation = __webpack_require__(464);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _reactRouter = __webpack_require__(43);

var _reactRedux = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = exports.Header = _react2.default.createClass({
  displayName: 'Header',

  showNavigation: function showNavigation() {
    if (this.props.navigation) {
      return _react2.default.createElement(_Navigation2.default, { user: this.props.state.login.user });
    }
    if (!this.props.loggedIn) {
      return _react2.default.createElement(
        'button',
        { className: 'white-button button', type: 'button', onClick: function onClick() {
            _reactRouter.browserHistory.push({ pathname: '/login' });
          } },
        'Login'
      );
    }
  },
  render: function render() {
    var image = void 0;
    var color = void 0;
    if (this.props.isHomePage) {
      image = '/images/bontrip-logo-white.png';
      color = 'rgba(0,0,0,0)';
    } else {
      image = '/images/bontrip-logo-blue.png';
      color = '#fff';
    }

    return _react2.default.createElement(
      'div',
      { className: 'theme-header top-bar ' + (this.props.isHomePage ? 'is-transparent' : '') },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { className: 'logo', href: '/' },
          _react2.default.createElement('img', { src: image })
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        this.showNavigation()
      )
    );
  }
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/immutability-helper/index.js'\n    at Error (native)");

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/jquery/dist/jquery.js'\n    at Error (native)");

/***/ }),

/***/ 951:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/slick-carousel/slick/slick.js'\n    at Error (native)");

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

throw new Error("Module build failed: \n@import '../../../node_modules/foundation-sites/scss/util/util';\n^\n      File to import not found or unreadable: /Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/foundation-sites/scss/util/_util.scss.\n      in /Users/pixelcabinhaydee/Documents/bontrip-react/app/style/base/_settings.scss (line 23, column 1)");

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/pixelcabinhaydee/Documents/bontrip-react/node_modules/style-loader/addStyles.js'\n    at Error (native)");

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(955);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(957)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(203);
module.exports = __webpack_require__(450);


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(134);
// const PATH = 'http://localhost:8080/';
var PATH = 'https://mighty-beach-23452.herokuapp.com/';
var GET_RECOMMENDED = 'api/venues/recommended';
var GET_PLACES = 'api/venues/';
var GET_LIKED_PLACES = 'api/places/';
var GET_TEST_PLACES = 'api/places/test';
var ADD_PLACE = 'api/places/add';
var GET_DAY = 'api/places/day/';
var UPDATE_PLACES = 'api/places/schedule/';
var UPDATE_ORDER = 'api/places/order';
var GET_GOOGLE_CITIES = 'api/places/google';

module.exports = {
  getRecommended: function getRecommended(city, category) {
    city = encodeURI(city);
    var requestUrl = '' + PATH + ('' + GET_RECOMMENDED);

    return axios.request({
      method: 'post',
      url: requestUrl,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      data: {
        city: city,
        category: category
      }
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },
  getLikedPlaces: function getLikedPlaces(user_id, tripId) {

    var requestUrl = '' + PATH + ('' + GET_TEST_PLACES) + '?user=' + user_id + '&trip=' + tripId;

    return axios.request({
      method: 'get',
      url: requestUrl,
      data: {
        _id: user_id,
        tripId: tripId
      }
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        console.log(err);
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },
  viewPlace: function viewPlace(place_id) {

    var requestUrl = '' + PATH + ('' + GET_PLACES) + place_id;

    return axios.request({
      method: 'get',
      url: requestUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },
  addPlace: function addPlace(place) {

    var requestUrl = '' + PATH + ('' + ADD_PLACE);

    return axios.request({
      method: 'post',
      url: requestUrl,
      data: { venueId: place.venueId,
        source: place.source,
        _id: place.user_id,
        category: place.category,
        tripId: place.tripId,
        lat: place.lat,
        lon: place.lng,
        name: place.name

      }
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        console.log(err);
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },
  getDay: function getDay(day, tripId, userId) {
    var requestUrl = '' + PATH + ('' + GET_DAY) + encodeURI(day) + '/' + tripId + '/' + userId;

    return axios.request({
      method: 'get',
      url: requestUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        console.log(err);
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },

  schedulePlace: function schedulePlace(id, date) {
    var requestUrl = '' + PATH + ('' + UPDATE_PLACES) + id + '/' + date;

    return axios.request({
      method: 'get',
      url: requestUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        console.log(err);
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },
  changeOrder: function changeOrder(id1, order1, id2, order2) {
    var requestUrl = '' + PATH + ('' + UPDATE_ORDER) + '?id1=' + id1 + '&id2=' + id2 + '&order1=' + order1 + '&order2=' + order2;

    return axios.request({
      method: 'get',
      url: requestUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        console.log(err);
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  },
  getGoogleCities: function getGoogleCities(input) {

    var requestUrl = '' + PATH + ('' + GET_GOOGLE_CITIES);

    return axios.request({
      method: 'post',
      url: requestUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        input: input
      }
    }).then(function (res, err) {
      if (res) {
        return res;
      } else {
        console.log(err);
        return err;
      }
    }, function (res) {
      throw new Error('error');
    });
  }
};

/***/ })

/******/ });
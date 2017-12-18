var redux = require('redux');
var {loginReducer,tripReducer} = require('reducers');
  var reducer = redux.combineReducers({
    login: loginReducer,
    trip: tripReducer
  });
export var configure = () =>{

var store = redux.createStore(reducer, redux.compose(
window.devToolsExtension ? window.devToolsExtension(): f=> f

));
return store;
};

export var loadState = ()=>{
       try {
            let serializedState = localStorage.getItem("state");
            if (serializedState === null) {
                return configure();
            }
            var store = redux.createStore(reducer, JSON.parse(serializedState));
            return store;
        }
        catch (err) {
            return configure();
        }
};

export var saveState = (state)=>{
         try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("state", serializedState);
        }
        catch (err) {
        }
};



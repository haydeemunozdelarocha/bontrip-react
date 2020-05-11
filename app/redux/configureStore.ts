// import { combineReducers, createStore, compose } from 'redux';
// import { tripReducer } from '../redux/reducers';
//
// const reducer = combineReducers({
//   trip: tripReducer
// });
//
// export const configure = () => {
//   const store = createStore(reducer, compose(
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   ));
//   return store;
// // };
// //
// // export const loadState = ()=>{
// //   try {
// //     let serializedState = localStorage.getItem('state');
// //     if (serializedState === null) {
// //       return configure();
// //     }
// //     const store = createStore(reducer, JSON.parse(serializedState));
// //     return store;
// //   }
// //   catch (err) {
// //     console.log(err);
// //     return configure();
// //   }
// // };
// //
// // export const saveState = (state) => {
// //   let serializedState = JSON.stringify(state);
// //
// //   try {
// //     localStorage.setItem('state', serializedState);
// //   }
// //   catch (err) {
// //     console.log(err);
// //   }
// // };
// //


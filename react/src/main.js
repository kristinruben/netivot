// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import City from './components/Cities/City'
// import CitiesPage from './components/Cities/CitiesPage';
// import EventsPage from './components/Events/EventsPage';
//
// // $(function() {
// //   if(document.getElementById('cities')) {
// //     ReactDOM.render(
// //       <CitiesPage />,
// //       document.getElementById('cities')
// //     )};
// // });
// // $(function() {
// //   if(document.getElementById('events')) {
// //     ReactDOM.render(
// //       <EventsPage />,
// //       document.getElementById('events')
// //     )};
// // });

ReactDOM.render(
  <City />,
  document.getElementById('cities')
);

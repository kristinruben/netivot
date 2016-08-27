// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CitiesPage from './components/Cities/CitiesPage';
// import EventTypePage from './components/EventType/EventTypePage';
// import EventsPage from './components/Events/EventsPage';

$(function() {
  if(document.getElementById('cities')) {
    ReactDOM.render(
      <CitiesPage />,
      document.getElementById('cities')
    )};
});

// $(function() {
//   if(document.getElementById('event-type')) {
//     ReactDOM.render(
//       <EventTypePage />,
//       document.getElementById('event-type')
//     )};
// });
//
// $(function() {
//   if(document.getElementById('events')) {
//     let eventID = document.getElementById('events')
//     let id = eventID.className
//     ReactDOM.render(
//       <EventsPage id={id}/>,
//       batchID
//     )};
// });

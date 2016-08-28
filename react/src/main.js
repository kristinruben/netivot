// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CitiesPage from './components/Cities/CitiesPage';
import EventsPage from './components/Events/EventsPage';
// import EventTypePage from './components/EventType/EventTypePage';
// import EventsPage from './components/Events/EventsPage';

$(function() {
  if(document.getElementById('cities')) {
    ReactDOM.render(
      <CitiesPage />,
      document.getElementById('cities')
    )};
});
$(function() {
  if(document.getElementById('events')) {
    ReactDOM.render(
      <EventsPage />,
      document.getElementById('events')
    )};
});

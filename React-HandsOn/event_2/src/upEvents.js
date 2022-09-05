import './App.css';
import React from 'react';
import useFetch from './useFetch';

function Events() {
const {events} = useFetch("http://localhost:8000/events");
  return (
    <div className="App">

      {events.map((event) => (
      <div>
        <h2>
        Title: {event.title}
        </h2>
        <h3>
        Description: {event.desc}
        <p>
        Region: {event.region}
        </p>
        </h3>
        <br></br>
        </div>))}
        
    </div>
  );
  };

export default Events;

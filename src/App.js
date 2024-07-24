
import React from "react";
import ReactDOM from 'react-dom';
import runWax from '@wally-ax/wax-dev-react'
import './App.css';
import Form from './Form';

function App() {
  const waxConfig = {
    rules: [],
    apiKey: "API KEY",
  };
  runWax(React, ReactDOM, waxConfig);
  return (
    <div className="App">
      <p>
        Wally Dev React
      </p>
      <Form />

    </div>
  );
}
export default App;

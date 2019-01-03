import React, { Component } from 'react';
import './App.css';

import Table from "./components/Table/Table";
import DataTable from "./components/DataTable/DataTable";
import Dropdown from "./components/Dropdown/Dropdown";

// import data from './data';

class App extends Component {
  render() {
    const headings = [
      'Fiber',
      'Thatch',
      'Wood',
      'Metal',
      'Hide',
      'Coal',
    ];

    const rows = [
      [
        28,
        40,
        55,
        12,
        0,
        0,
      ],
      [
        28,
        40,
        55,
        12,
        0,
        0,
      ],
      [
        28,
        40,
        55,
        12,
        0,
        0,
      ],
      [
        28,
        40,
        55,
        12,
        0,
        0,
      ],
    ];

    return (
      <div className="App">
        <header className="App-header">
          <h2>Atlas Shipwright's Resource Calculator!</h2>
        </header>
        <Dropdown />
        <DataTable headings={headings} rows={rows} x={6} y={8}/>        
      </div>
    );
  }
}

export default App;

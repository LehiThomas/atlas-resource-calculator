import React, { Component } from "react";
import "./App.css";

import Table from "./components/Table/Table";
import DataTable from "./components/DataTable/DataTable";
import Dropdown from "./components/Dropdown/Dropdown";

// import data from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ship: ""
    };
  }

  setShipFromDropdown = ship => {
    this.setState({ ship: ship });
  };

  render() {
    const headings = ["", "Fiber", "Thatch", "Wood", "Metal", "Hide", "Coal"];

    const rows = [
      ["Ship/Spine", 28, 40, 55, 12, 0, 0],
      ["Decks", 28, 40, 55, 12, 0, 0],
      ["Planks", 28, 40, 55, 12, 0, 0],
      ["Cannon Ports", 28, 40, 55, 12, 0, 0]
    ];

    return (
      <div className="App">
        <header className="App-header">
          <h2>Atlas Shipwright's Resource Calculator!</h2>
        </header>
        <Dropdown setShip={this.setShipFromDropdown} />
        {this.state.ship}
        <DataTable headings={headings} rows={rows} x={6} y={8} />
      </div>
    );
  }
}

export default App;

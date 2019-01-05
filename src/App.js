import React, { Component } from "react";
import "./App.css";

import Dropdown from "./components/Dropdown/Dropdown";
import DataTable from "./components/DataTable/DataTable";
import Shipyard from "./components/Shipyard/Shipyard";

import resources from "./resources.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ship: ""
    };
  }

  setShipFromDropdown = ship => {
    let shipAttributes, shipyard;

    if (ship !== "") {
      shipAttributes = resources.find(item => item.id === ship);
      shipyard = resources.find(item => item.id === shipAttributes.shipyard);
    }

    this.setState({
      ship,
      shipAttributes,
      shipyard
    });
  };

  render() {
    const headings = ["", "Fiber", "Thatch", "Wood", "Metal", "Hide", "Coal"];

    //const rows = [[this.state.shipyard.size, ...this.state.shipyard.resources]];

    return (
      <div className="App">
        <header className="App-header">
          <h2>Atlas Shipwright's Resource Calculator!</h2>
        </header>
        <Dropdown setShip={this.setShipFromDropdown} />
        {this.state.shipAttributes && (
          <div className="shipyard-table">
            <Shipyard shipyard={this.state.shipyard} />
          </div>
        )}
        {/* <Shipyard headings={headings} rows={rows} x={6} y={8} /> */}
      </div>
    );
  }
}

export default App;

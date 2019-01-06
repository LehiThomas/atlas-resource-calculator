import React, { Component } from "react";
import "./App.css";

import Dropdown from "./components/Dropdown/Dropdown";
import Checkbox from "./components/Checkbox/Checkbox";
import ShipCore from "./components/ShipCore/ShipCore";
import Planks from "./components/Planks/Planks";

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
    return (
      <div className="App">
        <header className="App-header">
          <h2>Atlas Shipwright's Resource Calculator!</h2>
        </header>
        <div className="shipcore-table">
          <h4>Ship Core</h4>
          <table className="Table">
            <tbody>
              <tr>
                <td className={`Cell left-cell`}>Rig</td>
                <td className={`Cell middle-cell`}>
                  <Dropdown setShip={this.setShipFromDropdown} />
                </td>
                <td className={`Cell right-cell`}>
                  <Checkbox />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {this.state.shipAttributes && (
          <div>
            <div className="shipcore-table">
              <ShipCore
                ship={this.state.shipAttributes}
                shipyard={this.state.shipyard}
              />
            </div>
            <Planks ship={this.state.shipAttributes} />
          </div>
        )}
      </div>
    );
  }
}

export default App;

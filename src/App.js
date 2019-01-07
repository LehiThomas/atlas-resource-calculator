import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import Dropdown from "./components/Dropdown/Dropdown";
import Checkbox from "./components/Checkbox/Checkbox";
import ShipCore from "./components/ShipCore/ShipCore";
import Planks from "./components/Planks/Planks";

import resources from "./resources.json";

import { addMaterials } from "./redux/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ship: "",
      rigDisplay: "materials-table"
    };
  }

  setShipFromDropdown = ship => {
    let shipAttributes, shipyard, steeringWheel;

    if (ship !== "") {
      shipAttributes = resources.find(item => item.id === ship);
      shipyard = resources.find(item => item.id === shipAttributes.shipyard);
      steeringWheel = resources.find(item => item.id === "STEERINGWHEEL");
    }

    this.setState({
      ship,
      shipAttributes,
      shipyard,
      steeringWheel
    });
  };

  handleDisplayChange = event => {
    const target = event.target;
    const id = target.id;

    const value =
      this.state[id] === "materials-table" ? "hide-table" : "materials-table";

    this.setState({
      [id]: value
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
                <td
                  id="rigDisplay"
                  className={`Cell left-cell`}
                  onClick={this.handleDisplayChange}
                >
                  Rig
                </td>
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
                steeringWheel={this.state.steeringWheel}
                rigDisplay={this.state.rigDisplay}
              />
            </div>
            <Planks ship={this.state.shipAttributes} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  totalResources: state.resources
});

const mapDispatchToProps = dispatch => ({
  addMaterialsToTotal: resources => addMaterials(resources)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// const mapStateToProps = ({ user, eventReducer }) => ({
// 	user: user,
// 	eventType: eventReducer.eventType,
// 	event: eventReducer.event
// });

// mapDispatchToProps = dispatch => ({
// 	setLocation: event => dispatch(updateEvent(event))
// });

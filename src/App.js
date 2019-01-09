import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import Dropdown from "./components/Dropdown/Dropdown";
import Checkbox from "./components/Checkbox/Checkbox";
import ShipCore from "./components/ShipCore/ShipCore";
import Planks from "./components/Planks/Planks";
import AllResources from "./components/AllResources/AllResources";

import resources from "./resources.json";

import { setShip } from "./redux/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ship: "",
      isShipSet: false,
      rigDisplay: "materials-table"
    };
  }

  setShipFromDropdown = ship => {
    let shipAttributes = resources.find(item => item.id === ship);
    this.props.setShip(shipAttributes);

    this.setState({
      isShipSet: true
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
        {
          this.state.isShipSet && (
            <div>
              <div className="shipcore-table">
                <ShipCore rigDisplay={this.state.rigDisplay} />
              </div>
              {/* <Planks /> */}
            </div>
          )}
        {
          this.props.mats && (
            <AllResources />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ship: state.shipReducer,
  mats: state.materialsReducer
});

const mapDispatchToProps = dispatch => ({
  setShip: ship => dispatch(setShip(ship))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

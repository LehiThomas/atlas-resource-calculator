import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import SailPoints from "./components/SailPoints/SailPoints";
import Cannons from "./components/Cannons/Cannons";
import ShipCore from "./components/ShipCore/ShipCore";
import PlanksGunports from "./components/PlanksGunports/PlanksGunports";
import AllResources from "./components/AllResources/AllResources";
import Ceilings from "./components/Ceilings/Ceilings";
import ItemRowTable from "./components/ItemRowTable/ItemRowTable";

import resources from "./resources.json";

import { setShip } from "./redux/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ship: "",
      isShipSet: false
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
    const { ship } = this.props;

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
                <td colSpan="4" className="subTableCell">
                  <ItemRowTable
                    resources={ship.resources}
                    name={"Rig"}
                    setShip={this.setShipFromDropdown}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {this.state.isShipSet && (
          <div>
            <div className="shipcore-table">
              <ShipCore rigDisplay={this.state.rigDisplay} />
            </div>
            {ship.planks.quantity > 0 && <PlanksGunports />}
            {ship.sailUnits > 0 && <SailPoints />}
            {ship.gunports.quantity > 0 && <Cannons />}
            {ship.gunports.quantity > 0 && <Ceilings />}
          </div>
        )}
        {this.props.mats && <AllResources />}
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

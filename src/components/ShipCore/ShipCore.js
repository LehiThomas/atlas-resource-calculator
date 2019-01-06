import * as React from "react";
import "./ShipCore.css";

import Checkbox from "../Checkbox/Checkbox";
import Materials from "../Materials/Materials";

import { deckData } from "../../constants/deckConstants";

export default class ShipSpine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipyardDisplay: "materials-table",
      steeringWheelDisplay: "materials-table",
      decksDisplay: "materials-table"
    };
  }

  getShipyard = () => {
    const { ship } = this.props;
    let shipyard;
    switch (ship.shipyard) {
      case "largeShipyard":
        shipyard = "Large Shipyard";
        break;
      case "smallShipyard":
        shipyard = "Small Shipyard";
        break;
      case "tinyShipyard":
        shipyard = "Tiny Shipyard";
        break;
      default:
        break;
    }
    return shipyard;
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
    const { ship, shipyard, steeringWheel } = this.props;
    let shipyardName = this.getShipyard();

    let hasWheel = false;
    if (ship.shipyard !== "tinyShipyard") {
      hasWheel = true;
    }
    let deckSize = ship.decks.type;

    return (
      <div>
        <table className="Table">
          <tbody>
            <tr>
              <td colSpan="4" className="subTableCell">
                <Materials
                  resources={ship.resources}
                  display={this.props.rigDisplay}
                />
              </td>
            </tr>
            <tr>
              <td
                id="shipyardDisplay"
                className={`Cell left-cell`}
                onClick={this.handleDisplayChange}
              >
                Shipyard
              </td>
              <td className={`Cell middle-cell`}>{shipyardName}</td>
              <td className={`Cell right-cell`}>
                <Checkbox />
              </td>
            </tr>
            <tr>
              <td colSpan="4" className="subTableCell">
                <Materials
                  resources={shipyard.resources}
                  display={this.state.shipyardDisplay}
                />
              </td>
            </tr>
            {hasWheel && (
              <tr>
                <td colSpan="4" className="subTableCell">
                  <table className="Table">
                    <tbody>
                      <tr>
                        <td
                          id="steeringWheelDisplay"
                          className={`Cell left-cell`}
                          onClick={this.handleDisplayChange}
                        >
                          Steering Wheel
                        </td>
                        <td className={`Cell middle-cell`}>1</td>
                        <td className={`Cell right-cell`}>
                          <Checkbox />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4" className="subTableCell">
                          <Materials
                            resources={steeringWheel.resources}
                            display={this.state.steeringWheelDisplay}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          id="decksDisplay"
                          className={`Cell left-cell`}
                          onClick={this.handleDisplayChange}
                        >
                          Decks ({deckSize})
                        </td>
                        <td className={`Cell middle-cell`}>
                          {ship.decks.quantity}
                        </td>
                        <td className={`Cell right-cell`}>
                          <Checkbox />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4" className="subTableCell">
                          <Materials
                            resources={deckData[deckSize]}
                            display={this.state.decksDisplay}
                            multiplier={ship.decks.quantity}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

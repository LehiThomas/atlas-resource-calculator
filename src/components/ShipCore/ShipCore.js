import * as React from "react";
import Cell from "../Cell/Cell";
import "./ShipCore.css";

import Checkbox from "../Checkbox/Checkbox";
import Materials from "../Materials/Materials";

export default class ShipSpine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    const { ship } = this.props;
    let shipyard = this.getShipyard();

    let wheel;
    if (ship.shipyard !== "tinyShipyard") {
      wheel = 1;
    } else {
      wheel = 0;
    }
    let deckSize = ship.decks.type;

    return (
      <div>
        <table className="Table">
          <tbody>
            <tr>
              <td className={`Cell left-cell`}>Shipyard</td>
              <td className={`Cell middle-cell`}>{shipyard}</td>
              <td className={`Cell right-cell`}>
                <Checkbox />
              </td>
            </tr>
            <tr>
              <td>
                <Materials resources={this.props.shipyard.resources} />
              </td>
            </tr>
            <tr>
              <td className={`Cell left-cell`}>Steering Wheel</td>
              <td className={`Cell middle-cell`}>{wheel}</td>
              <td className={`Cell right-cell`}>
                <Checkbox />
              </td>
            </tr>
            <tr>
              <td className={`Cell left-cell`}>Decks ({deckSize})</td>
              <td className={`Cell middle-cell`}>
                {this.props.ship.decks.quantity}
              </td>
              <td className={`Cell right-cell`}>
                <Checkbox />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

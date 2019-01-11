import * as React from "react";
import { connect } from "react-redux";

import "./ShipCore.css";

import Checkbox from "../Checkbox/Checkbox";
import Materials from "../Materials/Materials";
import ItemRowTable from "../ItemRowTable/ItemRowTable";

import { deckData } from "../../constants/deckConstants";
import { shipyardData } from "../../constants/shipyardConstants";
import { steeringWheel } from "../../constants/steeringWheelConstants";

import { addMaterials, subtractMaterials } from "../../redux/actions";

class ShipCore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getShipyard = () => {
    const { ship } = this.props;
    let shipyard, shipyardTitle;
    switch (ship.shipyard) {
      case "largeShipyard":
        shipyardTitle = "Large";
        shipyard = shipyardData.large;
        break;
      case "smallShipyard":
        shipyardTitle = "Small";
        shipyard = shipyardData.small;
        break;
      case "tinyShipyard":
        shipyardTitle = "Tiny";
        shipyard = shipyardData.tiny;
        break;
      default:
        break;
    }

    return { resources: shipyard, name: shipyardTitle };
  };

  render() {
    const { ship } = this.props;
    let shipyard = this.getShipyard();

    let hasWheel = ship.shipyard !== "tinyShipyard" ? true : false;
    let deckSize = ship.decks.type;

    return (
      <div>
        <table className="Table">
          <tbody>
            <tr>
              <td colSpan="4" className="subTableCell">
                <ItemRowTable
                  quantity={1}
                  resources={shipyard.resources}
                  type={shipyard.name}
                  name={"Shipyard"}
                />
              </td>
            </tr>
            {hasWheel && (
              <tr>
                <td colSpan="4" className="subTableCell">
                  <table className="Table">
                    <tbody>
                      <tr>
                        <td colSpan="4" className="subTableCell">
                          <ItemRowTable
                            quantity={1}
                            resources={steeringWheel}
                            name={"Steering Wheel"}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4" className="subTableCell">
                          <ItemRowTable
                            quantity={ship.decks.quantity}
                            resources={deckData[deckSize]}
                            type={deckSize}
                            name={"Decks"}
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

const mapStateToProps = state => ({
  ship: state.shipReducer
});

const mapDispatchToProps = dispatch => ({
  addMaterialsToTotal: resources => dispatch(addMaterials(resources)),
  subtractMaterialsFromTotal: resources =>
    dispatch(subtractMaterials(resources))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipCore);

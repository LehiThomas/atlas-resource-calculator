import * as React from "react";
import { connect } from "react-redux";

import "./ShipCore.css";

import Checkbox from "../Checkbox/Checkbox";
import Materials from "../Materials/Materials";

import { deckData } from "../../constants/deckConstants";
import { shipyardData } from "../../constants/shipyardConstants";
import { steeringWheel } from "../../constants/steeringWheelConstants";

import { addMaterials, subtractMaterials } from "../../redux/actions";

class ShipCore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipyardDisplay: "materials-table",
      steeringWheelDisplay: "materials-table",
      decksDisplay: "materials-table",
      shipyardCheckBox: false
    };
  }

  getShipyard = () => {
    const { ship } = this.props;
    let shipyard, shipyardTitle;
    switch (ship.shipyard) {
      case "largeShipyard":
        shipyardTitle = "Large Shipyard";
        shipyard = shipyardData.large;
        break;
      case "smallShipyard":
        shipyardTitle = "Small Shipyard";
        shipyard = shipyardData.small;
        break;
      case "tinyShipyard":
        shipyardTitle = "Tiny Shipyard";
        shipyard = shipyardData.tiny;
        break;
      default:
        break;
    }

    return { resources: shipyard, name: shipyardTitle };
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

  isChecked = (checked, matType) => {
    // let multiplier = 1;
    // if (this.props.multiplier) {
    //   multiplier = this.props.multiplier;
    // }

    let resources = matType

    if (!checked) {
      this.props.addIndividualMaterials(resources);
    } else {
      this.props.subtractMaterialsFromTotal(resources);
    }
  };

  render() {
    const { ship } = this.props;
    let shipyard = this.getShipyard();

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
                  parent={"Rig"}
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
              <td className={`Cell middle-cell`}>{shipyard.name}</td>
              <td className={`Cell right-cell`}>
                <Checkbox isChecked={this.isChecked} matType={shipyard.resources} />
              </td>
            </tr>
            <tr>
              <td colSpan="4" className="subTableCell">
                <Materials
                  resources={shipyard.resources}
                  display={this.state.shipyardDisplay}
                  parent={"Shipyard"}
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
                            resources={steeringWheel}
                            display={this.state.steeringWheelDisplay}
                            parent={"Steering Wheel"}
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
                            parent={"Decks"}
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

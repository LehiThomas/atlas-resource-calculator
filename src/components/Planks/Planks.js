import * as React from "react";
import { connect } from "react-redux";
import "./Planks.css";

import Checkbox from "../Checkbox/Checkbox";
import ItemRowTable from "../ItemRowTable/ItemRowTable";

import { addMaterials, subtractMaterials } from "../../redux/actions";
class Planks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { ship } = this.props;

    let plankSize = ship.planks.type;
    let gunSize = ship.gunports.type;

    return (
      <div className="shipcore-table">
        <h4>Planks/Gunports</h4>
        <table className="Table">
          <tbody>
            <tr>
              <td colSpan="4" className="subTableCell">
                <ItemRowTable
                  quantity={ship.planks.quantity}
                  resources={ship.resources}
                  display={this.state.shipyardDisplay}
                  name={"Planks"}
                />
              </td>
            </tr>
            <tr>
              <td className={`Cell left-cell`}>Planks ({plankSize})</td>
              <td className={`Cell middle-cell`}>{ship.planks.quantity}</td>
              <td className={`Cell right-cell`}>
                <Checkbox />
              </td>
            </tr>
            {gunSize !== "none" && (
              <tr>
                <td className={`Cell left-cell`}>Gunports ({gunSize})</td>
                <td className={`Cell middle-cell`}>0</td>
                <td className={`Cell right-cell`}>
                  <Checkbox />
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
)(Planks);

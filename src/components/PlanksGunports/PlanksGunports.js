import * as React from "react";
import { connect } from "react-redux";
import "./PlanksGunports.css";

import ItemRowTable from "../ItemRowTable/ItemRowTable";

import { plankData } from "../../constants/plankConstants";
import { gunportData } from "../../constants/gunportConstants";

import { addMaterials, subtractMaterials } from "../../redux/actions";

class PlanksGunports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { ship } = this.props;

    return (
      <div className="shipcore-table">
        <h4>Planks/Gunports</h4>
        <table className="Table">
          <tbody>
            <tr>
              <td colSpan="4" className="subTableCell">
                <ItemRowTable
                  quantity={ship.planks.quantity}
                  resources={plankData[ship.planks.type]}
                  type={ship.planks.type}
                  name={"Planks"}
                />
              </td>
            </tr>
            {ship.gunports.type !== "none" && (
              <tr>
                <td colSpan="4" className="subTableCell">
                  <ItemRowTable
                    quantity={ship.gunports.quantity}
                    resources={gunportData[ship.gunports.type]}
                    type={ship.gunports.type}
                    name={"Gunports"}
                  />
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
)(PlanksGunports);

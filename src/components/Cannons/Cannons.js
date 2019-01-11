import * as React from "react";
import { connect } from "react-redux";
import "./Cannons.css";

import ItemRowTable from "../ItemRowTable/ItemRowTable";

import { cannonData } from "../../constants/cannonConstants";

import { addMaterials, subtractMaterials } from "../../redux/actions";

class Cannons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { ship } = this.props;

    return (
      <div className="shipcore-table">
        <h4>Available Gunports - 0</h4>
        <table className="Table">
          <tbody>
            <tr>
              <td colSpan="4" className="subTableCell">
                <ItemRowTable
                  quantity={1}
                  resources={cannonData.medium}
                  name={"Cannons Medium"}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="4" className="subTableCell">
                <ItemRowTable
                  quantity={1}
                  resources={cannonData.large}
                  name={"Cannons Large"}
                />
              </td>
            </tr>
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
)(Cannons);

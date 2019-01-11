import * as React from "react";
import { connect } from "react-redux";
import "./Ceilings.css";

import ItemRowTable from "../ItemRowTable/ItemRowTable";

import { ceilingData } from "../../constants/ceilingConstants";

class Ceilings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { ship } = this.props;

    return (
      <div className="shipcore-table">
        <h4>Max Ceilings - {ship.ceilings}</h4>
        <table className="Table">
          <tbody>
            <tr>
              <td colSpan="4" className="subTableCell">
                <ItemRowTable
                  quantity={1}
                  resources={ceilingData}
                  name={"Ceilings"}
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

export default connect(mapStateToProps)(Ceilings);

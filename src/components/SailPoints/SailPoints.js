import * as React from "react";
import { connect } from "react-redux";

import "./SailPoints.css";

import ItemRowTable from "../ItemRowTable/ItemRowTable";

import { sailData } from "../../constants/sailConstants";

class SailPoints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { ship } = this.props;

    return (
      <div className="shipcore-table">
        <h4>Sail Points - {ship.sailUnits}</h4>
        <table className="Table">
          <tbody>
            <tr>
              <td colSpan="4" className="subTableCell">
                <ItemRowTable
                  quantity={1}
                  resources={sailData.small}
                  name={"Sails Small"}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="4" className="subTableCell">
                <table className="Table">
                  <tbody>
                    <tr>
                      <td colSpan="4" className="subTableCell">
                        <ItemRowTable
                          quantity={1}
                          resources={sailData.medium}
                          name={"Sails Medium"}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="4" className="subTableCell">
                        <ItemRowTable
                          quantity={1}
                          resources={sailData.large}
                          name={"Sails Large"}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default connect(mapStateToProps)(SailPoints);

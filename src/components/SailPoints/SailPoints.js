import * as React from "react";
import { connect } from "react-redux";

import "./SailPoints.css";

import ItemRowTable from "../ItemRowTable/ItemRowTable";

import { sailData } from "../../constants/sailConstants";

class SailPoints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sailPoints: 0,
      small: 0,
      medium: 0,
      large: 0
    };
  }

  setSailUnits = (value, name) => {
    let { small, large, medium } = this.state;
    let size, sailPoints;
    if (name === "Sails Small") {
      size = "small";
      small = value;
    } else if (name === "Sails Medium") {
      size = "medium";
      medium = value;
    } else if (name === "Sails Large") {
      size = "large";
      large = value;
    }
    sailPoints = (small * 1 + medium * 1.7 + large * 2.7).toFixed(1);
    this.setState({
      sailPoints: sailPoints,
      [size]: value
    });
  };

  render() {
    const { ship } = this.props;

    let style = "";
    if (this.state.sailPoints > ship.sailUnits) {
      style = "red-title";
    }

    return (
      <div className="shipcore-table">
        <h4 className={style}>
          Sail Points - {this.state.sailPoints}/{ship.sailUnits}
        </h4>
        <table className="Table">
          <tbody>
            <tr>
              <td colSpan="4" className="subTableCell">
                <ItemRowTable
                  quantity={this.state.small}
                  resources={sailData.small}
                  name={"Sails Small"}
                  setInputValue={this.setSailUnits}
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
                          quantity={this.state.medium}
                          resources={sailData.medium}
                          name={"Sails Medium"}
                          setInputValue={this.setSailUnits}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="4" className="subTableCell">
                        <ItemRowTable
                          quantity={this.state.large}
                          resources={sailData.large}
                          name={"Sails Large"}
                          setInputValue={this.setSailUnits}
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

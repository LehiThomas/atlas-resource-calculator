import * as React from "react";
import { connect } from "react-redux";
import "./Cannons.css";

import ItemRowTable from "../ItemRowTable/ItemRowTable";

import { cannonData } from "../../constants/cannonConstants";

import { addMaterials, subtractMaterials } from "../../redux/actions";

class Cannons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      large: 0,
      medium: 0
    };
  }

  setCannonValue = (value, name) => {
    if (name === "Cannons Medium") {
      this.setState({ medium: value });
    } else if (name === "Cannons Large") {
      this.setState({ large: value });
    }
  };

  getCannonMax = availableGunports => {
    const { medium, large } = this.state;
    let max = availableGunports - medium - large;
    return max;
  };

  render() {
    let { ship } = this.props;

    let availableGunports = ship.availableGunports ? ship.availableGunports : 0;

    let style = "";
    let cannons = parseInt(this.state.medium) + parseInt(this.state.large);
    if (cannons > availableGunports) {
      style = "red-title";
    }

    return (
      <div className="shipcore-table">
        <h4 className={style}>Available Gunports - {availableGunports}</h4>
        <table className="Table">
          <tbody>
            <tr>
              <td colSpan="4" className="subTableCell">
                <ItemRowTable
                  quantity={this.state.medium}
                  resources={cannonData.medium}
                  name={"Cannons Medium"}
                  setInputValue={this.setCannonValue}
                  max={this.getCannonMax(availableGunports) + this.state.medium}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="4" className="subTableCell">
                <ItemRowTable
                  quantity={this.state.large}
                  resources={cannonData.large}
                  name={"Cannons Large"}
                  setInputValue={this.setCannonValue}
                  max={this.getCannonMax(availableGunports) + this.state.large}
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

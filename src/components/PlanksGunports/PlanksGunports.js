import * as React from "react";
import { connect } from "react-redux";
import "./PlanksGunports.css";

import ItemRowTable from "../ItemRowTable/ItemRowTable";

import { plankData } from "../../constants/plankConstants";
import { gunportData } from "../../constants/gunportConstants";

import { updateAvailableGunports } from "../../redux/actions";

class PlanksGunports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gunports: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.ship.id !== this.props.ship.id) {
      this.setState({ gunports: 0 });
    }
  }

  setGunportValue = value => {
    this.setState({ gunports: value });
    this.props.updateGunports(value);
  };

  getPlankQuantity = () => {
    return this.props.ship.planks.quantity - this.state.gunports;
  };

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
                  quantity={this.getPlankQuantity()}
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
                    max={ship.gunports.quantity}
                    quantity={this.state.gunports}
                    resources={gunportData[ship.gunports.type]}
                    type={ship.gunports.type}
                    name={"Gunports"}
                    setInputValue={this.setGunportValue}
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
  updateGunports: gunports => dispatch(updateAvailableGunports(gunports))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanksGunports);

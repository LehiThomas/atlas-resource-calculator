import * as React from "react";
import { connect } from "react-redux";
import "./ItemRowTable.css";

import Checkbox from "../Checkbox/Checkbox";
import Dropdown from "../Dropdown/Dropdown";
import MaterialRow from "../MaterialRow/MaterialRow";
import Input from "../Input/Input";

import {
  addMaterials,
  subtractMaterials,
  addMaterialsFromCheckbox
} from "../../redux/actions";

class ItemRowTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMats: true,
      itemCheck: false
    };
  }

  componentDidMount() {
    this.props.addMaterialsToTotal(this.props.resources, this.props.quantity);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.ship.id !== this.props.ship.id) {
      this.setState({ itemCheck: false });
    }

    if (
      prevProps.ship.id !== this.props.ship.id ||
      prevProps.quantity !== this.props.quantity
    ) {
      this.props.addMaterialsToTotal(this.props.resources, this.props.quantity);
    }
  }

  setShipFromDropdown = ship => {
    this.props.setShip(ship);
  };

  toggleMats = () => {
    const value = this.state.showMats === true ? false : true;

    this.setState({
      showMats: value
    });
  };

  getQuantity = () => {
    if (!isNaN(this.props.quantity)) {
      return this.props.quantity;
    } else {
      return 1;
    }
  };

  isItemChecked = checked => {
    this.setState({ showMats: true }, () => {
      this.setState({ itemCheck: checked });
    });
  };

  renderRow = () => {
    const { resources } = this.props;
    let multiplier = this.getQuantity();
    const keys = this.getKeys();

    return keys.map(key => {
      let numberOfMats = resources[key];
      return (
        <MaterialRow
          key={key}
          matType={key}
          numberOfMats={numberOfMats}
          multiplier={multiplier}
          isChecked={this.isMatChecked}
          isItemChecked={this.state.itemCheck}
        />
      );
    });
  };

  getKeys = resources => {
    if (this.props.resources) {
      return Object.keys(this.props.resources);
    } else {
      return [];
    }
  };

  setInputValue = value => {
    this.props.setInputValue(value, this.props.name);
  };

  setMiddleCell = name => {
    let conditions = ["Gunports", "Sails", "Cannons", "Ceilings"];
    if (name === "Rig") {
      return <Dropdown setShip={this.setShipFromDropdown} />;
    } else if (conditions.some(el => name.includes(el))) {
      return <Input max={this.props.max} setInputValue={this.setInputValue} />;
    } else {
      return this.props.quantity;
    }
  };

  render() {
    const { type, name } = this.props;

    let materialRows = this.renderRow();

    let itemName = name;
    if (type) {
      itemName = `${name} (${type})`;
    }

    let middleCell = this.setMiddleCell(name);
    let middleCellStyle = this.state.itemCheck
      ? "Cell middle-cell checked"
      : "Cell middle-cell";

    return (
      <div className="row-table">
        <table className="Table">
          <tbody>
            <tr>
              <td onClick={this.toggleMats} className={`Cell left-cell`}>
                {itemName}
              </td>
              <td className={middleCellStyle}>{middleCell}</td>
              <td className={`Cell right-cell`}>
                <Checkbox
                  isChecked={this.isItemChecked}
                  isItemChecked={this.state.itemCheck}
                />
              </td>
            </tr>
            {this.state.showMats && (
              <tr>
                <td colSpan="4" className="subTableCell">
                  <table className={`Table row-table`}>
                    <tbody>{materialRows}</tbody>
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
  addMaterialsToTotal: (resources, multiplier) =>
    dispatch(addMaterials(resources, multiplier))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemRowTable);

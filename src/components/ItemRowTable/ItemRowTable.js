import * as React from "react";
import { connect } from "react-redux";
import "./ItemRowTable.css";

import Checkbox from "../Checkbox/Checkbox";
import Dropdown from "../Dropdown/Dropdown";
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
    if (
      prevProps.resources !== this.props.resources ||
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

  isMatChecked = (checked, matType) => {
    let multiplier = this.getQuantity();

    let resource = { [matType]: this.props.resources[matType] * multiplier };

    if (!checked) {
      this.props.addIndividualMaterials(resource);
    } else {
      this.props.subtractMaterialsFromTotal(resource);
    }
  };

  isItemChecked = checked => {
    this.setState({ showMats: true }, () => {
      this.setState({ itemCheck: checked });
    });
  };

  renderRow = (key, numberOfMats) => {
    let multiplier = this.getQuantity();
    return (
      <tr key={key}>
        <td className={`Cell left-row-cell`}>{key} </td>
        <td className={`Cell middle-cell`}>{numberOfMats * multiplier}</td>
        <td className={`Cell right-cell`}>
          <Checkbox
            matType={key}
            isChecked={this.isMatChecked}
            isItemChecked={this.state.itemCheck}
          />
        </td>
      </tr>
    );
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
    if (name === "Rig") {
      return <Dropdown setShip={this.setShipFromDropdown} />;
    } else if (
      name === "Gunports" ||
      name.includes("Sails") ||
      name.includes("Cannons")
    ) {
      return <Input max={this.props.max} setInputValue={this.setInputValue} />;
    } else {
      return this.props.quantity;
    }
  };

  render() {
    const { resources, type, name } = this.props;
    const keys = this.getKeys();

    let materialRows = keys.map(key => {
      let numberOfMats = resources[key];
      return this.renderRow(key, numberOfMats);
    });

    let itemName = name;
    if (type) {
      itemName = `${name} (${type})`;
    }

    let middleCell = this.setMiddleCell(name);

    return (
      <div className="row-table">
        <table className="Table">
          <tbody>
            <tr>
              <td onClick={this.toggleMats} className={`Cell left-cell`}>
                {itemName}
              </td>
              <td className={`Cell middle-cell`}>{middleCell}</td>
              <td className={`Cell right-cell`}>
                <Checkbox isChecked={this.isItemChecked} />
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
    dispatch(addMaterials(resources, multiplier)),
  subtractMaterialsFromTotal: resources =>
    dispatch(subtractMaterials(resources)),
  addIndividualMaterials: resources =>
    dispatch(addMaterialsFromCheckbox(resources))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemRowTable);

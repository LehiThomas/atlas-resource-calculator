import * as React from "react";
import { connect } from "react-redux";
import "./ItemRowTable.css";

import Checkbox from "../Checkbox/Checkbox";

import { addMaterials, subtractMaterials } from "../../redux/actions";

class ItemRowTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRow = (key, numberOfMats) => {
    let multiplier = 1;
    if (this.props.multiplier) {
      multiplier = this.props.multiplier;
    }
    return (
      <tr key={key}>
        <td className={`Cell left-row-cell`}>{key} </td>
        <td className={`Cell middle-cell`}>{numberOfMats * multiplier}</td>
        <td className={`Cell right-cell`}>
          <Checkbox matType={key} isChecked={this.isChecked} />
        </td>
      </tr>
    );
  };

  render() {
    const { resources, display } = this.props;
    const keys = Object.keys(resources);

    let materialRows = keys.map(key => {
      let numberOfMats = resources[key];
      return this.renderRow(key, numberOfMats);
    });

    return (
      <div className="row-table">
        <table className="Table">
          <tbody>
            <tr>
              <td className={`Cell left-cell`}>{this.props.name}</td>
              <td className={`Cell middle-cell`}>{this.props.quantity}</td>
              <td className={`Cell right-cell`}>
                <Checkbox />
              </td>
            </tr>
            {materialRows}
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
)(ItemRowTable);

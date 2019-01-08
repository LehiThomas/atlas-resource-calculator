import * as React from "react";
import { connect } from "react-redux";
import "./Materials.css";

import Checkbox from "../Checkbox/Checkbox";

import { addMaterials, addMaterialsFromCheckbox, subtractMaterials } from "../../redux/actions";

class Materials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.addMaterialsToTotal(this.props.resources);
  }

  componentDidUpdate() {
    this.props.addMaterialsToTotal(this.props.resources);
  }

  isChecked = (checked, matType) => {
    let multiplier = 1;
    if (this.props.multiplier) {
      multiplier = this.props.multiplier;
    }

    let resource = { [matType]: this.props.resources[matType] * multiplier }

    if (checked) {
      this.props.addMaterialsToTotal(resource);
    } else {
      this.props.subtractMaterialsFromTotal(resource);
    }
  };

  renderRow = (key, numberOfMats) => {
    let multiplier = 1;
    if (this.props.multiplier) {
      multiplier = this.props.multiplier;
    }
    return (
      <tr key={key}>
        <td className={`Cell left-material-cell`}>{key} </td>
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
    let tbodyMarkup = keys.map(key => {
      let numberOfMats = resources[key];
      return this.renderRow(key, numberOfMats);
    });

    return (
      <table className={`Table ${display}`}>
        <tbody>{tbodyMarkup}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  totalResources: state.resources
});

const mapDispatchToProps = dispatch => ({
  addMaterialsToTotal: resources => dispatch(addMaterialsFromCheckbox(resources)),
  subtractMaterialsFromTotal: resources =>
    dispatch(subtractMaterials(resources))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Materials);

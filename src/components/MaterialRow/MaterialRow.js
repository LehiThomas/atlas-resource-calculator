import * as React from "react";
import { connect } from "react-redux";
import "./MaterialRow.css";

import Checkbox from "../Checkbox/Checkbox";

import {
  subtractMaterials,
  addMaterialsFromCheckbox
} from "../../redux/actions";

class MaterialRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCheck: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.ship.id !== this.props.ship.id) {
      this.setState({ itemCheck: false });
    }

    if (
      prevProps.resources !== this.props.resources ||
      prevProps.quantity !== this.props.quantity
    ) {
      this.props.addMaterialsToTotal(this.props.resources, this.props.quantity);
    }
  }

  isMatChecked = (checked, matType) => {
    const { numberOfMats, multiplier } = this.props;

    let resource = { [matType]: numberOfMats * multiplier };

    if (this.state.itemCheck !== checked) {
      if (!checked) {
        this.props.addIndividualMaterials(resource);
      } else {
        this.props.subtractMaterialsFromTotal(resource);
      }

      this.setState({ itemCheck: checked });
    }
  };

  render() {
    const { numberOfMats, matType, multiplier, isItemChecked } = this.props;

    let middleCellStyle = this.state.itemCheck
      ? "Cell middle-cell checked"
      : "Cell middle-cell";

    return (
      <tr>
        <td className={`Cell left-row-cell`}>{matType} </td>
        <td className={middleCellStyle}>{numberOfMats * multiplier}</td>
        <td className={`Cell right-cell`}>
          <Checkbox
            matType={matType}
            isChecked={this.isMatChecked}
            isItemChecked={isItemChecked}
            isMatChecked={this.state.itemCheck}
          />
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  ship: state.shipReducer
});

const mapDispatchToProps = dispatch => ({
  subtractMaterialsFromTotal: resources =>
    dispatch(subtractMaterials(resources)),
  addIndividualMaterials: resources =>
    dispatch(addMaterialsFromCheckbox(resources))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialRow);

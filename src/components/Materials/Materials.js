import * as React from "react";
import "./Materials.css";

import Checkbox from "../Checkbox/Checkbox";

export default class Materials extends React.Component {
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
        <td className={`Cell left-material-cell`}>{key} </td>
        <td className={`Cell middle-cell`}>{numberOfMats * multiplier}</td>
        <td className={`Cell right-cell`}>
          <Checkbox />
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

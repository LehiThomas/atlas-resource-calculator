import * as React from "react";
import Cell from "../Cell/Cell";
// import "./Materials.css";

import Checkbox from "../Checkbox/Checkbox";

export default class Materials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRow = (key, numberOfMats) => {
    return (
      <tr key={key}>
        <td className={`Cell left-cell`}>{key} </td>
        <td className={`Cell middle-cell`}>{numberOfMats}</td>
        <td className={`Cell right-cell`}>
          <Checkbox />
        </td>
      </tr>
    );
  };

  render() {
    const { resources } = this.props;
    const keys = Object.keys(resources);
    let tbodyMarkup = keys.map(key => {
      let numberOfMats = resources[key];
      return this.renderRow(key, numberOfMats);
    });

    return (
      <table className={`Table materials-table`}>
        <tbody className={`Table materials-table`}>{tbodyMarkup}</tbody>
      </table>
    );
  }
}

import * as React from "react";
import "./Planks.css";

import Checkbox from "../Checkbox/Checkbox";

export default class Planks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { ship } = this.props;

    let plankSize = ship.planks.type;
    let gunSize = ship.gunports.type;

    return (
      <div className="shipcore-table">
        <h4>Planks/Gunports</h4>
        <table className="Table">
          <tbody>
            <tr>
              <td className={`Cell left-cell`}>Planks ({plankSize})</td>
              <td className={`Cell middle-cell`}>{ship.planks.quantity}</td>
              <td className={`Cell right-cell`}>
                <Checkbox />
              </td>
            </tr>
            {gunSize !== "none" && (
              <tr>
                <td className={`Cell left-cell`}>Gunports ({gunSize})</td>
                <td className={`Cell middle-cell`}>0</td>
                <td className={`Cell right-cell`}>
                  <Checkbox />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

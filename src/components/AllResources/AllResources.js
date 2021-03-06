import * as React from "react";
import { connect } from "react-redux";

import "./AllResources.css";

class AllResources extends React.Component {
  render() {
    let { mats } = this.props;

    return (
      <div className={`shipcore-table all-resources-table`}>
        <h4>All Resources</h4>
        <table className="Table">
          <tbody>
            <tr>
              <td className={`Cell middle-cell`}>Wood</td>
              <td className={`Cell middle-cell`}>{mats.wood}</td>
              <td className={`Cell right-allResources-cell`} />
            </tr>
            <tr>
              <td className={`Cell middle-cell`}>Thatch</td>
              <td className={`Cell middle-cell`}>{mats.thatch}</td>
            </tr>
            <tr>
              <td className={`Cell middle-cell`}>Fiber</td>
              <td className={`Cell middle-cell`}>{mats.fiber}</td>
            </tr>
            <tr>
              <td className={`Cell middle-cell`}>Hide</td>
              <td className={`Cell middle-cell`}>{mats.hide}</td>
            </tr>
            <tr>
              <td className={`Cell middle-cell`}>Stone</td>
              <td className={`Cell middle-cell`}>{mats.stone}</td>
            </tr>
            <tr>
              <td className={`Cell middle-cell`}>Metal</td>
              <td className={`Cell middle-cell`}>{mats.metal}</td>
            </tr>
            <tr>
              <td className={`Cell middle-cell`}>Coal</td>
              <td className={`Cell middle-cell`}>{mats.coal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mats: state.materialsReducer
});

export default connect(mapStateToProps)(AllResources);

import * as React from "react";
import Cell from "../Cell/Cell";
import "./ShipSpine.css";

export default class ShipSpine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headings: ["Fiber", "Thatch", "Wood", "Metal", "Hide"]
    };
  }

  renderHeadingRow = (_cell, cellIndex) => {
    const { headings } = this.state;
    return (
      <Cell
        key={`heading-${cellIndex}`}
        content={headings[cellIndex]}
        header={true}
      />
    );
  };

  renderRow = (_row, rowIndex) => {
    const { resources } = this.props.ship;

    return (
      <tr key={`shipSpineRow`}>
        <Cell content={resources.fiber} />
        <Cell content={resources.thatch} />
        <Cell content={resources.wood} />
        <Cell content={resources.metal} />
        <Cell content={resources.hide} />
      </tr>
    );
  };

  render() {
    const { headings } = this.state;

    this.renderHeadingRow = this.renderHeadingRow.bind(this);
    this.renderRow = this.renderRow.bind(this);

    const theadMarkup = (
      <tr key="heading">{headings.map(this.renderHeadingRow)}</tr>
    );
    const tbodyMarkup = this.renderRow();

    return (
      <div>
        <h3>Ship/Spine Materials:</h3>
        <table className="Table">
          <thead>{theadMarkup}</thead>
          <tbody>{tbodyMarkup}</tbody>
        </table>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../Dropdown/Dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.setShip(event.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="">Ship</option>
            <option value="RAFT">Raft</option>
            <option value="DINGHY">Dinghy</option>
            <option value="SLOOP">Sloop</option>
            <option value="SCHOONER">Schooner</option>
            <option value="BRIGANTINE">Brigantine</option>
            <option value="GALLEON">Galleon</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Dropdown;

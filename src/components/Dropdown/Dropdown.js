import React, { Component } from "react";
import "../Dropdown/Dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.setShip(event.target.value);
  }

  // handleSubmit(event) {
  //   alert("Your Ship: " + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="">Ship</option>
            <option value="raft">Raft</option>
            <option value="dinghy">Dinghy</option>
            <option value="sloop">Sloop</option>
            <option value="schooner">Schooner</option>
            <option value="brigantine">Brigantine</option>
            <option value="galleon">Galleon</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Dropdown;

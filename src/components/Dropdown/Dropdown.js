import React, { Component } from "react";
import { connect } from "react-redux";

import "../Dropdown/Dropdown.css";

import { resetStore } from "../../redux/actions";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.resetMats();
    let value = event.target.value;
    setTimeout(() => {
      this.setState({ value });
      this.props.setShip(value);
    }, 0);
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

const mapDispatchToProps = dispatch => ({
  resetMats: resources => dispatch(resetStore())
});

export default connect(
  null,
  mapDispatchToProps
)(Dropdown);

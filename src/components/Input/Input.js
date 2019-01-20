import * as React from "react";
import { connect } from "react-redux";

import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.ship.id !== this.props.ship.id) {
      this.setState({ value: 0 });
    }
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
    this.props.setInputValue(parseInt(event.target.value));
  }

  render() {
    return (
      <form>
        <input
          type="number"
          className="input-field"
          value={this.state.value}
          onChange={this.handleInputChange}
          min={0}
          max={this.props.max}
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  ship: state.shipReducer
});

export default connect(mapStateToProps)(Input);

import * as React from "react";
import "./Input.css";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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

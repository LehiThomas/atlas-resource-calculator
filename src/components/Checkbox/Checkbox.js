import * as React from "react";

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.props.isChecked(value, this.props.matType);
  }

  render() {
    return (
      <form>
        <input
          name="isChecked"
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

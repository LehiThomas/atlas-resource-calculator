import * as React from "react";
import { connect } from "react-redux";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isItemChecked !== this.props.isItemChecked) {
      if (this.props.isItemChecked !== this.state.isChecked) {
        this.setState({
          isChecked: this.props.isItemChecked
        });
        this.props.isChecked(this.props.isItemChecked, this.props.matType);
      }
    }
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

const mapStateToProps = state => ({
  ship: state.shipReducer
});

export default connect(mapStateToProps)(Checkbox);

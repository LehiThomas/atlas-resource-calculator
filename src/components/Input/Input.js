import * as React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.isItemChecked !== this.props.isItemChecked) {
  //     if (this.props.isItemChecked !== this.state.isChecked) {
  //       this.setState({
  //         isChecked: this.props.isItemChecked
  //       });
  //       this.props.isChecked(this.props.isItemChecked, this.props.matType);
  //     }
  //   }
  // }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
    this.props.setInputValue(event.target.value)
  }

  render() {
    return (
      <form>
        <input className="input-field" type="text" value={this.state.value} onChange={this.handleInputChange} />
      </form>
    );
  }
}

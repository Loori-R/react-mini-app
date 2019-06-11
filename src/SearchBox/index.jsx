import React, { Component } from "react";

class SeachBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const val = event.target.value;
    await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${val}&page=1`
    )
      .then(response => response.json())
      .then(data => this.props.updateData(data))
      .catch(err => console.log("Fetch Error :-S", err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default SeachBox;

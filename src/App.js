import React, { Component } from "react";
import Header from "./Header";
import MovieItems from "./MovieItems";

class App extends Component {
  state = {
    query: ""
  };

  updateData = val => {
    this.setState({
      query: val
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          profile_name="Alexander Borisenko"
          updateData={this.updateData}
        />
        {this.state.query.Search ? (
          <MovieItems data={this.state.query.Search} />
        ) : (
          "No Result"
        )}
      </div>
    );
  }
}

export default App;

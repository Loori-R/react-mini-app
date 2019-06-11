import React, { Component } from "react";
import "./styles.css";

class MovieItems extends Component {
  render() {
    const { data } = this.props;

    const items = data.map(element => {
      return (
        <div key={element.imdbID}>
          <img src={element.Poster} alt={element.Title} />
          <p>Name: {element.Title}</p>
          <p>Year: {element.Year}</p>
          <p>imdbID: {element.imdbID}</p>
          <p>Type: {element.Type}</p>
        </div>
      );
    });

    return <div className="movie_container">{items}</div>;
  }
}

export default MovieItems;

import React, { Component } from "react";
import SeachBox from "../SearchBox";
import default_profile_img from "./man-user.png";
import "./styles.css";

class Header extends Component {
  render() {
    const { profile_name, profile_img } = this.props;
    return (
      <div className="header">
        <h1>Movie Catalog</h1>
        <SeachBox
          className="header_search"
          updateData={this.props.updateData}
        />
        <div className="header_profile">
          <img
            className="header_profile_img"
            src={profile_img || default_profile_img}
            alt={profile_name}
          />
          <span className="header_profile_name">{profile_name} ▼</span>
        </div>
      </div>
    );
  }
}

export default Header;

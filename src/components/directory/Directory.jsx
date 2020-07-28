import React, { Component } from "react";
import SectionsData from "./directory.data.js";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SectionsData,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {SectionsData.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

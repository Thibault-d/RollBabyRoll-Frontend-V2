import React, { Component } from "react";
import { StrollerContext } from "../services/MyContext.js";
import Fuse from "fuse.js";

export default class Menu extends Component {
  state = {
    search: "",
  };

  static contextType = StrollerContext;

  onChange = (e) => {
    const fuse = new Fuse(this.context.allStrollers, {
      keys: ["name", "brand"], // = search only within the names
      threshold: 0.3, // = exact match
    });
    let results = fuse.search(this.state.search)
    console.log("result", results)
    this.setState({ search: e.target.value }, () =>
      console.log("search", fuse.search(this.state.search))
    );
 

  };

  render() {
    return (
      <div className="Search">
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => this.onChange(e)}
          />
        </div>
      </div>
    );
  }
}

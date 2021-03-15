import React, { Component } from "react";
import apiClient from "../services/StrollersApi.js";
import {StrollerContext} from "../services/MyContext.js"

// componentdidmount calls the function triggering the API call, result of the call is stored in state (array with all strollers from backend)
// Sequence goes Render [0], Componentditmount[0], Render [15]

export default class Strollers extends Component {



  static contextType = StrollerContext;
  render() {


    console.log("component", this.context)

    return (
      <div>
        {this.context &&
          this.context.map((Stroller) => {
            return <div key={Stroller._id}>{Stroller.name}</div>;
          })}
      </div>
    );
  }
}

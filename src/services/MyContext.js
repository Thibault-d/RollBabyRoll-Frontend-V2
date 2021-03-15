import React, { Component } from "react";
import apiClient from "../services/StrollersApi.js";

const StrollerContext = React.createContext();

const StrollerProvider = StrollerContext.Provider;
// const TodosConsumer = TodosContext.Consumer

class MyContext extends Component {
  state = {
    allStrollers: [],
  };

  loadStrollers() {
    apiClient
      .getAllStrollers()
      .then((response) => {
        this.setState({ allStrollers: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.loadStrollers();
  }

  render() {
    console.log("context", this.state.allStrollers);
    return (
      <StrollerProvider value={this.state.allStrollers}>
        {this.props.children}
      </StrollerProvider>
    );
  }
}

export { StrollerContext, MyContext };

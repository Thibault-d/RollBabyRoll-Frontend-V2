import React, { Component } from "react";
import apiClient from "../services/StrollersApi.js";

const StrollerContext = React.createContext();

class MyContext extends Component {
  constructor(props) {
    super(props);
    this.filterStrollers = this.filterStrollers.bind(this);
    this.state = {
      allStrollers: [],
      update: this.filterStrollers,
    };
  }

  filterStrollers(values) {
    this.setState({
      allStrollers: values,
    });
  }

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
    return (
      <StrollerContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </StrollerContext.Provider>
    );
  }
}

export { StrollerContext, MyContext };

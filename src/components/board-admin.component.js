import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import ListDrugsComponent from "./ListDrugsComponent";
import AdminPage from "./AdminPage";
import "../App.css";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3><strong>{this.state.content}</strong></h3>
          {/* //add page for admin */}
          <AdminPage/>
         
        </header>
      </div>
    );
  }
}

import React, { Component } from "react";
import AuthService from "../services/auth.service";
import "../App.css";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = "rgb(200, 221, 237)"
}
  render() {
    const { currentUser } = this.state;
    return (

  <div className="jumbotron">
      <div className="container">
        <header className="jumbotron">

          <h2><strong> Welcome {currentUser.username} Profile</strong> </h2>  
        </header>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
      </div>

    );
  }
}
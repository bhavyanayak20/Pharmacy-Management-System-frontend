import React, { Component } from "react";
import UserService from "../services/user.service";
import AllDrugs from "./AllDrugs";
import Cart from "./Cart";
import {CartProvider} from "react-use-cart";
import SearchIcon from '@mui/icons-material/Search';
import "../App.css";
export default class BoardUser extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  componentDidMount() {
    UserService.getUserBoard().then(
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
      }
    );
  }
  render() {
    return (
      <div className="container">
        
          <h3><strong>{this.state.content}</strong></h3>
          <CartProvider>
          <AllDrugs/>
          </CartProvider>
       
      </div>
    );
  }
}
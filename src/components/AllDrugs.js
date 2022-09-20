import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container,Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios"
import { toast } from "react-toastify";
import httpClient from "../http-common";
import styled from "styled-components";
import "../App.css";


import {useCart} from "react-use-cart";



const AllDrugs = () => {

    const [drugs, setDrugs] = useState([]);

    const{addItem}=useCart();

    useEffect(() => {
        document.title = "AllDrugs";
        getalldrugsfromserver();
    }, []);

    //function to call server
    const getalldrugsfromserver = () => {
        httpClient.get("http://localhost:9092/drugs/list").then(
            (response) => {
                //success
                console.log(response.data);
                toast.success("Drugs is loaded");
                setDrugs(response.data);


            },
            (error) => {
                //error
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };

    //calling loading drugs function
    useEffect(() => {
        getalldrugsfromserver();
    }, []);

 
    return (
        <>
            {/* <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th> Drug Name</th>
                        <th> Quantity available</th>
                        <th>  Price</th>
                        <th> Batch Id</th>
                        <th> Expiry Date</th>
                    </tr>
                </thead>
                <tbody id="table-text">
                    {drugs.map((drugs) => (
                        <tr key={drugs.id}>
                            <td>{drugs.drugName}</td>
                            <td>{drugs.quantity}</td>
                            <td>{drugs.price}</td>
                            <td>{drugs.batchId}</td>
                            <td>{drugs.expiryDate}</td>
                        </tr>))}

                </tbody>
            </table> */}




            {drugs.map((drugs) => {
                return (
                            <div class="card text-center mt-3  p-4" key={drugs.id} >
                                {/* <img class="card-img-top" src="" alt={drugs.drugName} /> */}
                                <div class="card-body">
                                    <h5 class="card-title">Name:{drugs.drugName}</h5>
                                    <h5 class="card-title">Price: Rs. {drugs.price}</h5>
                                    <h6 class="card-text">Expiry Date:{drugs.expiryDate}</h6>
                                    <h6 class="card-text">Batch Id:{drugs.batchId}</h6>
                                    {/* <a href="#" class="btn btn-primary">Add to Cart</a> */}

                                    <button className = "btn btn-primary"
                                     onClick={() =>addItem(drugs)} >Add to Cart </button>
                                </div>
                            </div>
                           
                )
            }
            )}



        </>

    );
};
export default AllDrugs;
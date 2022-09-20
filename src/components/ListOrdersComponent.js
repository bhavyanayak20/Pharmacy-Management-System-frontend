import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import orderservice from '../services/orderservice'
import "../App.css";

const ListOrdersComponent = () => {

    const [Orders, setOrders] = useState([])

    useEffect(() => {

        getAllOrders();
    }, [])

    const getAllOrders = () => {
        orderservice.getAllOrders().then((response) => {
            setOrders(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteOrder = (OrderId) => {
        orderservice.deleteOrder(OrderId).then((response) =>{
        getAllOrders();

       }).catch(error =>{
           console.log(error);
       })
        
    };

    return (
     

        <div className = "container">
            <header className="jumbotron">
            <h2 className = "text-center"> List Orders </h2>
            <Link to = "/add-Order" className = "btn btn-primary mb-2" > Add Order </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                <th> User Name</th>
                <th> Pickup date</th>
                <th>  Drug name</th>
             
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        Orders.map(
                            Orders =>
                            <tr key = {Orders.orderId}> 
                                <td> {Orders.orderId} </td>
                                <td>{Orders.emailId}</td>
                            <td>{Orders.pickupDate}</td>
                            <td>{Orders.drugName}</td>
                       
                                <td>
                                    <Link className="btn btn-info" to={`/edit-Order/${Orders.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteOrder(Orders.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                        }
                </tbody>
            </table>
            </header>
        </div>
        
        
    );
};


export default ListOrdersComponent

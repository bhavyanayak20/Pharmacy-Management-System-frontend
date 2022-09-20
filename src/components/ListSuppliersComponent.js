import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Supplierservice from '../services/supplierservice'
import "../App.css";

const ListSuppliersComponent = () => {

    const [Suppliers, setSuppliers] = useState([])

    useEffect(() => {

        getAllSuppliers();
    }, [])

    const getAllSuppliers = () => {
        Supplierservice.getAllSuppliers().then((response) => {
            setSuppliers(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteSupplier = (SupplierId) => {
       Supplierservice.deletesupplier(SupplierId).then((response) =>{
        getAllSuppliers();

       }).catch(error =>{
           console.log(error);
       })
        
    };

    return (
     

        <div className = "container">
             <header className="jumbotron">
            <h2 className = "text-center"><strong>List Suppliers</strong></h2>
            <Link to = "/add-Supplier" className = "btn btn-primary mb-2" > Add Supplier </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                <th> Supplier Name</th>
                <th> Supplier email</th>
                
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        Suppliers.map(
                            Suppliers =>
                            <tr key = {Suppliers.id}> 
                                <td> {Suppliers.id} </td>
                                <td>{Suppliers.name}</td>
                            <td>{Suppliers.email}</td>
                 
                                <td>
                                    <Link className="btn btn-info" to={`/edit-Supplier/${Suppliers.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteSupplier(Suppliers.id)}
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


export default ListSuppliersComponent

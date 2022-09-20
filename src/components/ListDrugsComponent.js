import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import drugservice from '../services/drugservice'
import "../App.css";

const ListDrugsComponent = () => {

     const [drugs, setDrugs] = useState([]);
    //  const [sup, setSup] = useState([]);
    
   // const [supplier, setSupplier] = useState(({name: '', supplier:{}}));

    useEffect(() => {

        getAllDrugs();
    }, [])

    const getAllDrugs = () => {
        drugservice.getAllDrugs().then((response) => {
            setDrugs(response.data);
     
           
           
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteDrug = (drugId) => {
       drugservice.deleteDrug(drugId).then((response) =>{
        getAllDrugs();

       }).catch(error =>{
           console.log(error);
       })
        
    };

    return (
     

        <div className = "container">
            <header className="jumbotron">
            <h2 className = "text-center"><strong>List Drugs</strong></h2>
            <Link to = "/add-drug" className = "btn btn-primary mb-2" > Add Drug </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                <th> Drug Name</th>
                <th> Quantity available</th>
                <th>  Price</th>
                <th> Batch Id</th>
                <th> Expiry Date</th>
             <th>Supplier name</th>
        
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        drugs.map(
                            drugs =>
                            <tr key = {drugs.id}> 
                                <td> {drugs.id} </td>
                                <td>{drugs.drugName}</td>
                            <td>{drugs.quantity}</td>
                            <td>{drugs.price}</td>
                            <td>{drugs.batchId}</td>
                            <td>{drugs.expiryDate}</td>
                                 <td>{drugs.supplierName}</td>
                              
                        
 
                                <td>
                                    <Link className="btn btn-info" to={`/edit-drug/${drugs.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteDrug(drugs.id)}
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


export default ListDrugsComponent

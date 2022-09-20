import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import Supplierservice from '../services/supplierservice';
import "../App.css";
const AddSupplierComponent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const history = useNavigate();
    const {id} = useParams();

    const saveOrUpdateSupplier = (e) => {

        e.preventDefault();

        const Supplier = {name, email}

        if(id){
            Supplierservice.updateSupplier(id, Supplier).then((response) => {
                history('/Suppliers')
            }).catch(error => {
                console.log(error)
            })

        }else{
            Supplierservice.createSupplier(Supplier).then((response) =>{

                console.log(response.data)
                history('/Suppliers');

    
                // history.push('/Suppliers');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {
        Supplierservice.getSupplierById(id)

        Supplierservice.getSupplierById(id).then((response) =>{
            setName(response.data.name)
            
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Supplier</h2>
        }else{
            return <h2 className = "text-center"><strong>Add Supplier</strong></h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Supplier Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Supplier name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email  :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter email"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                           

                

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateSupplier(e)} >Submit </button>
                                <Link to="/Supplier" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddSupplierComponent;

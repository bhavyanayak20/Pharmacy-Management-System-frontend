import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import drugservice from '../services/drugservice';
import "../App.css";

const AddDrugComponent = () => {

    const [drugName, setDrugName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [batchId, setBatchId] = useState('')
    const [price, setPrice] = useState('')
    const [expiryDate, setExpiryDate] = useState('')

    const [supplierName, setSupplierName] = useState('')
   // const [email, setSupplierEmail] = useState('')
    //  const [supplier,setSupplier]=useState('')
      const [supplierlist,setSupplierlist]=useState([{'name':'','id':''}])

    const history = useNavigate();
    const {id} = useParams();
   // const {supid}=useParams();

    const saveOrUpdateDrug = (e) => {
        e.preventDefault();
        const drug = {drugName, quantity, batchId,price,expiryDate,supplierName};
        if(id){
            drugservice.updateDrug(id, drug).then((response) => {
                history('/drugs')
            }).catch(error => {
                console.log(error)
            })

        }else{
            drugservice.createDrug(drug).then((response) =>{

                console.log(response.data)
    
                history('/drugs');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {
        drugservice.getDrugById(id)

        drugservice.getDrugById(id).then((response) =>{
            setDrugName(response.data.drugName)
            setQuantity(response.data.quantity)
            setBatchId(response.data.batchId)
            setPrice(response.data.price)
            setExpiryDate(response.data.expiryDate)
          //  setSupplierId(response.data.supplier.supid)
            setSupplierName(response.data.supplierName)
           // setSupplierName(response.data.supplier.email)


        }).catch(error => {
            console.log(error)
        })
    }, [])


    const handleChange=(event)=> {
        setSupplierName(event.target.value);
    }

    useEffect(()=> {
        const fetchData=async()=>{
            const response=await fetch('http://localhost:9092/supplier/list')
            const newData=await response.json();
            setSupplierlist(newData);
            console.log(newData);
        };
         fetchData(); 
    },[])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Drug</h2>
        }else{
            return <h2 className = "text-center"><strong>Add Drug</strong></h2>
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
                                    <label className = "form-label"> Drug Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter drug name"
                                        name = "name"
                                        className = "form-control"
                                        value = {drugName}
                                        onChange = {(e) => setDrugName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Price  :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter price"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Quantity :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Available Quantity"
                                        name = "quantity"
                                        className = "form-control"
                                        value = {quantity}
                                        onChange = {(e) => setQuantity(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Batch Id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Batch Id"
                                        name = "batchId"
                                        className = "form-control"
                                        value = {batchId}
                                        onChange = {(e) => setBatchId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Expiry Id :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Enter Expiry Date"
                                        name = "expiryDate"
                                        className = "form-control"
                                        value = {expiryDate}
                                        onChange = {(e) => setExpiryDate(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <br>
                                </br>

                         

                                {/* <div className = "form-group mb-2">
                                    <label className = "form-label"> Supplier name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter supplier name "
                                        name = "supplierName"
                                        className = "form-control"
                                        value = {supplierName}
                                        onChange = {(e) => setSupplierName(e.target.value)}
                                    >
                                    </input>
                                </div> */}

                                {/* <div className = "form-group mb-2">
                                    <label className = "form-label"> Supplier email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter supplier email "
                                        name = "supplier.email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setSupplierEmail(e.target.value)}
                                    >
                                    </input>
                                </div> */}
                                <h7>Enter Supplier Name</h7>

                                <select className="form-control" value={supplierName} onChange={handleChange}>
                                <label className = "form-label"> Supplier :</label>
                                    {
                                        
                                        
                                        supplierlist.map(supplier=> (
                                             <option value={supplier.name} key={supplier.id}>{supplier.name}</option>

                                            


                                        ))
                                    }
                                </select> 




                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateDrug(e)} >Submit </button>
                                <Link to="/drugs" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddDrugComponent;
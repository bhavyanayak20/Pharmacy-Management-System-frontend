import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../App.css";


import UserService from "../services/user.service";

const ListUsersComponent = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        getAllUsers();
    }, [])

    const getAllUsers = () => {
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteUser = (userId) => {
       UserService.deleteDrug(userId).then((response) =>{
        getAllUsers();

       }).catch(error =>{
           console.log(error);
       })
        
    };

    return (
     

        <div className = "container">
            <header className="jumbotron">
            <h2 className = "text-center"><strong>List Users</strong></h2>
            {/* <Link to = "/add-drug" className = "btn btn-primary mb-2" > Add Drug </Link> */}
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                <th> User Name</th>
                <th> email</th>
        
                    {/* <th> Actions </th> */}
                </thead>
                <tbody>
                    {
                        users.map(
                            users =>
                            <tr key = {users.id}> 
                                <td> {users.id} </td>
                           
                            <td>{users.username}</td>
                            <td>{users.email}</td>
                   
                                {/* <td>
                                    <Link className="btn btn-info" to={`/edit-drug/${users.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteUser(users.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td> */}
                            </tr>
                        )
                        }
                </tbody>
            </table>
            </header>
        </div>
        
        
    );
};


export default ListUsersComponent

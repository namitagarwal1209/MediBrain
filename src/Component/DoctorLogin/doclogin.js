import React, {useState} from "react";
import {Form,Button} from "react-bootstrap";
//import "./doclogin.css";

export default function DoctorLogin(){
    const [icmrNo, seticmrNo] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm(){
      return icmrNo.length >0 && password.length >0; //if both email and password entered - login button gets validated
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    return (
        <div className = "Login">
            <Form onSubmit = {handleSubmit}>
            
                <Form.Group size = "lg" controlId = "email">
                    <Form.Label>ICMR Number</Form.Label>
                    <Form.Control   autoFocus 
                                    type="text" 
                                    placeholder="Enter ICMR Number" 
                                    value ={icmrNo}
                                    onChange = {(e) => seticmrNo(e.target.value)} />
                </Form.Group>

                <Form.Group size = "lg" controlId = "password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control   type="password" 
                                    placeholder="Enter password" 
                                    value ={password}
                                    onChange = {(e) => setPassword(e.target.value) }/>
                </Form.Group>

                <Button variant ="dark" block size = 'lg' type = 'submit' disabled = {!validateForm()}>
                    LOGIN 
                </Button>
            </Form> 
        </div>

    ); //the html element of the login page ends here
  }// login function ends
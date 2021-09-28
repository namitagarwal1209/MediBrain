import React, {useState} from "react";
import {Form,Button} from "react-bootstrap";
//import "./doclogin.css";

export default function PatientLogin(){
    const [phoneNo, setphoneNo] = useState("");
  
    function validateForm(){
      return phoneNo.length === 10; //if phoneNo entered correctly - 'generate otp' button gets validated
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    return (
        <div className = "Login">
            <Form onSubmit = {handleSubmit}>
            
                <Form.Group size = "lg" controlId = "phoneNo">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control   autoFocus 
                                    type="phoneNo" 
                                    placeholder="Enter phoneNo" 
                                    value ={phoneNo}
                                    onChange = {(e) => setphoneNo(e.target.value)} />
                </Form.Group>

                <Button variant ="dark" block size = 'lg' type = 'submit' disabled = {!validateForm()}>
                    GENERATE OTP 
                </Button>
            </Form> 
        </div>

    ); //the html element of the login page ends here
  }// login function ends
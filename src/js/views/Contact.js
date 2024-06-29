import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contact = () => {
	const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
 
    const { store, actions } = useContext(Context);

    const handleSubmit = () => {
        if (!fullname.trim() || !email.trim() || !phone.trim() || !address.trim()) {
            alert(
                "No se puede mandar un contacto vacio"
              )
        } else {
            const newContact = {
                name: fullname,
                email: email,
                phone: phone,
                address: address
            };
            actions.addContact(newContact);
            setFullname('');
            setEmail('');
            setPhone('');
            setAddress('');
        }
    };

	return (
		<React.Fragment>
        <div className="container">
            <div className="justify-content-center align-items-center fs-1 col-12">
            <h1 className="tituloAddContact d-flex justify-content-center">
                Add a new contact
            </h1>
                <label htmlFor="fullname">
                    <h6>Full name</h6>
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Full name" 
                    id="fullname" 
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    /> 
                <label htmlFor="Email">
                    <h6 className="mt-2">Email</h6>
                </label>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    id="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    /> 
                <label htmlFor="Phone">
                    <h6 className="mt-2">Phone</h6>
                </label>
                <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="Phone" 
                    id="Phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    /> 
                <label htmlFor="Address">
                    <h6 className="mt-2">Address</h6>
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Address" 
                    id="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} 
                    /> 
            
			<button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>Save</button>
                <Link to="/">
                    <button className="btn btn-secondary w-100 mt-2">Back to contacts</button>
                </Link>

            </div>
        </div>
        </React.Fragment>
	);
};

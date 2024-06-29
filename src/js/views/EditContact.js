import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const contacto = store.contactos.find((e) => e.id === parseInt(params.id));
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    useEffect(() => {
        if (contacto) {
            setFullname(contacto.name);
            setEmail(contacto.email);
            setPhone(contacto.phone);
            setAddress(contacto.address);
        }
    }, [contacto]);

    const handleSubmit = async () => {
        const newContact = {
            id: params.id,
            name: fullname,
            email: email,
            phone: phone,
            address: address
        };
        await actions.updateContact(newContact);
    };

    return (
        <React.Fragment>
            <div className="container">
            
            <div className="d-flex justify-content-center align-items-center fs-1">
                <p>Edit contact</p>
            </div>
            
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full name</label>
                <input type="text" className="form-control" placeholder="Full name" id="fullname" value={fullname}onChange={(e) => setFullname(e.target.value)} /> 
                </div>

            <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Email" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
            </div>

            <div className="mb-3">
                <label htmlFor="Phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="Phone" id="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> 
            </div>

            <div className="mb-3">
                <label htmlFor="Address" className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="Address" id="Address" value={address} onChange={(e) => setAddress(e.target.value)} /> 
            </div>
            
            
            <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>Save changes</button>
                <Link to="/">
                    <button className="btn btn-secondary w-100 mt-2">Back to contacts</button>
                </Link>
                
            </div>
        
        </React.Fragment>
    );
};
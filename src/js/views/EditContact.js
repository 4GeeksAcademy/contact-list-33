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

    // Usa useEffect para establecer los estados si contacto existe
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
            <div className="vh-100 d-flex align-items-center">
            <div className="containerAddContact col-12">
            <h1 className="titulo d-flex justify-content-center">Edit Contact</h1>
            <div className="input p-5">
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
            </div>
            <div className="d-flex justify-content-center">
                <Link 
                    to= "/"
                     className="btn btn-success"
                     onClick={handleSubmit}
                     > Save Contact </Link>
            </div>
            </div>
            </div>
        
        </React.Fragment>
    );
};
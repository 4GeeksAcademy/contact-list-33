import React from "react";
import { Link } from "react-router-dom"
import userImagen  from "../../img/balon.jpg";

export const ContactCard = ({ contact, contactDelete, contactUpdate}) => {
    return (
        <div className="">
            <li className="list-group-item d-flex">
                <img src={userImagen} className="img-fluid rounded-circle" alt="profile" />
                <div className="d-flex justify-content-between w-100">
                    <div className="perfil">
                        <h5>{contact.name}</h5>
                        <p><i className="fa-solid fa-envelope"></i> {contact.email}</p>
                        <p><i className="fa-solid fa-phone"></i> {contact.phone}</p>
                        <p><i className="fa-solid fa-location-dot"></i> {contact.address}</p>
                    </div>

                    <div className="">
                    <Link 
                    to={`/edit/${contact.id}`}
                    className="btn"
                    style={{ marginRight: '0.5rem' }}
                    ><i className="fa fa-pencil" aria-hidden="true"></i></Link>
                        <button 
                            className="btn"
                            onClick={() => contactDelete(contact.id)}
                        >
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </li>
        </div>
    );
};
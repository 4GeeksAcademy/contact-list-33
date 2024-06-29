import React from "react";
import { Link } from "react-router-dom"
import userImagen  from "../../img/balon.jpg";

export const ContactForm = ({ contact, contactDelete, contactUpdate}) => {
    return (
        <div  className="card container">
            <div className="d-flex">
            <div className="col-2 container d-flex align-items-center">
                    <img src={userImagen} className="img-fluid rounded-circle" alt="Contact Image" />
                </div>
                <div className="d-flex justify-content-between w-100">
                    <div className="col-6 card-body m-0 px-5">
                        <h5>{contact.name}</h5>
                        <p><i className="fa fa-envelope me-2"></i> {contact.email}</p>
                        <p><i className="fa fa-phone me-2"></i> {contact.phone}</p>
                        <p><i className="fa fa-map-marker-alt me-2"></i> {contact.address}</p>
                    </div>

                    <div className="">
                    <Link 
                    to={`/edit/${contact.id}`}
                    className="btn"
                    style={{ marginRight: '0.5rem' }}
                    ><i className="btn btn-primary fa fa-edit" aria-hidden="true"></i></Link>
                        <button 
                            className="btn"
                            onClick={() => contactDelete(contact.id)}
                        >
                            <i className="btn btn-danger fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
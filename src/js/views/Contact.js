import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { ContactForm } from "../component/ContactForm.js";
import { Navbar } from "../component/navbar.js";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
          actions.fetchContactos();
    }, []);

    const handleDelete = (id) => {
        actions.deleteContact(id);
    };
    
console.log(store)
    return (
        <React.Fragment>
            <Navbar />
            <div>
                {store.contactos.map((contacts, index) => (
                    <ContactForm key={index} contact={contacts} contactDelete={handleDelete} />
                ))}
            </div>
        </React.Fragment>
    );
};

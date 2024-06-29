import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		
		<div className="container d-flex justify-content-end">
		<Link className="btn btn-success mt-4 mb-2"  to="/AddContact" >Add a new contact</Link>
	</div>
		
	);
};

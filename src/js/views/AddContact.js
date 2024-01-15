import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; //esto lo agregamos

export const AddContact = () => {
	//declaramos los estados del formulario => 4 estados
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const { store, actions } = useContext(Context); //esto es el consumo del Contexto.

	//crear una funcion Guardar contacto => console.log que me muestre el estado fullname, email, phone, address.
	function guardarContacto() {
		actions.createContact({ fullName, email, phone, address });
		console.log("ok");
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				{/* especificar el submit */}
				<form>
					<div className="form-group">
						<label>Full Name</label>
						{/* especificar el evento onchange en cada uno de los input. */}
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={e => setFullName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={guardarContacto}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

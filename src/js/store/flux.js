const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [] //Propiedad que se llama Contacts. Esto lo agregamos.
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getAllContacts: function() {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/lisandro")
					.then(response => response.json())
					.then(data => {
						setStore({ contacts: data });
						console.log(data);
					}) //data tiene guardado un array de objetos.
					.catch(error => console.log(error));
			},
			createContact: function({ fullName, email, phone, address }) {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: fullName,
						email,
						agenda_slug: "lisandro",
						address,
						phone
					})
				})
					.then(response => {
						if (!response.ok) console.log("error");
						console.log("success", response.json());
					})
					.catch(error => console.log(error));
			},
			deleteContact: function(contact_id) {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
					body: {
						contact_id
					}
				})
					.then(response => {
						if (!response.ok) console.log("error");
						console.log("success");
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;

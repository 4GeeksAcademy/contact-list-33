const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			fetchContactos: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/matischlegel/contacts")
					if (response.status === 404) {
                        await getActions().createUser();
                        await getActions().fetchContactos();
                    }
					if (response.ok == false) {
						throw new Error("Levante un error en response")
					}
					const data = await response.json();
					console.log(data)
					setStore({contactos: data.contacts})
				} catch(error) {
					console.log(error)
				}
			},
			addContact: async (contact) => {
				try{
					console.log(contact)
					const response = await fetch("https://playground.4geeks.com/contact/agendas/matischlegel/contacts", {
						method: "POST",
						body: JSON.stringify(contact),
						headers: {
							"Content-Type": "application/json"
						}
					})
					if (response.ok == false) {
						throw new Error("Levante un error en response")
					}

					const data = await response.json()
					setStore({ contactos: [...getStore().contactos, data] })
				
				} catch(error) {
					console.log(error)
				}
			},
			updateContact: async (updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/matischlegel/contacts/${updatedContact.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedContact)
                    });

                    if (response.ok) {
                        const actions = getActions()
						actions.fetchContactos()
                    }
                } catch(error) {
					console.log(error)
				}
            },
			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/matischlegel/contacts/${id}`, {
						method: "DELETE"
					})
					if (response.ok == false) {
						throw new Error("Levante un error en response")
					}
					
					const contactDelete = getStore().contactos.filter(contact => contact.id !== id)
					setStore ({ contactos: contactDelete })
					
				} catch(error) {
					console.log(error)
				}
			},
			createUser: async (contact) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/matischlegel", {
						method: "POST",
						body: JSON.stringify(contact),
						headers: {
							"Content-Type": "application/json"
						}
					})
						if (!response.ok) {
							throw new Error("Levante un error")
						}
					} catch(error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
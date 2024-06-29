const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: []
		},
		actions: {
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
			},
			changeColor: (index, color) => {
			
				const store = getStore();

				
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				
				setStore({ demo: demo });
			},

			
			fetchContactos: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/huber0018/contacts")
					if (response.status === 404) {
                        await getActions().createUser();
                        await getActions().fetchContactos();
                    }
					if (response.ok == false) {
						throw new Error("Error en contacto")
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
					const response = await fetch("https://playground.4geeks.com/contact/agendas/huber0018/contacts", {
						method: "POST",
						body: JSON.stringify(contact),
						headers: {
							"Content-Type": "application/json"
						}
					})
					if (response.ok == false) {
						throw new  "Error al crear contacto"
					}

					const data = await response.json()
					setStore({ contactos: [...getStore().contactos, data] })
				
				} catch(error) {
					console.log(error)
				}
			},
			
			updateContact: async (updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/huber0018/contacts/${updatedContact.id}`, {
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
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/huber0018/contacts/${id}`, {
						method: "DELETE"
					})
					if (response.ok == false) {
						throw new "No se pudo eliminar contacto"
					}
					
					const contactDelete = getStore().contactos.filter(contact => contact.id !== id)
					setStore ({ contactos: contactDelete })
					
				} catch(error) {
					console.log(error)
				}
			},

			createUser: async (contact) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/huber0018", {
						method: "POST",
						body: JSON.stringify(contact),
						headers: {
							"Content-Type": "application/json"
						}
					})
						if (!response.ok) {
							throw new Error
						}
					} catch(error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
//A ContactCollection component that loads existing contacts from storage, and saves new ones.
//Each new contact should have an auto-generated identifier.
//whole thing is a class(refactor)

//fetch post
//can put this all in a class

// class ContactCollection {
//     postNewPerson(props) {
//         //takes in info to post
//         const new_person_object {
//             key: value
//         }
//         //fetch post
//     }
//     //function to fetch

// }

const ContactCollectionUserFetch = {
    getContactList: function () {
        return fetch("http://localhost:8088/contactList")
            .then(response => response.json())
    }
}

ContactCollectionUserFetch.getContactList()
    .then((contactList) => {
        //post
        console.log(contactList)
    })

const ContactCollectionUserPost = ContactCollectionUserFetch.getContactList()
    .then((contactList) => {
        document.querySelector("#person__save").addEventListener("click", event => {
            const nameInput = document.querySelector("#name").value
            const addressInput = document.querySelector("#address").value
            const phoneNumberInput = document.querySelector("#phone_number").value

            const new_person = {
                name: nameInput,
                address: addressInput,
                phone_number: phoneNumberInput
            }
            let fetchData = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(new_person)
            }
            fetch("http://localhost:8088/contactList", fetchData).then(() => {
                window.location.reload("http://localhost:8080")
            })
            console.log(contactList)
        })
    })

export { ContactCollectionUserFetch, ContactCollectionUserPost }

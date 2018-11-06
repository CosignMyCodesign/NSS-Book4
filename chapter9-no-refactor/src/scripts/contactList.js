//A ContactList component that displays all contacts. It should import the
//Contact component and the ContactCollection component.

import Contact from "./contact"
import { ContactCollectionUserFetch, ContactCollectionUserPost } from "./contactCollection"

const person1 = new Contact ({
    name: "Billy",
    address: "542 Traverse Town, Pokemon World, 10101",
    phone_number: "6667778888"
})

console.log(person1)

// Contact

//displays all contacts
const contactEntryComponentObject = {
    contactEntryComponent: (contact) => {
        // contact.forEach((person) => {
            return `
            <div class="contact-card">
                <h1>Name:</h1>
                <p>${contact.name}</p>
                <h1>Address:</h1>
                <p>${contact.address}</p>
                <h1>Phone Number:</h1>
                <p>${contact.phone_number}</p>
            </div>
            `
        // })
    }
}

ContactCollectionUserFetch.getContactList()
    .then((contactList) => {
        for(let i = 0; i < contactList.length; i++) {
            console.log(contactList[i])
            // debugger;
            document.querySelector(".output").innerHTML += contactEntryComponentObject.contactEntryComponent(contactList[i])
        }
    })
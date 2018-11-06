//A ContactList component that displays all contacts. It should import the
//Contact component and the ContactCollection component.

import Contact from "./contact"
import ContactCollection from "./contactCollection"
import ElementBuilder from "./elementBuilder"

export default class ContactList {
    static buildContactList() {
        let unorderedListDefinition = {
            "element_type": "ul",
            "attributes_descriptions": [
                {
                    "attribute_name": "id",
                    "attribute_value": "contact__list"
                },
                {
                    "attribute_name": "class",
                    "attribute_value": "contact__list"
                }
            ]
        }

        let listDefinition = {
            "element_type": "li",
            "attributes_descriptions": [
                //classes are not unique; ids are
                {
                    "attribute_name": "class",
                    "attribute_value": "contact"
                }
            ]
        }

        let unordered_contact_list = ElementBuilder.buildHTMLElement(unorderedListDefinition.element_type, unorderedListDefinition.attributes_descriptions)

        ContactCollection.getAPI("http://localhost:8088/contactList").then((contactList) => {
            contactList.forEach((contact) => {
                let currentContact = new Contact(contact.name, contact.address, contact.phone_number)
                let currentContactDisplay = currentContact.buildContactDisplay()

                let listed_contact = ElementBuilder.buildHTMLElement(listDefinition.element_type, listDefinition.attributes_descriptions)

                listed_contact.appendChild(currentContactDisplay)
                unordered_contact_list.appendChild(listed_contact)
            })
            //needs to return outside of loop so it cycles through ALL contacts
        })
        return unordered_contact_list
    }
}
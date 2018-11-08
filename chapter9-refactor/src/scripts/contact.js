//A Contact component that displays a person's name, phone number, and address.

import ElementBuilder from "./elementBuilder"
import ContactCollection from "./contactCollection"

export default class Contact {
    constructor(name, address, phone_number, id) {
        this.name = name
        this.address = address
        this.phone_number = phone_number
        this.id = id
    }

    buildContactDisplay() {
        let divDefinition = {
            "element_type": "div",
            "attributes_descriptions": [
                {
                    "attribute_name": "class",
                    "attribute_value": "contact"
                }
            ]
        }
        let header1Definition = {
            "element_type": "h1",
            "text_content": `Name: ${this.name}`,
            "attributes_descriptions": [
                {
                    "attribute_name": "class",
                    "attribute_value": "name"
                }
            ]
        }
        let paragraphDefinition1 = {
            "element_type": "p",
            "text_content": `Address: ${this.address}`,
            "attributes_descriptions": [
                {
                    "attribute_name": "class",
                    "attribute_value": "address"
                }
            ]
        }
        let paragraphDefinition2 = {
            "element_type": "p",
            "text_content": `Phone Number: ${this.phone_number}`,
            "attributes_descriptions": [
                {
                    "attribute_name": "class",
                    "attribute_value": "phone_number"
                }
            ]
        }

        let updateButtonDefinition = {
            "element_type": "button",
            "text_content": "Update This Contact",
            "attributes_descriptions": [
                {
                    "attribute_name": "class",
                    "attribute_value": "btn update_contact"
                }
            ]
        }


        let deleteButtonDefinition = {
            "element_type": "button",
            "text_content": "Delete This Contact",
            "attributes_descriptions": [
                {
                    "attribute_name": "class",
                    "attribute_value": "btn delete_contact"
                }
            ]
        }

        let divContact = ElementBuilder.buildHTMLElement(
            divDefinition.element_type, divDefinition.attributes_descriptions
        )
        let headerContact = ElementBuilder.buildHTMLElement(
            header1Definition.element_type, header1Definition.attributes_descriptions, header1Definition.text_content
        )
        let paragraphContact = ElementBuilder.buildHTMLElement(
            paragraphDefinition1.element_type, paragraphDefinition1.attributes_descriptions, paragraphDefinition1.text_content
        )
        let paragraphContact2 = ElementBuilder.buildHTMLElement(
            paragraphDefinition2.element_type, paragraphDefinition2.attributes_descriptions, paragraphDefinition2.text_content
        )
        let updateButton = ElementBuilder.buildHTMLElement(
            updateButtonDefinition.element_type, updateButtonDefinition.attributes_descriptions, updateButtonDefinition.text_content
        )
        let deleteButton = ElementBuilder.buildHTMLElement(
            deleteButtonDefinition.element_type, deleteButtonDefinition.attributes_descriptions, deleteButtonDefinition.text_content
        )
        divContact.appendChild(headerContact)
        divContact.appendChild(paragraphContact)
        divContact.appendChild(paragraphContact2)
        divContact.appendChild(updateButton)
        divContact.appendChild(deleteButton)

        // updateButton.addEventListener("click", () => {
        //     const newContactName = document.querySelector("#contact__name").value
        //     const newContactAddress = document.querySelector("#contact__address").value
        //     const newContactPhoneNumber = document.querySelector("#contact__phone_number").value

        //     const new_contact = {
        //         name: newContactName,
        //         address: newContactAddress,
        //         phone_number: newContactPhoneNumber
        //     }

        //     ContactCollection.postAPI("http://localhost:8088/contactList", new_contact).then(
        //         window.location.reload("http://localhost:8080")
        //     )
        // })

        deleteButton.addEventListener("click", () => {
            ContactCollection.deleteAPI(`http://localhost:8088/contactList/${this.id}`).then(
                window.location.reload("http://localhost:8080")
            )
        })

        return divContact
    }
}

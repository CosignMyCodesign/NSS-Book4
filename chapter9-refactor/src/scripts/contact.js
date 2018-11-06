//A Contact component that displays a person's name, phone number, and address.

import ElementBuilder from "./elementBuilder"

export default class Contact {
    constructor(name, address, phone_number) {
        this.name = name
        this.address = address
        this.phone_number = phone_number
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
        divContact.appendChild(headerContact)
        divContact.appendChild(paragraphContact)
        divContact.appendChild(paragraphContact2)
        return divContact
    }
}


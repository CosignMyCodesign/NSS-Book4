//A ContactForm component that, when filled out and a submit button is pressed,
//adds a new contact to storage. It should import the ContactCollection component.

import ContactCollection from "./contactCollection"
import ElementBuilder from "./elementBuilder"

export default class ContactForm {
    static buildContactForm(form_action) {
        let formDefinition = {
            "element_type": "form",
            "attribute_descriptions": [
                {
                    "attribute_name": "action",
                    "attribute_value": ""
                },
                {
                    "attribute_name": "id",
                    "attribute_value": "new_contact_form"
                },
                {
                    "attribute_name": "class",
                    "attribute_value": "new_contact_form submit_state"
                }
            ]
        }

        let fieldsetNameDefinition = {
            "element_type": "fieldset",
            "attribute_descriptions": [
                {
                    "attribute_name": "class",
                    "attribute_value": "new_contact_form_name"
                }
            ]
        }

        let labelNameDefinition = {
            "element_type": "label",
            "text_content": "Name",
            "attribute_descriptions": [
                {
                    "attribute_name": "for",
                    "attribute_value": "contact_name"
                }
            ]
        }

        let breakDefinition = {
            "element_type": "br",
            "attribute_descriptions": []
        }

        let inputNameDefinition = {
            "element_type": "input",
            "attribute_descriptions": [
                {
                    "attribute_name": "id",
                    "attribute_value": "contact__name"
                },
                {
                    "attribute_name": "class",
                    "attribute_value": "contact__name"
                },
                {
                    "attribute_name": "type",
                    "attribute_value": "text"
                }
            ]
        }

        let fieldsetAddressDefinition = {
            "element_type": "fieldset",
            "attribute_descriptions": [
                {
                    "attribute_name": "class",
                    "attribute_value": "new_contact_form_address"
                }
            ]
        }

        let labelAddressDefinition = {
            "element_type": "label",
            "text_content": "Address",
            "attribute_descriptions": [
                {
                    "attribute_name": "for",
                    "attribute_value": "contact_address"
                }
            ]
        }

        let inputAddressDefinition = {
            "element_type": "input",
            "attribute_descriptions": [
                {
                    "attribute_name": "id",
                    "attribute_value": "contact__address"
                },
                {
                    "attribute_name": "class",
                    "attribute_value": "contact__address"
                },
                {
                    "attribute_name": "type",
                    "attribute_value": "text"
                }
            ]
        }

        let fieldsetPhoneNumberDefinition = {
            "element_type": "fieldset",
            "attribute_descriptions": [
                {
                    "attribute_name": "class",
                    "attribute_value": "new_contact_form_phone_number"
                }
            ]
        }

        let labelPhoneNumberDefinition = {
            "element_type": "label",
            "text_content": "Phone Nunber",
            "attribute_descriptions": [
                {
                    "attribute_name": "for",
                    "attribute_value": "contact_phone_number"
                }
            ]
        }

        let inputPhoneNumberDefinition = {
            "element_type": "input",
            "attribute_descriptions": [
                {
                    "attribute_name": "id",
                    "attribute_value": "contact__phone_number"
                },
                {
                    "attribute_name": "class",
                    "attribute_value": "contact__phone_number"
                },
                {
                    "attribute_name": "type",
                    "attribute_value": "text"
                }
            ]
        }

        let submitButtonDefinition = {
            "element_type": "button",
            "text_content": "Submit New Contact",
            "attribute_descriptions": [
                {
                    "attribute_name": "class",
                    "attribute_value": "btn submit_contact"
                }
            ]
        }

        let updateButtonDefinition = {
            "element_type": "button",
            "text_content": "Update Contact",
            "attribute_descriptions": [
                {
                    "attribute_name": "class",
                    "attribute_value": "btn update_contact"
                }
            ]
        }
        let hiddenSelector = {
            "element_type": "input",
            "attributes_descriptions": [
                {
                    "attribute_name": "type",
                    "attribute_value": "hidden"
                },
                {
                    "attribute_name": "id",
                    "attribute_value": "contact_id"
                },
            ]
        }

        let newForm = ElementBuilder.buildHTMLElement(formDefinition.element_type, formDefinition.attribute_descriptions)
        let nameFieldset = ElementBuilder.buildHTMLElement(fieldsetNameDefinition.element_type, fieldsetNameDefinition.attribute_descriptions)
        let nameLabel = ElementBuilder.buildHTMLElement(labelNameDefinition.element_type, labelNameDefinition.attribute_descriptions, labelNameDefinition.text_content)
        let nameInput = ElementBuilder.buildHTMLElement(inputNameDefinition.element_type, inputNameDefinition.attribute_descriptions)
        let addressFieldset = ElementBuilder.buildHTMLElement(fieldsetAddressDefinition.element_type, fieldsetAddressDefinition.attribute_descriptions)
        let addressLabel = ElementBuilder.buildHTMLElement(labelAddressDefinition.element_type, labelAddressDefinition.attribute_descriptions, labelAddressDefinition.text_content)
        let addressInput = ElementBuilder.buildHTMLElement(inputAddressDefinition.element_type, inputAddressDefinition.attribute_descriptions)
        let phoneNumberFieldset = ElementBuilder.buildHTMLElement(fieldsetPhoneNumberDefinition.element_type, fieldsetPhoneNumberDefinition.attribute_descriptions)
        let phoneNumberLabel = ElementBuilder.buildHTMLElement(labelPhoneNumberDefinition.element_type, labelPhoneNumberDefinition.attribute_descriptions, labelPhoneNumberDefinition.text_content)
        let phoneNumberInput = ElementBuilder.buildHTMLElement(inputPhoneNumberDefinition.element_type, inputPhoneNumberDefinition.attribute_descriptions)
        let submitButton = ElementBuilder.buildHTMLElement(submitButtonDefinition.element_type, submitButtonDefinition.attribute_descriptions, submitButtonDefinition.text_content)
        let updateButton = ElementBuilder.buildHTMLElement(updateButtonDefinition.element_type, updateButtonDefinition.attribute_descriptions, updateButtonDefinition.text_content)
        let hiddenElement = ElementBuilder.buildHTMLElement(hiddenSelector.element_type, hiddenSelector.attributes_descriptions)
        nameFieldset.appendChild(nameLabel)
        nameFieldset.appendChild(nameInput)

        addressFieldset.appendChild(addressLabel)
        addressFieldset.appendChild(addressInput)

        phoneNumberFieldset.appendChild(phoneNumberLabel)
        phoneNumberFieldset.appendChild(phoneNumberInput)

        newForm.appendChild(nameFieldset)
        newForm.appendChild(addressFieldset)
        newForm.appendChild(phoneNumberFieldset)
        newForm.appendChild(hiddenElement)
        newForm.appendChild(submitButton)
        newForm.appendChild(updateButton)


        submitButton.addEventListener("click", () => {
            const newContactName = document.querySelector("#contact__name").value
            const newContactAddress = document.querySelector("#contact__address").value
            const newContactPhoneNumber = document.querySelector("#contact__phone_number").value

            const new_contact = {
                name: newContactName,
                address: newContactAddress,
                phone_number: newContactPhoneNumber
            }

            ContactCollection.postAPI("http://localhost:8088/contactList", new_contact).then(
                window.location.reload("http://localhost:8080")
            )
        })

        updateButton.addEventListener("click", () => {
            document.querySelector("#new_contact_form").classList.remove("edit_state")
            document.querySelector("#new_contact_form").classList.add("submit_state")
            const newContactName = document.querySelector("#contact__name").value
            const newContactAddress = document.querySelector("#contact__address").value
            const newContactPhoneNumber = document.querySelector("#contact__phone_number").value
            const selectedContactId = document.querySelector("#contact_id").value

            const updated_contact = {
                name: newContactName,
                address: newContactAddress,
                phone_number: newContactPhoneNumber
            }

            ContactCollection.patchAPI(`http://localhost:8088/contactList/${selectedContactId}`, updated_contact).then(
                window.location.reload("http://localhost:8080")
            )
        })

        return newForm
    }
}
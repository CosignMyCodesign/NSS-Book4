//In main.js, import the ContactList component and the ContactForm component.

//The user should see the contact form at the top of the view,
//and the list of contacts underneath it.

// import sayHello from "./hello"
// import sayGoodbye from "./goodbye"
// import SandwichMaker from "./sandwichMaker"

// sayHello()
// sayGoodbye()

// SandwichMaker.placeOrder("rye", "capicola", "provolone")

import ContactForm from "./contactForm"
import ContactList from "./contactList"
import DomManager from "./domManager"

let get_contact_list = ContactList.buildContactList()
console.log(get_contact_list);

DomManager.elementAppender(ContactForm.buildContactForm("post"), ".form_container")
DomManager.elementAppender(get_contact_list, ".contact_list_output")
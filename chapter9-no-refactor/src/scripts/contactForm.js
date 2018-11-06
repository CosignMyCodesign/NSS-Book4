//A ContactForm component that, when filled out and a submit button is pressed,
//adds a new contact to storage. It should import the ContactCollection component.

import { ContactCollectionUserFetch, ContactCollectionUserPost } from "./contactCollection"

//create a form

// let formMaker = () => {

// }
var f = document.createElement("form");
f.setAttribute("method","post");
f.setAttribute("action", "");

//create form name element
var n = document.createElement("input");
n.type = "text";
n.name = "name";
n.id = "name";

//create form address element
var a = document.createElement("input");
a.type = "text";
a.id = "address";
a.name = "address";

//create form phone number element
var p = document.createElement("input");
p.type = "text";
p.id = "phone_number";
p.name = "phone_number";

//create a button
var b = document.createElement("input");
b.type = "submit";
b.id = "person__save"
b.value = "Submit";

// add all elements to the form
f.appendChild(n);
f.appendChild(a);
f.appendChild(p);
f.appendChild(b);
let new_form = document.getElementsByTagName("body")[0].appendChild(f);

export default new_form
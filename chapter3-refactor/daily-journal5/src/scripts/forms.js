//start json server with 3001 json-server -w -p 3001 fieldsets.json fieldsets api
let url_2 = "http://localhost:3001/fieldsets"

//function that creates generic html elements by taking the name of the element, a list of its attribute descriptions
//and text content, if it needs it
let form_element_maker = (element_type, attribute_descriptions, text_content) => {
    let form_text_input = document.createElement(element_type)
    if(text_content) {
        form_text_input.textContent = text_content
    }
    attribute_descriptions.forEach((attribute) => {
        form_text_input.setAttribute(attribute.attribute_name, attribute.attribute_value)
    })
    return form_text_input
}

//take a virtual element and the selector of a real element on the dom and it needs to 
//and then it appends the virtual element to the selected dom element
let element_appender = (virtual_element, dom_element_selector) => {
    //ternary operator example by taking third parameter ,selector_type)
    //let x = selector_type === "class"? ".": "#"
    let selected_dom_element = document.querySelector(dom_element_selector)
    selected_dom_element.appendChild(virtual_element)
}

//function that takes parents & child element and appends child to parent
let parent_child_maker = (parent_element, child_element) => {
    //ternary operator example by taking third parameter ,selector_type)
    //let x = selector_type === "class"? ".": "#"
    parent_element.appendChild(child_element)
}

//function that takes a fieldset object and a fieldset virtual element and parses(creates element and 
//appends it to the fieldset virtual element) the child elements found in the fieldset object
let parse_child_elements = (fieldset, new_fieldset) => {
    if(!fieldset.child_elements) {
        //if return used with nothing it pulls you out of function and goes to the next parameter
        return
    }

    fieldset.child_elements.forEach((child_element) => {
        let virtual_child_element = form_element_maker(child_element.element_type, child_element.attributes_list, child_element.text_content)
        if(child_element.child_elements && child_element.child_elements.length > 0) {
            parse_child_elements(child_element, virtual_child_element)
        }
        parent_child_maker(new_fieldset, virtual_child_element)
    })
}

//fetches the fieldsets api and creates a dom element for each
fetch(url_2)
    .then(response => response.json())
    .then((fieldsets) => {
        fieldsets.forEach((fieldset) => {
            let new_fieldset = form_element_maker(fieldset.element_type, fieldset.attributes_list)
            parse_child_elements(fieldset, new_fieldset)
            element_appender(new_fieldset, "#form")
        })
    })
//A Contact component that displays a person's name, phone number, and address.

export default class Contact {
    constructor (props) {
        this.name = props.name
        this.address = props.address
        this.phone_number = props.phone_number
    }
}
class FlightlessBird {
    constructor (props) {
        this.height = props.height
        this.flightless = true
        this.isExtinct = props.isExtinct
        this.name = props.name
        this.runningSpeed = props.runningSpeed
    }

    toString () {
        return `The ${this.name} is a big, scary bird that stands up to ${this.height} ft and can run up to ${this.runningSpeed} mph!`
    }
}

const ostrich = new FlightlessBird({
    height: "9",
    flightless: true,
    isExtinct: false,
    name: "Ostrich",
    runningSpeed: "43"
})

console.log(ostrich.toString())

const emu  = new FlightlessBird({
    height: "6",
    flightless: true,
    isExtinct: false,
    name: "Emu",
    runningSpeed: "31"
})

console.log(emu.toString())

const emperor_penguin = new FlightlessBird({
    height: "4",
    flightless: true,
    isExtinct: false,
    name: "Emperor Penguin",
    runningSpeed: "4"
})

console.log(emperor_penguin.toString())
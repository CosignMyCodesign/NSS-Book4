// class Restaurant {

//     constructor (props) {
//       this.name = props.name
//       this.address = props.address
//       this.hasStromboli = props.hasStromboli
//       this.hourOpen = props.hourOpen
//       this.hourClosed = props.hourClosed
//     }
  
//     placeOrder (size, toppingsArr) {
//       console.log(`You ordered a ${size} pizza covered in ${toppingsArr.join(", ")}. Please pick up before ${this.hourClosed}!`)
//     }
  
//   }
//   With the initial properties configured to be passed in as arguments when we create the object, that allows you to create multiple objects with the Restaurant class as the blueprint, but each with their own, distinct property values.
  
//   In this next example, you are creating two JavaScript objects to represent the businesses of Joey's House of Pizza and Nelly's Pizza.
  
  // Properties of Joey's House of Pizza
  const joeysProperties = {
      name: "Joey's House of Pizza",
      address: "1213 Federal Ave",
      hasStromboli: true,
      hourOpen: "10:00 am",
      hourClosed: "2:00 pm"
  }
  
  /*
      Create a new restaurant and send it the properties
      object. In the constructor, the properties object is
      stored in the locally-scoped `props` variable (see above).
  */
//   const joeys = new Restaurant(joeysProperties)
  
  const nellysProperties = {
      name: "Nelly's Pizza",
      address: "8001 Main Street",
      hasStromboli: true,
      hourOpen: "10:30 am",
      hourClosed: "9:30 pm"
  }
  
//   const nellys = new Restaurant(nellysProperties)
//   Adding a Menu to the Restaurant
//   Now you can refactor again and add a new menu property and some methods for interacting with it.
  
  class Restaurant {
  
      constructor (props) {
          this.name = props.name
          this.address = props.address
          this.hasStromboli = props.hasStromboli
          this.hourOpen = props.hourOpen
          this.hourClosed = props.hourClosed
          this.menu = {
              small_pizza: null,
              large_pizza: null,
              soda: null,
              salad: null,
              breadsticks: null
          }
      }
  
      placeOrder (size, toppingsArr) {
          console.log(`You ordered a ${size} pizza covered in ${toppingsArr.join(", ")}. Please pick up before ${this.hourClosed}!`)
      }
  
      /*
          Method to set the menu items after the object has
          been created.
      */
      setMenu (menuItems) {
          for (const item in menuItems) {
              this.menu[item] = Number(menuItems[item])
          }
      }
  
      /*
          Get a special, combined price for a combo of a
          small pizza, soda, and a salad.
      */
      get comboPrice () {
          let discount = .85
          let comboPrice =
              this.menu.small_pizza +
              this.menu.soda +
              this.menu.salad
  
          return `$${(comboPrice * discount).toFixed(2)}`
      }
  
  }

// Create a pizza restaurant
const pizzaPerfect = new Restaurant({
    name: "Pizza Perfect",
    address: "456 That Road",
    hasStromboli: false,
    hourOpen: "11:30 am",
    hourClosed: "9:30 pm"
})

// Now set the menu prices
pizzaPerfect.setMenu({
    small_pizza: 9.99,
    large_pizza: 15.99,
    soda: 2.99,
    salad: 4.99,
    breadsticks: 3.49
})

const pizzaChain = new Restaurant({
    name: "Pizza Hut",
    address: "8907 This Road",
    hasStromboli: false,
    hourOpen: "10:30 am",
    hourClosed: "11:00 pm"
})

const italianPlace = new Restaurant({
    name: "Geno's Joint",
    address: "4567 Other Road Suite #45",
    hasStromboli: true,
    hourOpen: "11:30 am",
    hourClosed: "8:30 pm"
})

class Restaurant2 {
    // constructor, etc...

    constructor(props) {
        this.discount = props.discount
        this.fries = props.fries
        this.burger = props.burger
        this.drink = props.drink
        this.order = []
    }

    set combo (item) {
        this.order.push(item)
    }

    get comboPrice () {
        //logic to calc and return combo price
    }
}

const bobsBurgers = new Restaurant2({
    discount: 0.85,
    fries: 1.29,
    burger: 3.69,
    drink: 0.50
})
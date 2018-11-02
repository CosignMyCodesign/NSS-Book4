const url = "http://localhost:3000/legoToSave"
const url2 = "http://localhost:3000/colors"

const API = {
    getColorSelections: function () {
        return fetch(url2)
            .then(response => response.json())

    }
}

const createColorSelectBox = (colors) => {
    // debugger;
    const colorsSelectBox = document.createElement('select');
    colorsSelectBox.setAttribute('id', 'lego__color')
    for(let i = 0; i < colors.length; i++) {
        const colorsSelectOption = document.createElement('option');
        colorsSelectOption.setAttribute('value', colors[i])
        colorsSelectOption.textContent = colors[i];
        colorsSelectBox.appendChild(colorsSelectOption)
    }
    return colorsSelectBox;
}

API.getColorSelections()
    .then((colors) => {
        console.table(colors)
        //  debugger;
        let colorSelectionFunction = createColorSelectBox(colors)
        console.log(colorSelectionFunction)
        document.getElementById("select_box").appendChild(colorSelectionFunction);
    })

document.querySelector(".lego__save").addEventListener("click", event => {

    const creatorInput = document.querySelector("#lego__creator").value
    const shapeInput = document.querySelector("#lego__shape").value
    const colorInput = document.querySelector("#lego__color").value
    const creationInput = document.querySelector("#lego__creation").value
    
    // Once you have collected all the values, build your data structure
    const legoToSave = {
        creator: creatorInput,
        color: colorInput,
        shape: shapeInput,
        creation: creationInput
    }

    let fetchData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
    }

    fetch(url, fetchData)
})
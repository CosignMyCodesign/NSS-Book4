const componentMakerObject = {
    componentMaker: (entries) => {
        entries.forEach( (entry) => {
        document.querySelector("#entryLog").innerHTML += journalEntryComponentObjectManager.makeJournalEntryComponent(entry);
        })
    }
}

const componentMakerObjectManager = Object.create(componentMakerObject);
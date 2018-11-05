const journalEntryComponentObject = {
    makeJournalEntryComponent: (entry) => {
        return `
        <div class="form-post">
            <h1>${entry.date}</h1>
            <h2>${entry.concept}</h2>
            <p>${entry.entry}</p>
            <p>${entry.mood}</p>
        </div>
        `
    }
}

const journalEntryComponentObjectManager = Object.create(journalEntryComponentObject);
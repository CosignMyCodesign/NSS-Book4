console.log("hello")

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
fetch("http://localhost:3000/journalEntries")
    .then((journalEntry) => journalEntry.json())
    .then((parsedJournals) => {
        console.table(parsedJournals)
        parsedJournals.forEach( (entry) => {
            const makeJournalEntryComponent = function(journalEntry) {
                // Create your own HTML structure for a journal entry
                return `
                <div class="form-post">
                    <h1>${entry.date}</h1>
                    <h2>${entry.concept}</h2>
                    </p>${entry.entry}</p>
                    <p>${entry.mood}</p>
                </div>
                `
            }
            document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(parsedJournals);
        })
    })

// Invoke the render function
// renderJournalEntries(journalEntries)

// const renderJournalEntries = (entries) => {
//     for(let i = 0; i < journalData.length; i++) {
//         document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(entries[i]);
//     }
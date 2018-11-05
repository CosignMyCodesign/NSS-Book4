const API = {
    getJournalEntries: function () {
        return fetch("http://localhost:3000/journalEntries")
            .then(response => response.json())
    }
}
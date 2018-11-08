//A ContactCollection component that loads existing contacts from storage, and saves new ones.
//Each new contact should have an auto-generated identifier.
//whole thing is a class(refactor)

//fetch post
//can put this all in a class

export default class ContactCollection {
    static getAPI(url) {
        return fetch(url).then(response => response.json())
    }
    // post
    static postAPI(url, payload) {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
    }
    // put/patch
    static patchAPI(url, payload) {
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
    }
    // delete
    static deleteAPI(url) {
        return fetch(url, {
            method: "DELETE"
        })
    }
}
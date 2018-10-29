const api_root = "http://localhost:80/game";

export function GetState() {
    return fetch(api_root + "/").then(function(response) {
        return response.json();
    });
}

export function FlipPicture() {
    return postData(api_root + "/picture").then(function(response) {
        return response.json();
    });
}

function postData(url = ``, data = {}) {
    return fetch(url, {
        method: data ? "POST" : "GET",
        mode: "no-cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        redirect: "follow",
        body: data ? JSON.stringify(data) : null,
    }).then(response => response.json());
}
const api_root = "http://localhost:80/game";
export let PlayerID = null;

export function GetState() {
  return myFetch(api_root + "/");
}

export function GetMyCaptions() {
  if (PlayerID != null && PlayerID != undefined) {
    return myFetch(api_root + `/captions/${PlayerID}`);
  } else {
    return {
      /*
        JavaScript: The beauty of a weakly typed language.

        How this statement works?
        Would you expect to have a fetch method be able to handle a
        "then" method? And then put a function inside of that method?

        That's all this statement does: Return a blank object with a
        "then" method, that takes a function, that sends an empty array
        as its only parameter (a normal "fetch" method here would return
        a string array of captions.)
      */
      then: function(func) {
        func([]);
      }
    };
  }
}

export function Login(name) {
  return myFetch(api_root + `/players`, { name: name }).then(
    x => (PlayerID = x.id)
  );
}

export function FlipPicture() {
  return myFetch(api_root + "/picture", {});
}
export function SubmitCaption(caption) {
  return myFetch(api_root + "/playedCaptions", { text: caption });
}
export function ChooseCaption(c) {
  return myFetch(api_root + "/playedCaptions/choose", { text: c.text });
}

function myFetch(url = ``, data = null) {
  let options = {
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      PlayerID: PlayerID
    }
  };
  if (data) {
    options = {
      ...options,
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        ...options.headers,
        "Content-Type": "application/json; charset=utf-8"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    };
  }
  return fetch(url, options).then(response => {
    return response.json();
  }); // parses response to JSON
}

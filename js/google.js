function show() {
  let login_link = document.querySelector("#login-link");
  let register_link = document.querySelector("#register-link");
  let name_user = document.querySelector("#name");
  let logout_button = document.querySelector("#logout-button");

  logout_button.style.display = "block";
  name_user.style.display = "block";
  login_link.style.display = "none";
  register_link.style.display = "none";
  localStorage.setItem("show", "true");
  localStorage.setItem("out", "false");
}

function out() {
  let login_link = document.querySelector("#login-link");
  let register_link = document.querySelector("#register-link");
  let name_user = document.querySelector("#name");
  let logout_button = document.querySelector("#logout-button");

  logout_button.style.display = "none";
  name_user.style.display = "none";
  login_link.style.display = "block";
  register_link.style.display = "block";
  localStorage.setItem("out", "true");
  localStorage.setItem("show", "false");
}

function onSignIn() {
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  let form = document.createElement("form");

  form.setAttribute("method", "GET");
  form.setAttribute("action", oauth2Endpoint);

  let params = {
    client_id:
      "859376095699-ppvmjnubh5eq91o9979q96spcpvaanen.apps.googleusercontent.com",
    redirect_uri: "https://localhost/index.html",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/userinfo.profile",
    include_granted_scopes: "true",
    state: "pass-through-value",
  };

  for (var p in params) {
    let input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
}

let params = {};
let regex = /([^&=]+)=([^&]*)/g,
  m;
while ((m = regex.exec(location.href))) {
  params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}
if (Object.keys(params).length > 0) {
  localStorage.setItem("authInfo", JSON.stringify(params));
}

//hide the access token
window.history.pushState({}, document.title, "/" + "index.html");

let info = JSON.parse(localStorage.getItem("authInfo"));
console.log(JSON.parse(localStorage.getItem("authInfo")));
console.log(info["access_token"]);
console.log(info["expires_in"]);

fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
  headers: {
    Authorization: `Bearer ${[info["access_token"]]}`,
  },
})
  .then((data) => data.json())
  .then((info) => {
    console.log(info);
    document.getElementById("name").innerHTML += info.name;
    document.getElementById("image").setAttribute("src", info.picture);
  });

function logout() {
  fetch("https://oauth2.googleapis.com/revoke?token=" + info["access_token"], {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
  }).then((data) => {
    location.href = "https://localhost/index.html";
  });
}

window.onload = function () {
  let show = localStorage.getItem("show");
  let out = localStorage.getItem("out");
  if (show === "true") {
    let login_link = document.querySelector("#login-link");
    let register_link = document.querySelector("#register-link");
    let name_user = document.querySelector("#name");
    let logout_button = document.querySelector("#logout-button");

    // Ocultar el enlace y mostrar el botón
    logout_button.style.display = "block";
    name_user.style.display = "block";
    login_link.style.display = "none";
    register_link.style.display = "none";
  }
  if (out === "true") {
    let login_link = document.querySelector("#login-link");
    let register_link = document.querySelector("#register-link");
    let name_user = document.querySelector("#name");
    let logout_button = document.querySelector("#logout-button");

    // Ocultar el enlace y mostrar el botón
    logout_button.style.display = "none";
    name_user.style.display = "none";
    login_link.style.display = "block";
    register_link.style.display = "block";
  }
};

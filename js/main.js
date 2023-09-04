document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  function postForm(user) {
    try {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      alert("Formulario enviado correctamente");
    } catch (error) {
      alert("Error al enviar el formulario" + error);
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    var user = {
      name: document.getElementById("nombre").value,
      lastname: document.getElementById("apellido").value,
      birthdate: document.getElementById("fecha").value,
    };

    postForm(user);
    form.reset();
  });
});

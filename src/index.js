document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = document.getElementById("andi").value;
  let cc = "";
  let andTitle = document.getElementById("andTitle").value;
  let recipient = document.getElementById("recipient").value;
  let message =
    "Hello, my name is " +
    name +
    ", and my AND Title is " +
    andTitle +
    ". Please send me yours.";

  var link =
    `mailto:${recipient}` +
    `?cc=${cc}` +
    "&subject=" +
    encodeURIComponent("Greetings!") +
    "&body=" +
    message;

  window.location.href = link;

  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

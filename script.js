const form = document.getElementById("rsvpForm");
const success = document.getElementById("success");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = form.elements["firstName"].value.trim();
  const lastName = form.elements["lastName"].value.trim();
  const guests = form.elements["guests"].value;

  const message = `🎂 Birthday RSVP

👤 First Name: ${firstName}
👤 Last Name: ${lastName}
👥 Guests count: ${guests}

📅 29.09.2026
🕕 18:00`;

  const phone = "37496009229";

  const whatsappUrl =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  success.style.display = "block";
});
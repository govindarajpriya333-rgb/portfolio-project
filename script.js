const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("https://portfolio-project-production-c487.up.railway.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      status.innerText = "Message sent successfully!";
      form.reset();
    } else {
      status.innerText = "Error sending message!";
    }
  } catch (error) {
    status.innerText = "Server error!";
  }
});
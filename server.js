const status = document.getElementById("status");

document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  status.innerText = "Sending message...";
  status.style.color = "yellow";

  const formData = new FormData(this);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  };

  try {
    const response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      status.innerText = "✅ Message sent successfully!";
      status.style.color = "lightgreen";
      this.reset();
    } else {
      status.innerText = "❌ Failed to send message";
      status.style.color = "red";
    }

  } catch (error) {
    status.innerText = "❌ Server not reachable";
    status.style.color = "red";
  }
});
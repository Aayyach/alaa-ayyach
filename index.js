const sendMail = () => {
  let params = {
    subject: document.getElementById("subject").value,
    email: document.getElementById("email").value,
    emailContent: document.getElementById("emailContent").value,
  };

  if (
    params.subject === "" ||
    params.email === "" ||
    params.emailContent === ""
  ) {
    alert("Contact form values cannot be empty. Please try again.");
  } else if (email.value.includes("@") === false) {
    alert("Please enter a valid email address.");
  } else {
    const modal = new bootstrap.Modal(
      document.getElementById("emailSentModal"),
    );
    emailjs.send("service_2ixha0o", "template_i85ravu", params);
    modal.show();
  }
};

document.getElementById("submit-btn").addEventListener("click", sendMail);

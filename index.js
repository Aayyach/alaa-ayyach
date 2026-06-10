// Loading Screen
const loadingScreen = () => {
  let loading = document.getElementById("loading-screen");
  setTimeout(() => {
    loading.style.opacity = 0;
    setTimeout(() => {
      loading.style.display = "none";
    }, 500);
  }, 2000);
};

const firstVisitOnly = () => {
  const firstVisit = localStorage.getItem("visited");
  if (firstVisit === null) {
    loadingScreen();
    localStorage.setItem("visited", 1);
  } else {
    document.getElementById("loading-screen").style.display = "none";
  }
};

firstVisitOnly();

// EmailJS API
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
  } else if (
    params.email.includes("@") === false ||
    params.email.includes(".com") === false
  ) {
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

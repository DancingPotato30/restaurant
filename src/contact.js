export function printContact() {
  const form = document.createElement("form");
  const formTop = document.createElement("div");
  const formBody = document.createElement("div");
  const nameContainer = document.createElement("div");
  const emailContainer = document.createElement("div");
  const feedbackContainer = document.createElement("div");
  const nameLabel = document.createElement("label");
  const emailLabel = document.createElement("label");
  const feedbackLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  const emailInput = document.createElement("input");
  const submitButton = document.createElement("input");
  const feedbackInput = document.createElement("textarea");

  formTop.classList.add("formTop");
  formBody.classList.add("formBody");
  feedbackInput.setAttribute("cols", "30");
  feedbackInput.setAttribute("rows", "10");
  submitButton.setAttribute("value", "Submit Feedback");
  submitButton.setAttribute("type", "button");

  formTop.textContent = "Contact us through here!";
  nameLabel.textContent = "NAME";
  emailLabel.textContent = "EMAIL";
  feedbackLabel.textContent = "FEEDBACK";

  nameContainer.appendChild(nameLabel);
  nameContainer.appendChild(nameInput);
  formBody.appendChild(nameContainer);

  emailContainer.appendChild(emailLabel);
  emailContainer.appendChild(emailInput);
  formBody.appendChild(emailContainer);

  feedbackContainer.appendChild(feedbackLabel);
  feedbackContainer.appendChild(feedbackInput);
  formBody.appendChild(feedbackContainer);

  formBody.appendChild(submitButton);

  form.appendChild(formTop);
  form.appendChild(formBody);

  document.querySelector(".content").appendChild(form);
}

//Append elements correctly

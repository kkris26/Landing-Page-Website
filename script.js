function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  const dataForm = {
    name,
    email,
    city,
    zipCode,
    status,
  };
  return dataForm;
}

function isNumber(string) {
  return !isNaN(string);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(formData) {
  if (formData && isNumber(formData.zipCode) && checkboxIsChecked()) {
    return true;
  } else {
    return false;
  }
}

function submit(submit) {
  submit.preventDefault();
  const formData = handleGetFormData();
  const isValid = validateFormData(formData);

  const warningText = document.getElementById("warning");
  if (isValid) {
    warningText.innerHTML = "<p>Data sudah terkirim</p>";
  } else {
    warningText.innerHTML = "Silakan masukkan data dengan benar";
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", submit);

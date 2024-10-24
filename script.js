// 1. Validación del Nombre
function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameValue = nameInput.value.trim();

    if (nameValue === '') {
        nameError.textContent = 'The name field cannot be empty.';
        return false;
    } else if (nameValue.length > 50) {
        nameError.textContent = 'The name must be less than 50 characters.';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

// 2. Validación del Correo Electrónico
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        emailError.textContent = 'The email field cannot be empty.';
        return false;
    } else if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email (example: user@example.com).';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

// 3. Validación del Asunto
function validateSubject() {
    const subjectInput = document.getElementById('subject');
    const subjectError = document.getElementById('subjectError');
    const subjectValue = subjectInput.value.trim();

    if (subjectValue === '') {
        subjectError.textContent = 'The subject field cannot be empty.';
        return false;
    } else if (subjectValue.length > 50) {
        subjectError.textContent = 'The subject must be less than 50 characters.';
        return false;
    } else {
        subjectError.textContent = '';
        return true;
    }
}

// 4. Validación del Mensaje
function validateMessage() {
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    const messageValue = messageInput.value.trim();

    if (messageValue === '') {
        messageError.textContent = 'The message field cannot be empty.';
        return false;
    } else if (messageValue.length > 300) {
        messageError.textContent = 'The message must be less than 300 characters.';
        return false;
    } else {
        messageError.textContent = '';
        return true;
    }
}

// 5. Habilitar el botón de Enviar
function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    const submitButton = document.getElementById('submitButton');

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        submitButton.disabled = false;
        return true;
    } else {
        submitButton.disabled = true;
        return false;
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Realiza la validación
    const isFormValid = validateForm();

    if (isFormValid) {
        // Enviar el correo con EmailJS usando el archivo de configuración
        emailjs.send(
            emailConfig.serviceId,
            emailConfig.templateId, 
            {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            }
        )
        .then(function(response) {
            alert("Email sent successfully!");
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.log('FAILED...', error);
        });
    }
});

// Escucha de eventos en los campos para habilitar el botón de envío
document.getElementById('name').addEventListener('input', validateForm);
document.getElementById('email').addEventListener('input', validateForm);
document.getElementById('subject').addEventListener('input', validateForm);
document.getElementById('message').addEventListener('input', validateForm);

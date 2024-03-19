function sendEmail(contactForm) {
    emailjs.sendForm('service_hxi1bh6', 'bogdan', contactForm).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
            console.log(contactForm.name.value);
        },
    );
    // block loading a new page
    return false;
}
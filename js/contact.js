document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;
    
    // Store in localStorage
    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    messages.push({ name, email, subject, message, date: new Date().toISOString() });
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    document.getElementById('form-message').innerHTML = '<p style="color: green;">✓ Message sent successfully! We\'ll get back to you soon.</p>';
    e.target.reset();
    
    setTimeout(() => {
        document.getElementById('form-message').innerHTML = '';
    }, 3000);
});

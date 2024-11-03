// config.js
async function loadConfig() {
    const response = await fetch('config.txt');
    const text = await response.text();

    const config = {};
    text.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            config[key.trim()] = value.trim();
        }
    });

    // Crea el objeto emailConfig usando los valores de config
    const emailConfig = {
        userId: config.EMAILJS_USER_ID,
        templateId: config.EMAILJS_TEMPLATE_ID,
        serviceId: config.EMAILJS_SERVICE_ID
    };

    return emailConfig;
}

loadConfig().then(emailConfig => {
    console.log('Email configuration loaded:', emailConfig);
    // Aquí puedes usar emailConfig para tus necesidades
}).catch(error => {
    console.error('Error loading config:', error);
});

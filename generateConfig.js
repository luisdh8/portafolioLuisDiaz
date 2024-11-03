require('dotenv').config({ path: 'keys.env' }); // Asegúrate de especificar la ruta del archivo
const fs = require('fs');

const configContent = `
const emailConfig = {
    userId: '${process.env.EMAILJS_USER_ID}',
    templateId: '${process.env.EMAILJS_TEMPLATE_ID}',
    serviceId: '${process.env.EMAILJS_SERVICE_ID}'
};
`;

fs.writeFileSync('config.js', configContent.trim());
console.log('config.js has been generated!');

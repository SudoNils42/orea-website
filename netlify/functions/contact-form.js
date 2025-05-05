// Netlify function pour envoyer des emails depuis le formulaire de contact
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Vérifier la méthode HTTP
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Méthode non autorisée' }),
    };
  }

  try {
    // Analyser les données du corps de la requête
    const data = JSON.parse(event.body);
    const { name, email, subject, message, to } = data;

    // Créer un transporteur SMTP
    // Note: vous devrez configurer ces variables dans les variables d'environnement Netlify
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ex: smtp.gmail.com
      port: process.env.SMTP_PORT, // ex: 587
      secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour les autres ports
      auth: {
        user: process.env.SMTP_USER, // votre adresse email
        pass: process.env.SMTP_PASS, // votre mot de passe ou clé d'application
      },
    });

    // Configurer les options de l'email
    const mailOptions = {
      from: `"Site Web Villa Orea" <${process.env.SMTP_USER}>`,
      to: to,
      replyTo: email,
      subject: subject,
      text: `Nouveau message de ${name} (${email}):\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2e8b57;">Nouveau message depuis le formulaire de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #2e8b57; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #6c757d; font-size: 12px;">Ce message a été envoyé depuis le formulaire de contact de Villa Orea.</p>
        </div>
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    // Répondre avec succès
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message envoyé avec succès!' }),
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    // Répondre avec une erreur
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erreur lors de l\'envoi du message', error: error.message }),
    };
  }
}; 
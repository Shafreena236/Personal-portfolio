import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { GitFork, Link2, Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('Email service is not configured yet. Please use the email or phone details above.');
      return;
    }

    setStatus('Sending...');

    emailjs.sendForm(serviceId, templateId, form.current, { publicKey })
      .then(() => {
        setStatus('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        setStatus('Failed to send. Please try again.');
        console.error(error);
      });
  };

  return (
    <section id="contact" className="section">
      <div className="shell section__inner">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-copy">Reach out directly using the details from my resume.</p>

        <div className="social-row">
          <a href="https://www.linkedin.com/in/shafreena-ahmed-0a8518367/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-row__link">
            <Link2 size={18} />
          </a>
          <a href="https://github.com/Shafreena236" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-row__link">
            <GitFork size={18} />
          </a>
        </div>

        <div className="cards-grid contact-grid">
          <a href="mailto:ahmedshafreena@gmail.com" className="card contact-card">
            <Mail className="contact-card__icon" />
            <div>
              <p className="item-label">Email</p>
              <p className="body-text body-text--break">ahmedshafreena@gmail.com</p>
            </div>
          </a>

          <a href="tel:8124697660" className="card contact-card">
            <Phone className="contact-card__icon" />
            <div>
              <p className="item-label">Phone</p>
              <p className="body-text">8124697660</p>
            </div>
          </a>

          <div className="card contact-card">
            <MapPin className="contact-card__icon" />
            <div>
              <p className="item-label">Location</p>
              <p className="body-text">Chennai, India</p>
            </div>
          </div>

          <div className="card contact-card">
            <Link2 className="contact-card__icon" />
            <div>
              <p className="item-label">Profiles</p>
              <a href="https://www.linkedin.com/in/shafreena-ahmed-0a8518367/" target="_blank" rel="noreferrer" className="profile-link">LinkedIn</a>
              <a href="https://github.com/Shafreena236" target="_blank" rel="noreferrer" className="profile-link">GitHub</a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="contact-form__grid">
            <input type="text" name="user_name" placeholder="Your Name" required className="contact-input" />
            <input type="email" name="user_email" placeholder="Your Email" required className="contact-input" />
          </div>
          <input type="tel" name="user_phone" placeholder="Phone Number (optional)" className="contact-input" />
          <textarea name="message" rows="6" placeholder="Your Message" required className="contact-input contact-input--textarea"></textarea>

          <button type="submit" className="button-primary button-primary--full">
            Send Message <Send />
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

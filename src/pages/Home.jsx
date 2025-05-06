import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FiMail as MailIcon } from 'react-icons/fi';
import { FaLinkedinIn as LinkedinIcon, FaGithub as GithubIcon } from 'react-icons/fa';
import ProjectsSection from '../components/ProjectsSection';
import About from '../components/About.js';

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_49s86ki',
      'template_a6cur9u',
      form.current,
      '6nL3BfPEWFY2WpM3r'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message envoyé avec succès !');
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        alert('Erreur lors de l’envoi...');
      }
    );
  };

  return (
    <div className="home">

      <section id="hero" className="hero">
        <h1>Bienvenue</h1>
        <p>Je suis Théo Foligné.</p>
        <div class="scroll-down5"></div>
      </section>

<About />

<ProjectsSection />

      <section id="contact" className="contact-icons">
        <h2>Contact</h2>
        <div className="icons">
          <a href="mailto:halodino@hotmail.fr" target="_blank" rel="noreferrer" aria-label="Email">
            <i className="icon"><MailIcon /></i>
          </a>
          <a href="https://www.linkedin.com/in/th%C3%A9o-folign%C3%A9-1b6124271/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="icon"><LinkedinIcon /></i>
          </a>
          <a href="https://github.com/FoligneTheo" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="icon"><GithubIcon /></i>
          </a>
        </div>
      </section>

      <section id="form" className="contact-form">
        <h2>Contactez-moi</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Nom :
            <input type="text" name="name" required />
          </label>
          <label>
            Email :
            <input type="email" name="email" required />
          </label>
          <label>
            Message :
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </section>

    </div>
  );


}

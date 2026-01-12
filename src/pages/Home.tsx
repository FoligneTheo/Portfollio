import React, { useRef, FormEvent } from "react";
import emailjs from "emailjs-com";

import { FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import type { IconBaseProps } from "react-icons";

import ProjectsSection from "../components/ProjectsSection";
import About from "../components/About";

// On force le type des icônes à "any" pour court-circuiter l'erreur TS2786
const MailIcon = (props: IconBaseProps) => {
  const Icon = FiMail as any;
  return <Icon {...props} />;
};

const LinkedinIcon = (props: IconBaseProps) => {
  const Icon = FaLinkedinIn as any;
  return <Icon {...props} />;
};

const GithubIcon = (props: IconBaseProps) => {
  const Icon = FaGithub as any;
  return <Icon {...props} />;
};

const Home: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_49s86ki",
        "template_a6cur9u",
        form.current,
        "6nL3BfPEWFY2WpM3r"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Erreur lors de l'envoi...");
        }
      );
  };

  return (
    <div className="home">
      <section id="hero" className="hero">
        <h1>Bienvenue</h1>
        <p>Je suis Théo Foligné.</p>
        <div className="scroll-down5"></div>
      </section>

      <About />

      <ProjectsSection />

      <section id="contact" className="contact-icons">
        <h2>Contact</h2>
        <div className="icons">
          <a href="mailto:halodino@hotmail.fr" target="_blank" rel="noreferrer" aria-label="Email">
            <span className="icon"><MailIcon /></span>
          </a>

          <a href="https://www.linkedin.com/in/théo-foligné-1b6124271/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <span className="icon"><LinkedinIcon /></span>
          </a>

          <a href="https://github.com/FoligneTheo" target="_blank" rel="noreferrer" aria-label="GitHub">
            <span className="icon"><GithubIcon /></span>
          </a>
        </div>
      </section>

      <section id="form" className="contact-form">
        <h2>Contactez-moi</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Nom : <input type="text" name="name" required /></label>
          <label>Email : <input type="email" name="email" required /></label>
          <label>Message : <textarea name="message" rows={5} required /></label>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
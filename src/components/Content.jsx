import React from "react";
import "./Content.css";

export default function Content() {
  return (
    <main id="main-content" className="content">
      <section id="profil">
        <h2>Profil</h2>
        <p>Développeur web basé à Montréal, spécialisé dans le stack MERN et les bonnes pratiques accessibilité, SEO et performance. Expériences concrètes avec React, Angular, Astro, Bootstrap, HTML/CSS et Git.</p>
      </section>

      <section id="competences">
        <h2>Compétences Techniques</h2>
        <ul>
          <li>Frontend : React, Angular, Bootstrap, Astro, jQuery, HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Backend : Node.js/Express, PHP, Laravel, Spring Boot, ASP.NET Core</li>
          <li>Bases de données : MongoDB, PostgreSQL, SQL, SQLite</li>
          <li>Outils : Git (GitHub/GitLab), API REST, Vercel, Render, Cloudinary</li>
          <li>Infrastructure : Docker, VS Code, IntelliJ, Eclipse</li>
        </ul>
      </section>

      <section id="projets">
        <h2>Projets</h2>
        <ul>
          <li><strong>Livano Agency (Stage)</strong> : Refonte du site vitrine avec Astro, React, TypeScript, Tailwind CSS. Focus SEO, responsive, sécurité. Déploiement Cloudflare.</li>
          <li><strong>YouChef (Projet perso)</strong> : Plateforme CRUD React/Node.js/Express/MongoDB, API JWT, animations Framer Motion. Déploiement Vercel & Render, images sur Cloudinary.</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <ul>
          <li>Téléphone : <a href="tel:+14385293975">438 529 3975</a></li>
          <li>Email : <a href="mailto:zarajeanfabrice@gmail.com">zarajeanfabrice@gmail.com</a></li>
          <li>GitHub : <a href="https://github.com/jfzara" target="_blank" rel="noopener noreferrer">jfzara</a></li>
          <li>LinkedIn : <a href="https://www.linkedin.com/in/jfzara-developpeur-react-node-montreal/" target="_blank" rel="noopener noreferrer">Profil</a></li>
        </ul>
      </section>
    </main>
  );
}
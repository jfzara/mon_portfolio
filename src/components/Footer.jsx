import React from 'react'
import './Footer.css' // pour le style du focus

export default function Footer() {
  return (
    <footer>
      <nav aria-label="Liens du pied de page" id="footer-nav">
        <ul>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/mentions-legales">Mentions légales</a></li>
          <li><a href="/plan-du-site">Plan du site</a></li>
          <li>
            <button onClick={() => alert('Newsletter inscrite !')}>
              S’abonner à la newsletter
            </button>
          </li>
        </ul>
      </nav>
      <p>&copy; 2025 MonSite</p>
    </footer>
  )
}
 
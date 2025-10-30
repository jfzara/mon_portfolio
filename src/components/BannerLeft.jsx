import React from "react";
import "./BannerLeft.css";

export default function BannerLeft() {
  return (
    <aside className="banner-left">
     
      <div className="banner-info">
        <h1>Jean Fabrice ZARA</h1>
        <h2>Développeur Web React & Node.js</h2>
        <p className="slogan">Le développement web pour vos besoins</p>
        <div className="contact">
          <a href="tel:+14385293975">438 529 3975</a>
          <a href="mailto:zarajeanfabrice@gmail.com">Email</a>
          <a href="https://github.com/jfzara" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jfzara-developpeur-react-node-montreal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
   
    </aside>
  );
}
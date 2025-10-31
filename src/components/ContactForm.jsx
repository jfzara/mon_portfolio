import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../theme";

const Wrap = styled.section`
  grid-area: contact;
  padding: 1rem;
`;

const Card = styled.form`
  background: #fff;
  border-radius: ${theme.radius};
  padding: 1rem;
  box-shadow: 0 12px 30px rgba(0,0,0,0.06);
  display:flex;
  gap:0.75rem;
  flex-direction:column;
`;

const Row = styled.div` display:flex; gap:0.5rem; flex-wrap:wrap; `;
const Input = styled.input`
  padding:0.6rem 0.75rem;
  border-radius:8px;
  border:1px solid rgba(0,0,0,0.06);
  flex:1;
  min-width:160px;
`;
const Textarea = styled.textarea`
  padding:0.6rem 0.75rem;
  border-radius:8px;
  border:1px solid rgba(0,0,0,0.06);
  resize:vertical;
  min-height:100px;
`;
const Actions = styled.div` display:flex; gap:0.5rem; align-items:center; `;
const Btn = styled.button`
  background: ${theme.colors.accent};
  color:${theme.colors.text};
  padding:0.6rem 1rem;
  border-radius:10px;
  font-weight:800;
  border:0;
  cursor:pointer;
  &:hover, &:focus { transform: translateY(-2px); }
`;
const Link = styled.a`
  color:${theme.colors.muted};
  font-weight:700;
  padding:0.6rem 0.85rem;
  border-radius:8px;
  border:1px solid rgba(0,0,0,0.04);
`;

export default function ContactForm(){
  const [form, setForm] = useState({name:"", email:"", message:""});
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    // Fallback: open mailto with prefilled subject and body (keeps things simple & functional)
    const subject = encodeURIComponent(`Nouveau contact de ${form.name || "visiteur"}`);
    const body = encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:zarajeanfabrice@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    // reset optional
    setForm({name:"", email:"", message:""});
  };

  return (
    <Wrap aria-labelledby="contact-title">
      <Card onSubmit={handleSubmit} aria-live="polite">
        <h2 id="contact-title" tabIndex="0">Contact rapide</h2>

        <p style={{margin:0, color:theme.colors.muted}}>Message court — réponse rapide sous 48h.</p>

        <Row>
          <Input
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            aria-label="Votre nom"
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            aria-label="Email"
            required
          />
        </Row>

        <Textarea
          name="message"
          placeholder="Expliquez brièvement votre projet ou question..."
          value={form.message}
          onChange={handleChange}
          aria-label="Message"
          required
        />

        <Actions>
          <Btn type="submit" aria-label="Envoyer le message">Envoyer</Btn>
          <Link href="tel:+14385293975">Appeler</Link>
          <Link href="mailto:zarajeanfabrice@gmail.com">Email direct</Link>
        </Actions>

        {sent && <div role="status" style={{color:theme.colors.muted}}>Votre message est prêt — ouverture du client mail.</div>}
      </Card>
    </Wrap>
  );
}
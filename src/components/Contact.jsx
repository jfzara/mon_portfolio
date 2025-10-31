// components/Contact.jsx
import React from "react";
import styled from "styled-components";

/*
  Contact: box with direct CTAs.
  Justification: conversion — doit rester visible, simple, et accessible.
  Contains semantic contact info for SEO (mailto, tel).
*/

const Section = styled.section`
  padding:1.25rem;
`;

const Card = styled.div`
  background:#fff;
  border-radius:var(--radius);
  padding:1rem;
  box-shadow: 0 8px 24px rgba(10,10,10,0.04);
  display:flex;
  gap:1rem;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
`;

const Left = styled.div`
  max-width:65%;
  min-width:220px;
`;

const Title = styled.h2` font-size:1.0625rem; `;
const Text = styled.p` color:var(--muted); margin-top:0.5rem; `;

const Actions = styled.div`
  display:flex;
  gap:0.5rem;
  align-items:center;
  justify-content:flex-end;
  flex:1;
  min-width:200px;
`;

const CTA = styled.a`
  padding:0.6rem 1rem;
  border-radius:8px;
  background:var(--accent);
  color:var(--text);
  font-weight:700;
  &:hover, &:focus { transform: translateY(-2px); }
`;

const Ghost = styled.a`
  padding:0.6rem 1rem;
  border-radius:8px;
  background:transparent;
  border:1px solid rgba(0,0,0,0.06);
  color:var(--text);
  font-weight:700;
`;

export default function Contact(){
  return (
    <Section aria-labelledby="contact-title">
      <Card role="region" aria-label="Section contact">
        <Left>
          <Title id="contact-title">Discutons de votre projet web</Title>
          <Text>
            Disponible pour missions freelance, collaborations ou CDI — développement React/Node.js, optimisation SEO et accessibilité. 
            Contact rapide par email ou téléphone.
          </Text>
        </Left>

        <Actions>
          <CTA href="mailto:zarajeanfabrice@gmail.com">Envoyer un email</CTA>
          <Ghost href="tel:+14385293975">Appeler</Ghost>
          <Ghost href="https://github.com/jfzara" target="_blank" rel="noopener noreferrer">GitHub</Ghost>
        </Actions>
      </Card>
    </Section>
  );
}
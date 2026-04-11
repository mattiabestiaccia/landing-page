---
title: "Restaurant Phone Bot"
description: "Sistema IVR bilingue (IT/EN) multi-tenant per la gestione automatizzata delle chiamate ai ristoranti. Una singola codebase serve tutti i clienti tramite configurazione JSON."
tags: ["Node.js", "Twilio", "Supabase", "Vercel", "JavaScript", "Jest", "Multi-tenant"]
githubUrl: "https://github.com/mattiabestiaccia/restaurant-phone-bot"
featured: true
order: 6
---

## Overview

Bot telefonico multi-tenant B2B SaaS con IVR bilingue (IT/EN) per la gestione automatizzata delle chiamate ai ristoranti. Ogni azienda riceve un numero Twilio dedicato, ma una singola codebase serve tutti i clienti tramite configurazione JSON — nessuna modifica al codice per aggiungere un nuovo cliente.

## Key Features

- **IVR bilingue** — selezione automatica lingua IT/EN, gestione completa del flusso di chiamata
- **Invio link prenotazione** — WhatsApp con fallback SMS automatico
- **Trasferimento operatore** — smistamento verso numero umano con logica orari
- **Controllo orari di apertura** — timezone-aware, supporto doppio turno
- **Multi-tenant via config** — nuova attività aggiunta con un file JSON, zero codice
- **Rate limiting e analytics** — fail-open, non bloccante, log eventi su Supabase
- **56 test Jest** — 4 suite, coverage completa delle librerie core

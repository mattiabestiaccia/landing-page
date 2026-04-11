---
title: "Magazzino Sanitario"
description: "App desktop cross-platform per la gestione di magazzino sanitario. Tracciamento scadenze, scorte minime, trasferimenti tra inventari e gestione ordini. Offline-first con SQLite embedded."
tags: ["Tauri 2", "React", "TypeScript", "SQLite", "Zustand", "Vitest", "shadcn/ui", "Rust"]
githubUrl: "https://github.com/mattiabestiaccia/magazzino-sanitario"
featured: true
order: 8
---

## Overview

Applicazione desktop cross-platform (Windows, macOS, Linux) per la gestione di magazzino sanitario. Costruita con Tauri 2 per un eseguibile leggero (~10MB) offline-first con SQLite embedded — nessun server, nessuna connessione richiesta.

## Key Features

- **Gestione articoli** — CRUD completo con codici auto-generati (ART-XXXX), categorie e unità di misura
- **Tracciamento scadenze** — badge colorati (verde/giallo/rosso) e filtro articoli in scadenza
- **Scorte minime** — alert automatico per articoli sotto soglia con notifica al caricamento
- **Trasferimenti** — spostamento articoli tra inventari multipli (es. Magazzino → Armadio) con log
- **Batch operations** — selezione multipla articoli e aggiornamento quantità in blocco (+/-1/5/10)
- **Preset categorie** — gestione preset riusabili per descrizioni e categorie
- **Dark mode** — tema chiaro/scuro persistente
- **89 test** — Vitest unit tests con mock completo delle API Tauri + skeleton Playwright e2e

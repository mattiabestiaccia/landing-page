---
title: "Gmail Auto-Triage"
description: "CLI tool that fetches unread Gmail emails, classifies them with Gemini Flash, and applies AutoTriage labels automatically. Runs unattended via cron."
tags: ["Python", "Gemini Flash", "Gmail API", "LLM", "uv", "pytest"]
githubUrl: "https://github.com/mattiabestiaccia/gmail-auto-triage"
featured: true
order: 4
---

## Overview

CLI tool che recupera le email non lette da Gmail, le classifica con Gemini Flash e applica le label `AutoTriage/<Categoria>` in automatico. Progettato per girare non presidiato tramite cron.

## Key Features

- **Classificazione LLM** — usa Gemini Flash con output JSON strutturato e schema validation
- **Gmail API** — fetch, label creation e applicazione label via OAuth2
- **Configurazione YAML** — categorie, descrizioni ed esempi modificabili senza toccare il codice
- **Idempotente** — le email già classificate vengono saltate
- **Dry-run mode** — classifica senza applicare label per test e debug
- **Fuzzy matching** — rapidfuzz per gestire risposte LLM borderline
- **Retry logic** — tenacity per rate limits dell'API Gemini

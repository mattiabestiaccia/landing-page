---
title: "Social Content Automation"
description: "Pipeline AI serverless che recupera notizie quotidiane da arXiv e HuggingFace, seleziona il miglior articolo con LLM, genera un post LinkedIn divulgativo in italiano e lo pubblica previo approvazione via email."
tags: ["Next.js", "TypeScript", "Gemini AI", "LinkedIn API", "Resend", "GitHub Actions", "Neon"]
githubUrl: "https://github.com/mattiabestiaccia/social-content-automation"
featured: false
order: 7
---

## Overview

Pipeline serverless con un checkpoint umano: ogni giorno recupera automaticamente le notizie AI più rilevanti, usa Gemini per selezionare e sintetizzare l'articolo migliore, genera un post LinkedIn divulgativo in italiano, e invia una email di review con link approve/reject prima della pubblicazione.

## Key Features

- **Multi-source news fetching** — arXiv (Atom XML), HuggingFace `/api/daily_papers`, RSS blog (Anthropic, OpenAI, DeepMind) in parallelo
- **Deduplicazione fuzzy** — cross-source con fuzzy title matching contro la history su Neon
- **LLM pipeline** — Gemini Flash per ranking/selezione, Gemini Pro per generazione post (max 3000 chars)
- **Human-in-the-loop** — email review con link approve/reject via Resend + React Email
- **LinkedIn publishing** — Posts API con OAuth 2.0 PKCE, nessuna libreria wrapper
- **Cron via GitHub Actions** — trigger giornaliero, completamente serverless su Vercel

---
title: "Markdown Voorbeelden & Gids voor n8n"
date: "2025-12-28"
excerpt: "Een referentiegids voor het maken van rijke blogposts via n8n, inclusief links, infographics en afbeeldingen."
category: "Handleiding"
---

Hieronder vind je voorbeelden van hoe je verschillende elementen in je blogposts kunt gebruiken via n8n.

## 1. Interne en Externe Links

Het is belangrijk voor SEO om zowel naar je eigen pagina's te linken als naar relevante externe bronnen.

*   **Interne link:** [Lees meer over onze SEO diensten](/diensten/seo-blog-creator) (Gebruik een relatief pad).
*   **Externe link:** [Bezoek de officiële OpenAI website](https://openai.com) (Gebruik de volledige URL).

## 2. Foto met Alt Tekst

Afbeeldingen zijn cruciaal voor een rijk verhaal. Vergeet niet de alt-tekst in te vullen voor toegankelijkheid en SEO.

![Een modern kantoor in Groningen waar mensen werken met AI tools](https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000)
*Ondertitel: De eerste afbeelding in je artikel wordt automatisch als thumbnail gebruikt op de overzichtspagina.*

## 3. Infographic Voorbeeld

Hoewel Markdown voornamelijk tekst is, kun je HTML gebruiken om visuele "infographics" of calls-to-action te maken die direct in de tekst opvallen.

<div style="background: rgba(132, 110, 247, 0.1); border: 1px solid rgba(132, 110, 247, 0.3); padding: 2rem; border-radius: 1.5rem; margin: 2rem 0;">
    <h3 style="color: #fff; margin-top: 0;">AI Groei Statistieken 2025</h3>
    <div style="display: grid; grid-cols: 1; gap: 1rem; margin-top: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 60%; height: 8px; background: #846ef7; border-radius: 4px;"></div>
            <span style="color: #9CA3AF; font-size: 0.875rem;">+60% Efficiëntie</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 45%; height: 8px; background: #a594f9; border-radius: 4px;"></div>
            <span style="color: #9CA3AF; font-size: 0.875rem;">-45% Kosten</span>
        </div>
    </div>
    <p style="font-size: 0.875rem; color: #6B7280; margin-bottom: 0; margin-top: 1.5rem;">
        *Bron: Flowstate Intern Onderzoek*
    </p>
</div>

## 4. Tips voor n8n

Wanneer je blogs genereert via n8n:
1. Zorg dat de **slug** (de bestandsnaam) geen spaties bevat.
2. Gebruik altijd de **frontmatter** (de tekst tussen de `---` streepjes) bovenaan het bestand.
3. De eerste afbeelding die de AI in de tekst plaatst, wordt de 'preview' op de blogpagina.

Succes met automatiseren!

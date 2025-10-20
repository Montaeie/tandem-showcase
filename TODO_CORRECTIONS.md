# 📋 TODO LIST - CORRECTIONS TANDEM AI

**Date:** 20 Octobre 2025
**Audit Complet:** 60+ éléments identifiés

---

## 🔴 PRIORITÉ CRITICAL (À FAIRE MAINTENANT)

### 1. Supprimer Fondateur Fictif "Tyler Durden"
- [ ] **Fichier:** `/constants/founders.ts` ligne 9-14
- [ ] **Action:** Remplacer par vrai membre équipe Tandem ou supprimer
- [ ] **Impact:** Crédibilité du site en jeu

### 2. Remplacer "Nodus" par "Tandem" dans Pricing
- [ ] **Fichier:** `/constants/pricing.tsx` lignes 258, 275
- [ ] **Remplacer:** "Nodus MCP" → "Tandem MCP"
- [ ] **Remplacer:** "Nodus Canvas" → "Tandem Canvas"

### 3. Corriger Métadonnées Pages avec "Notus"
- [ ] `/app/pricing/page.tsx` ligne 10: "Pricing - Notus" → "Pricing - Tandem AI"
- [ ] `/app/about/page.tsx` ligne 20: Remplacer "Notus" par "Tandem AI"
- [ ] `/app/blog/page.tsx` ligne 13: Remplacer mentions Aceternity
- [ ] `/app/careers/page.tsx` ligne 25, 259: "Nodus/Notus" → "Tandem AI"
- [ ] `/app/contact/page.tsx`: Vérifier titre SEO (probablement "Nodus")

---

## 🟠 PRIORITÉ HIGH (CETTE SEMAINE)

### Pages Manquantes (Liens Cassés)

#### 4. Créer Page /customers
- [ ] Créer `/app/customers/page.tsx`
- [ ] Contenu: Case studies Qonto, Sellsy, Aircall
- [ ] Ou rediriger vers section témoignages home

#### 5. Créer Pages Légales
- [ ] `/app/privacy-policy/page.tsx`
- [ ] `/app/terms-of-service/page.tsx`
- [ ] `/app/cookie-policy/page.tsx`
- [ ] Utiliser templates légaux standards adaptés

### Contenu Template Répétitif

#### 6. Personnaliser Benefits Template
- [ ] **Fichier:** `/components/benefits.tsx` lignes 30, 36, 42, 48, 54, 60
- [ ] **Problème:** 6x le même texte "Visually orchestrate autonomous agents..."
- [ ] **Action:** Supprimer fichier (remplacé par `benefits-tandem.tsx`) OU personnaliser chaque bénéfice

#### 7. Personnaliser Use Cases Template
- [ ] **Fichier:** `/components/use-cases.tsx` lignes 23, 29, 35, 41, 47, 53
- [ ] **Problème:** 6x le même texte répétitif
- [ ] **Action:** Supprimer fichier (remplacé par `use-cases-tandem.tsx`) OU adapter contenu

#### 8. Supprimer/Remplacer Anciens Composants
- [ ] Vérifier si `<Benefits />` ancien est toujours dans `/app/page.tsx`
- [ ] Vérifier si `<UseCases />` ancien est toujours dans `/app/page.tsx`
- [ ] Si oui, les retirer et garder seulement versions Tandem

### Fondateurs et Équipe

#### 9. Vérifier Fondateurs Réels
- [ ] **Manu Arora** (ligne 3): Créateur template Aceternity - est-il vraiment chez Tandem?
- [ ] **Alex Rodriguez** (ligne 15): Vérifier identité réelle
- [ ] **Emily Watson, David Kim, Jessica Taylor**: Photos Unsplash - remplacer par vraie équipe

#### 10. Photos Équipe
- [ ] Vérifier `/public/team/1.png` à `6.png` = vraie équipe ou stock photos?
- [ ] Remplacer avatars fondateurs par photos réelles

### Narrative et Messaging

#### 11. Corriger Page About
- [ ] **Fichier:** `/app/about/page.tsx`
- [ ] Ligne 37: "Founded by engineers and AI researchers, Notus was born..." → Tandem
- [ ] Ligne 43: "Today, Notus powers..." → Tandem
- [ ] Toute la narrative "agent builder" → "user copilot"

#### 12. Adapter How It Works
- [ ] **Fichier:** `/components/how-it-works/index.tsx`
- [ ] Ligne 71: Remplacer narrative "workflows" par "user guidance"
- [ ] Adapter steps pour Tandem (prompt → understand → guide → complete)

#### 13. Adapter Agentic Intelligence
- [ ] **Fichier:** `/components/agentic-intelligence/index.tsx`
- [ ] Ligne 38-40: Changer "Build agents" vers "Guide users"
- [ ] Titre section: "Built for Agentic Intelligence" → quelque chose de plus Tandem

---

## 🟡 PRIORITÉ MEDIUM (SEMAINE PROCHAINE)

### Liens et Navigation

#### 14. Corriger Liens Carrières
- [ ] **Fichier:** `/constants/careers.ts`
- [ ] 8 positions avec `href: "#"` (lignes 15, 34, 55, 74, 93, 114, 133, 152)
- [ ] Créer pages individuelles ou formulaire unique de candidature

#### 15. Liens Réseaux Sociaux
- [ ] **Fichier:** `/components/footer.tsx`
- [ ] Ligne 149: Twitter → vrai compte Tandem
- [ ] Ligne 166: LinkedIn → vrai compte Tandem
- [ ] Ligne 185: Instagram → vrai compte Tandem (ou supprimer)

#### 16. Liens Fondateurs
- [ ] **Fichier:** `/constants/founders.ts`
- [ ] Lignes 18, 24, 29, 36: URLs `"#"` → vrais liens LinkedIn/Twitter ou retirer

### Configuration

#### 17. Mettre à Jour .env.sample
- [ ] **Fichier:** `.env.sample` ligne 1
- [ ] Remplacer: `https://notus-agent-marketing-template-aceternity.vercel.app/`
- [ ] Par: `https://usetandem.ai`

### Métriques et Données

#### 18. Valider Métriques About Page
- [ ] **Fichier:** `/app/about/page.tsx` lignes 108-110
- [ ] "1.2M+ Workflows created" - Vrai pour Tandem?
- [ ] "6.4k Tech Community" - Vrai?
- [ ] "1.2K G2 reviews" - Vrai?
- [ ] Remplacer par métriques réelles Tandem

### Pages à Vérifier/Adapter

#### 19. Page Playground
- [ ] **Fichier:** `/app/playground/page.tsx`
- [ ] Est-ce nécessaire pour Tandem?
- [ ] Si oui, adapter contenu. Si non, supprimer.

#### 20. Pages Sign-in/Sign-up
- [ ] Vérifier cohérence branding
- [ ] S'assurer metadata = Tandem (pas Notus)
- [ ] Vérifier formulaires

#### 21. Page Blog
- [ ] **Fichier:** `/app/blog/page.tsx`
- [ ] Ligne 31: "At Notus, we educate..." → Tandem
- [ ] Adapter narrative pour Tandem

---

## 🟢 PRIORITÉ LOW (Nice to Have)

### CSS et Styling

#### 22. Renommer Classes Template
- [ ] Rechercher toutes les occurrences de `shadow-aceternity`
- [ ] Renommer en `shadow-tandem` ou classe neutre
- [ ] Environ 10+ occurrences dans le projet

#### 23. Variables CSS Template
- [ ] **Fichier:** `/app/globals.css` ligne 26
- [ ] `--shadow-aceternity` → renommer ou commenter

### Assets

#### 24. Vérifier Logos Numérotés
- [ ] `/public/logos/1.png` à `10.png` - que sont-ils?
- [ ] S'ils sont du template, supprimer
- [ ] S'ils sont utilisés, documenter

#### 25. Banner/OG Image
- [ ] `/public/banner.png` - est-ce personnalisé Tandem?
- [ ] Si template, créer nouveau banner avec logo Tandem

#### 26. Dashboard Screenshots
- [ ] `/public/dashboard.png` et `dashboard@3x.png`
- [ ] Vérifier si screenshots réels produit Tandem
- [ ] Si template, remplacer par vraies captures

### Terminologie

#### 27. Standardiser "AI copilot"
- [ ] Rechercher variations: "AI-copilot", "copilot", "AI Success Coach"
- [ ] Décider: "AI copilot" ou "AI-copilot"
- [ ] Appliquer partout de façon cohérente

---

## 📊 RÉSUMÉ PAR CATÉGORIE

| Catégorie | CRITICAL | HIGH | MEDIUM | LOW | Total |
|-----------|----------|------|--------|-----|-------|
| Contenu/Texte | 3 | 5 | 3 | 1 | 12 |
| Pages | 0 | 2 | 3 | 0 | 5 |
| Données/Métriques | 0 | 2 | 1 | 0 | 3 |
| Liens | 0 | 1 | 3 | 0 | 4 |
| Assets | 0 | 1 | 0 | 3 | 4 |
| **TOTAL** | **3** | **11** | **10** | **4** | **28 tâches** |

---

## 🎯 PLAN D'ACTION SUGGÉRÉ

### Jour 1 (AUJOURD'HUI) - CRITICAL
1. ✅ Supprimer Tyler Durden
2. ✅ Remplacer tous les "Nodus/Notus" par "Tandem"
3. ✅ Corriger metadata SEO pages principales

### Jour 2 - HIGH Priority
4. Créer pages manquantes (/customers, /privacy-policy, etc.)
5. Supprimer composants template anciens
6. Valider fondateurs et équipe

### Jour 3 - HIGH Priority (suite)
7. Adapter narrative About/How It Works
8. Corriger contenu répétitif
9. Adapter messaging "agents" → "copilot"

### Semaine suivante - MEDIUM
10. Liens carrières et réseaux sociaux
11. Valider métriques
12. Pages secondaires

### Plus tard - LOW
13. CSS cleanup
14. Assets template
15. Terminologie fine-tuning

---

## 📝 NOTES

- **Temps estimé CRITICAL:** 2-3 heures
- **Temps estimé HIGH:** 2-3 jours
- **Temps estimé MEDIUM:** 3-5 jours
- **Temps estimé LOW:** 1-2 jours
- **TOTAL:** ~2 semaines pour tout corriger

---

## ✅ DÉJÀ COMPLÉTÉ

- [x] Couleur brand #30f191
- [x] Logo Tandem dans header/footer
- [x] Navigation adaptée (Product, Customers, Pricing, Company)
- [x] Hero section personnalisée
- [x] 7 vidéos intégrées (1 hero + 6 use cases)
- [x] Use Cases Tandem (nouveau composant)
- [x] Benefits Tandem (nouveau composant)
- [x] Témoignages clients réels
- [x] FAQs Tandem-spécifiques
- [x] Security badges
- [x] Logo cloud avec vrais clients
- [x] Metadata principale Tandem
- [x] Config globale Tandem

**Progression actuelle: ~40%**
**Après corrections TODO: ~85%**

---

**Prochaine action recommandée:** Commencer par les 3 tâches CRITICAL

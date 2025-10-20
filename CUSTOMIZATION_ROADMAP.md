# 🗺️ ROADMAP DE CUSTOMISATION - SITE TANDEM AI

**Date de création:** 20 Octobre 2025
**Statut:** En cours
**Couleur de marque:** #30f191 (vert cyan)

---

## 📊 VUE D'ENSEMBLE

Ce document trace toutes les modifications nécessaires pour transformer le template Aceternity en site web Tandem AI.

### ✅ Déjà Complété
- [x] Changement de couleur de marque (#f17463 → #30f191)
- [x] Hero section mise à jour
- [x] Logo cloud avec vrais clients (Qonto, Aircall, Sellsy, Kraken, Spendesk)
- [x] Témoignages avec données réelles
- [x] FAQs Tandem-spécifiques
- [x] Metadata & SEO

---

## 🎯 PHASE 1 - NETTOYAGE DU TEMPLATE (PRIORITÉ HAUTE)

### 1.1 Supprimer les Assets du Template

#### Images à Supprimer/Remplacer
- [ ] `/public/dashboard.png` → SUPPRIMER
- [ ] `/public/dashboard@3x.png` → REMPLACER par vidéo Tandem
- [ ] `/public/banner.png` → REMPLACER par banner Tandem
- [ ] `/public/logos/1.png` à `/public/logos/10.png` → DÉJÀ REMPLACÉS ✅
- [ ] `/public/team/1.png` à `/public/team/6.png` → Garder ou remplacer avec équipe Tandem
- [ ] `/public/avatars/*` → Vérifier utilisation

#### Textes Template à Remplacer
- [ ] `components/hero-image.tsx` - Image dashboard → Vidéo principale
- [ ] `components/use-cases.tsx` - Cas d'usage génériques → Tandem use cases
- [ ] `components/benefits.tsx` - Descriptions génériques → Bénéfices Tandem
- [ ] `components/how-it-works/index.tsx` - Workflow template → Workflow Tandem
- [ ] `components/agentic-intelligence/` - Section complète à adapter
- [ ] `components/security.tsx` - Ajouter badges SOC2, GDPR, ISO, CCPA

---

## 🎥 PHASE 2 - INTÉGRATION VIDÉOS TANDEM (PRIORITÉ HAUTE)

### 2.1 Vidéo Principale Hero
**Fichier:** `video principale tandem.mp4` (2.6 MB)
**Emplacement:** Remplacer l'image dans `components/hero-image.tsx`

```tsx
// Remplacer Image par video
<video
  autoPlay
  loop
  muted
  playsInline
  className="w-full rounded-lg"
  src="/video principale tandem.mp4"
/>
```

**Statut:** ⏳ À faire

---

### 2.2 Vidéos des Cas d'Usage
Créer une nouvelle section "Use Cases" avec 6 vidéos:

| Vidéo | Taille | Use Case | Statut |
|-------|--------|----------|--------|
| `video-Accelerate Trial-to-Paid Conversion.mp4` | 2.7 MB | Trial Conversion | ⏳ |
| `video-Users Onboard Themselves in Minutes.mp4` | 17.7 MB | Autonomous Onboarding | ⏳ |
| `video-Deflect Tickets with In-Context Assistance.mp4` | 4.9 MB | Support Deflection | ⏳ |
| `video-Drive Feature Adoption & Revenue Expansion.mp4` | 4.0 MB | Adoption & Expansion | ⏳ |
| `video-Enable Non-Technical User Success.mp4` | 4.9 MB | User Enablement | ⏳ |
| `video-AI Success Coach for Every User.mp4` | 2.0 MB | Success at Scale | ⏳ |

**Action:** Créer `components/use-cases-tandem.tsx`

---

## 📝 PHASE 3 - SECTIONS À CRÉER/MODIFIER

### 3.1 Use Cases Section (NOUVELLE)
**Basé sur:** Documentation Tandem + Vidéos

**Structure:**
```
- Badge: "Use Cases"
- Titre: "Unblock your users at every stage of their journey"
- Sous-titre: "Your users don't think in clicks and menus. They think in outcomes. Tandem bridges that gap."
- 6 Cards avec vidéos:
  1. Trial Conversion (Aircall case study)
  2. Autonomous Onboarding (Sellsy case study)
  3. Support Deflection (Kraken - 70% ticket reduction)
  4. Adoption & Expansion (Qonto - 1M+ users)
  5. User Enablement (3x faster setup)
  6. Success at Scale (24/7 AI guidance)
```

**Fichiers à créer:**
- [ ] `components/use-cases-tandem.tsx`
- [ ] `constants/use-cases-tandem.ts`

**Statut:** ⏳ À faire

---

### 3.2 Benefits/Features Section (MODIFIER)
**Fichier:** `components/benefits.tsx`

**Remplacer par 4 bénéfices clés Tandem:**

1. **Native Integration**
   - Titre: "Native integration, right inside your product"
   - Description: "Tandem embeds directly into your UI, no clunky overlays or bolt-ons. Your users stay in the flow of your app while Tandem guides them through complex setups, feature adoption, and workflows."
   - Icon: IntegrationIcon

2. **No Engineering Needed**
   - Titre: "No engineering needed"
   - Description: "Your non-technical teams can design, update, and launch user flows without touching code. Tandem can operate your product's UI and even take action on behalf of the user, so your CS and Product teams scale guidance effortlessly."
   - Icon: CodeIcon (crossed out)

3. **Precision Control**
   - Titre: "Precision control for every use case"
   - Description: "Decide exactly where and when to deploy Tandem in your product. Guide specific user segments, target key features, or trigger contextual help at the right moment—without disrupting the rest of the experience."
   - Icon: TargetIcon

4. **Powered by Knowledge**
   - Titre: "Powered by your knowledge & playbooks"
   - Description: "Tandem ingests your documentation, FAQs, and CSM strategies—turning them into automated, step-by-step guidance and contextual answers inside your product. Your best practices scale to every user, instantly."
   - Icon: BrainIcon

**Statut:** ⏳ À faire

---

### 3.3 Security & Compliance Section (MODIFIER)
**Fichier:** `components/security.tsx`

**Ajouter:**
- [ ] Badge SOC2 Type II (`/logos/SOC2.png` - créer si manquant)
- [ ] Badge GDPR (`/logos/GDPR.png`) ✅ Disponible
- [ ] Badge ISO (`/logos/ISO.png`) ✅ Disponible
- [ ] Badge CCPA (`/logos/CCPA.png`) ✅ Disponible
- [ ] Badge AES-256 Encryption

**Titre:** "Enterprise-grade security and compliance"

**Statut:** ⏳ À faire

---

### 3.4 ROI/Metrics Section (NOUVELLE)
**Basé sur:** "Instant ROI on the metrics that matter"

**6 Métriques clés:**

| Métrique | Description | Icon |
|----------|-------------|------|
| Conversion | Get users to their "aha moment" in minutes, not days | 📈 |
| Time-to-value | Users complete setup 3x faster with AI assistance | ⚡ |
| Ticket deflection | Deflect 70% of tickets by answering questions instantly & contextually | 🎫 |
| Retention | Keep users engaged by solving problems before they leave | 🔄 |
| Activation cost | Let reps focus on revenue while AI handles the rest | 💰 |
| Revenue expansion | Unlock premium features as users discover advanced capabilities | 🚀 |

**Fichier à créer:**
- [ ] `components/roi-metrics.tsx`

**Statut:** ⏳ À faire

---

### 3.5 How It Works Section (MODIFIER)
**Fichier:** `components/how-it-works/index.tsx`

**Remplacer workflow template par:**
1. User prompts Tandem
2. Tandem understands intent
3. Tandem guides/completes task
4. User reaches outcome

**Statut:** ⏳ À faire

---

### 3.6 Product Intelligence Section (NOUVELLE)
**Basé sur:** "Turn every user prompt into product intelligence"

**3 Sous-sections:**
1. **Capture real user intents**
   - "Skip the guesswork. See the exact problems users try to solve and why they fail. Build features for actual needs, not imagined ones."

2. **Boost conversions using users' own language**
   - "Discover the exact words that resonate. Uncover which features actually close deals. Mirror user language in your messaging for instant connection."

3. **Prevent churn with proactive assistance**
   - "Identify at-risk accounts before they leave. Deploy targeted interventions at scale. Transform struggling users into success stories with 1:1 precision."

**Fichier à créer:**
- [ ] `components/product-intelligence.tsx`

**Statut:** ⏳ À faire

---

## 🎨 PHASE 4 - NAVIGATION & FOOTER

### 4.1 Navbar
**Fichier:** `components/navbar.tsx`

**Remplacer liens par:**
- Solution (dropdown?)
- Product
- Company (dropdown: About Us, Jobs, Mission)
- Customers
- **CTA:** Book a demo (button style)

**Statut:** ⏳ À faire

---

### 4.2 Footer
**Fichier:** `components/footer.tsx`

**Structure Tandem:**

**Colonnes:**
1. **Company**
   - About Us
   - Jobs
   - Mission
   - Contact

2. **Legal**
   - Privacy Policy
   - Terms of Use
   - Cookie Policy

3. **Resources** (optionnel)
   - Blog
   - Help Center
   - Documentation

**Supprimer:**
- [ ] Newsletter (sauf si backend prêt)
- [ ] Liens réseaux sociaux template

**Statut:** ⏳ À faire

---

## 📄 PHASE 5 - PAGES SECONDAIRES

### 5.1 À Créer/Modifier

| Page | Fichier | Priorité | Statut |
|------|---------|----------|--------|
| About | `app/about/page.tsx` | Moyenne | ⏳ |
| Contact | `app/contact/page.tsx` | Haute | ⏳ |
| Pricing | `app/pricing/page.tsx` | Haute | ⏳ |
| Sign Up | `app/sign-up/page.tsx` | Basse | ⏳ |
| Sign In | `app/sign-in/page.tsx` | Basse | ⏳ |
| Blog | `app/blog/page.tsx` | Basse | ⏳ |
| Careers | `app/careers/page.tsx` | Basse | ⏳ |
| Customers | `app/customers/page.tsx` | Moyenne | À créer |
| Playground | `app/playground/page.tsx` | Basse | ⏳ |

---

### 5.2 Pricing Page
**Fichier:** `app/pricing/page.tsx`

**À définir:**
- Plans tarifaires Tandem
- Features par plan
- CTA vers Book a demo

**Statut:** ⏳ En attente des informations

---

### 5.3 Customers/Case Studies Page
**Page à créer:** `app/customers/page.tsx`

**Contenu:**
- Qonto case study (1M+ users)
- Sellsy case study (+18% activation)
- Aircall case study (+20% conversion)
- Logos clients

**Assets disponibles:**
- Photos clients Qonto & Sellsy
- Vidéos use cases

**Statut:** ⏳ À créer

---

## 🔧 PHASE 6 - OPTIMISATIONS TECHNIQUES

### 6.1 Performance
- [ ] Optimiser vidéos (compression si nécessaire)
- [ ] Lazy loading pour vidéos
- [ ] Optimiser images (WebP)
- [ ] Vérifier Core Web Vitals

### 6.2 SEO
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Schema.org markup pour testimonials
- [ ] Open Graph images par page
- [ ] Meta descriptions toutes pages

### 6.3 Accessibilité
- [ ] Alt text toutes images
- [ ] ARIA labels vidéos
- [ ] Keyboard navigation
- [ ] Color contrast (vérifier avec #30f191)
- [ ] Screen reader testing

### 6.4 Analytics & Tracking
- [ ] Google Analytics (si souhaité)
- [ ] Hotjar/tracking comportement
- [ ] Event tracking (CTA clicks, video plays)

**Statut:** ⏳ À faire

---

## 📋 CHECKLIST FINALE AVANT LANCEMENT

### Assets
- [ ] Tous les logos template supprimés
- [ ] Vidéo principale intégrée
- [ ] 6 vidéos use cases intégrées
- [ ] Badges sécurité affichés
- [ ] Photos équipe Tandem (si applicable)
- [ ] Favicon Tandem
- [ ] Banner.png Tandem

### Contenu
- [ ] Tous les textes template remplacés
- [ ] Pas de "Notus" ou "Aceternity" restant
- [ ] Pas de descriptions génériques
- [ ] Testimonials avec vraies données
- [ ] FAQs Tandem-spécifiques
- [ ] Legal pages (Privacy, Terms)

### Technique
- [ ] Couleur #30f191 partout
- [ ] Metadata toutes pages
- [ ] Links tous fonctionnels
- [ ] Forms connectés (ou désactivés)
- [ ] Mobile responsive
- [ ] Dark mode fonctionnel
- [ ] Performance optimisée

### SEO
- [ ] Meta titles/descriptions
- [ ] Sitemap
- [ ] robots.txt
- [ ] Canonical URLs
- [ ] Schema markup

---

## 🎯 PRIORITÉS D'EXÉCUTION

### Semaine 1 (Haute Priorité)
1. ✅ Phase 1.1 - Nettoyage assets template
2. Phase 2.1 - Vidéo principale hero
3. Phase 2.2 - Vidéos use cases
4. Phase 3.1 - Use Cases section
5. Phase 3.2 - Benefits section

### Semaine 2 (Moyenne Priorité)
6. Phase 3.3 - Security section
7. Phase 3.4 - ROI Metrics
8. Phase 4.1/4.2 - Navbar & Footer
9. Phase 5.1 - Pages secondaires clés

### Semaine 3 (Basse Priorité)
10. Phase 3.5 - How It Works
11. Phase 3.6 - Product Intelligence
12. Phase 5.1 - Pages restantes
13. Phase 6 - Optimisations

---

## 📝 NOTES & DÉCISIONS

### Décisions à Prendre
- [ ] Plans tarifaires Tandem ?
- [ ] Formulaire contact backend ?
- [ ] Newsletter fonctionnelle ?
- [ ] Blog actif ou placeholder ?
- [ ] Photos équipe Tandem disponibles ?
- [ ] Analytics à intégrer ?

### Assets Manquants
- [ ] Banner.png Tandem (pour OG image)
- [ ] Favicon Tandem
- [ ] Logo Tandem SVG/PNG haute résolution
- [ ] Badge SOC2 (si pas dans /logos/)
- [ ] Photos équipe (optionnel)

---

## 🚀 COMMENCER MAINTENANT

**Prochaine action immédiate:**
1. Remplacer l'image hero par la vidéo principale
2. Créer la section Use Cases avec vidéos
3. Mettre à jour Benefits avec 4 points Tandem

**Voulez-vous que je commence par l'une de ces tâches ?**

---

**Dernière mise à jour:** 20 Octobre 2025
**Progression globale:** 15% ✅ | 85% ⏳

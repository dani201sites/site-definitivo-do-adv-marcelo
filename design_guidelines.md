# Design Guidelines: Marcelo Camargo Advocacia

## Design Approach
**Reference-Based Approach** drawing from premium legal service websites with emphasis on authority, trust, and criminal law expertise. Primary inspirations: Premium law firm aesthetics (sophisticated, professional) with modern web design principles.

## Design Principles
1. **Authority & Credibility**: Establish immediate trust through professional presentation and 20-year experience emphasis
2. **Focused Expertise**: Clear specialization in criminal law - no dilution of core message
3. **Sophisticated Minimalism**: Clean, uncluttered layouts that convey professionalism
4. **Strategic Hierarchy**: Guide visitors from impact → expertise → action

## Typography System
- **Primary Font**: Playfair Display or Lora (serif) for headers - conveys authority and tradition
- **Secondary Font**: Inter or Source Sans Pro (sans-serif) for body text - modern readability
- **Hierarchy**:
  - H1: 48-56px (hero headlines)
  - H2: 36-42px (section titles)
  - H3: 24-28px (subsection headers)
  - Body: 16-18px (optimal reading)
  - Small: 14px (metadata, captions)

## Layout & Spacing
**Tailwind spacing primitives**: Use units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl for text-heavy sections
- Grid gaps: gap-8 or gap-12 for card layouts

## Page Structure & Sections

### 1. Hero Section (80vh)
- **Layout**: Full-width with professional photo of Marcelo Camargo
- **Content**: Centered overlay with name, tagline, primary CTA
- **Headline**: "Marcelo Camargo Advocacia" + "20 Anos Defendendo Seus Direitos no Direito Criminal"
- **Subheadline**: Brief powerful statement about criminal defense expertise
- **CTA**: WhatsApp button (blurred background, prominent placement)
- **Photo**: Professional portrait - lawyer in formal attire, serious/confident expression

### 2. About/Experience Section
- **Layout**: Two-column (desktop) - text left, stats/highlights right
- **Content**: 
  - Professional biography emphasizing 20-year criminal law trajectory
  - Key achievements and case types handled
  - Stats showcase: "20+ Anos", "Tribunal do Júri", "Defesa Criminal"
- **Visual treatment**: Clean, confident, professional tone

### 3. Expertise Areas Section
- **Layout**: Three-column grid (stacks on mobile)
- **Services**:
  - Tribunal do Júri (Jury Trial Defense)
  - Defesa Criminal Estratégica (Strategic Criminal Defense)
  - Atuação em Plenário (Courtroom Litigation)
- **Each card**: Icon/symbol, title, 2-3 sentence description, subtle border/shadow
- **Purpose**: Demonstrate depth in criminal law specialization

### 4. Deep Dive Section (with second photo)
- **Layout**: Image-text split (60/40 or vice versa)
- **Content**: Detailed explanation of approach, philosophy, methodology
- **Photo placement**: Professional action shot - in courtroom, with documents, or formal office setting
- **Message**: "Por Que Escolher Marcelo Camargo" or "Experiência Que Faz a Diferença"

### 5. Differentiators Section
- **Layout**: Centered content with 3-4 key points in cards or list format
- **Points**:
  - Especialização exclusiva em Direito Criminal
  - Experiência consolidada em Tribunal do Júri
  - Atuação estratégica e personalizada
  - Compromisso com resultados

### 6. Partner Network (Strategic Mention)
- **Approach**: Frame as "Rede de Parceiros Especializados" or "Soluções Jurídicas Integradas"
- **Layout**: Small section, 2-3 columns
- **Message**: "Através de nossa rede de parceiros especializados, oferecemos soluções em:" [Direito Cível, Trabalhista, Previdenciário]
- **Tone**: Brief, professional - positions as added value without diluting criminal focus

### 7. Call-to-Action Section
- **Layout**: Full-width, centered, impactful
- **Content**: Strong headline + WhatsApp/phone CTA
- **Message**: "Precisa de Defesa Criminal? Agende uma Consulta"

### 8. Contact Section
- **Layout**: Two-column split or integrated form
- **Left**: Contact form (Nome, Email, Telefone, Mensagem)
- **Right**: Contact information + Location
  - WhatsApp link (primary)
  - Email
  - Phone
  - Office address
  - Business hours
- **Map**: Embedded Google Maps showing office location

### 9. Footer
- **Content**: 
  - Logo/firm name
  - Quick links (Início, Sobre, Serviços, Contato)
  - Social media (if applicable)
  - Copyright + OAB registration number
  - Professional disclaimer if needed

## Component Library

### Buttons
- **Primary CTA**: Bold, prominent (WhatsApp green or professional navy)
- **Secondary**: Outlined, subtle
- **Hover states**: Subtle scale/shadow

### Cards
- Clean borders or subtle shadows
- Adequate padding (p-6 to p-8)
- Hover: slight elevation

### Forms
- Single-line inputs with labels
- Textarea for messages
- Submit button matches primary CTA style

### Navigation
- Sticky header with logo + minimal menu
- Mobile: Hamburger menu
- Desktop: Horizontal navigation

## Images

### Hero Image
- **Description**: Professional portrait of Marcelo Camargo in formal legal attire (suit, tie). Confident, serious expression. High-quality, well-lit professional photography. Background: office/library setting or neutral professional backdrop.
- **Placement**: Full-width hero section with darkened overlay for text readability
- **Treatment**: Slight gradient overlay (dark bottom to transparent top)

### Secondary Image
- **Description**: Action/context shot - Marcelo in courtroom setting, reviewing documents at desk, or professional office environment. Should convey active legal work and expertise.
- **Placement**: Deep dive section (Section 4) - image-text split layout
- **Treatment**: Natural, no heavy filters - professional and authentic

## Visual Style Notes
- **Aesthetic**: Sophisticated, authoritative, trustworthy
- **Mood**: Serious but approachable, confident, professional
- **Avoid**: Overly corporate coldness - maintain human connection while professional
- **Icons**: Use sparingly - scales of justice, gavel (if used, must be subtle and tasteful)

## Responsive Behavior
- Mobile-first approach
- Hero: Reduce height to 60vh on mobile
- Grids: Stack to single column on mobile
- Text: Scale down font sizes appropriately
- Images: Ensure proper aspect ratios on all devices
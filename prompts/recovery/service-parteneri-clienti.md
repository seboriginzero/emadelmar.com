# PROMPT INSTRUCTOR: Dezvoltare și Editare - `service-parteneri-clienti`

**Rolul Tău:** Ești Senior Frontend Engineer asignat exclusiv pe modulul instituțional `service-parteneri-clienti` din ecosistemul Ema del Mar.

## FUNCȚIONALITATEA SERVICIULUI (Logica)
`service-parteneri-clienti` este interfața B2B (Business to Business). Showcase digital de identitate, cu scopul validării profesionale ("Trusted by...").

**Responsabilități Cheie:**
1. **B2B Showcase Logic:** Afișarea unei secțiuni tip grilă, centrată, de expunere parteneri Premium (ex. Red Bull, băuturi fine de distribuție internă). Optic curată.
2. **Review & Testimoniale Module:** Engine slide premium pentru a prelucra date testimonial asigurate din surse interne. Prevenția scroll snapping defectuos pe iOS/mobile.
3. **Comunicare Oferte B2B Corporate:** Blocuri de info (Card-uri text/img elegant border) care detaliază servicii pentru clienți mari (rezervare întreg restaurant, evenimente corporate).

## 🚨 REGULI STRICTE PENTRU AI AGENT 🚨
- **Izolare:** Punctul de intrare curent pe acest task este `/microservices-architecture/services/service-parteneri-clienti/`.
- **Echilibru Logo Scale (STRICT RULE):** Niciodată un logo partener importat `.png .svg` nu are voie să fie lăsat disproporționat față de Grid/Layout general. Când inserezi RedBull de pe calea alocată `basePath` / `/public/images/`, respectă max-height comun din regulile Tailwind.
- **Aspect Corporate/Formal:** Renunță la background splines wild sau mix-blend-mode abuziv în această secțiune. Prezență profesională. Animații simple fade-in viewport de duritate slabă (stagger).

**Acțiune:** Execută instrucțiunile implementând imediat codul frontend stabilizat, având în calcul calea absolută și regulile impuse. 

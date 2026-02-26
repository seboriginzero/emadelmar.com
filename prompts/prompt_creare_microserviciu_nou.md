# PROMPT STRICT: Creare sau Extindere Microserviciu Nou în Arhitectură

**Rolul tău:** Ești un Arhitect de Sistem AI și un Lead Front-End Developer.
**Context:** Operezi în cadrul sistemului de microservicii pentru aplicația web (Ema del Mar). Ai primit sarcina de a genera o nouă secțiune a site-ului complet decuplată sub forma unui microserviciu nou. 

## 🚨 REGULI STRICTE DE EXECUȚIE PENTRU NOUUL MICROSERVICIU 🚨

1. **BOOTSTRAPPING ISOLAT:**
   - Noul microserviciu trebuie plasat **STRICT** în folderul `/microservices-architecture/services/service-[NumeNou]/`.
   - Pentru a garanta consistența tech stack-ului, clonează structura de bază, `package.json`, și configurația `next.config.js` de la un microserviciu stabil existent (ex: `service-acasa` sau `service-despre-noi`).
   - Setează imediat un port UNIC pentru dezvoltare (`npm run dev`) care să nu intre în conflict cu porturile actuale (în principiu, caută primul port liber asumat după 3039, ex: 3040) în `package.json` și .env.

2. **INTEGRAREA ÎN START SCRIPT:**
   - Ești obligat să modifici fișierul principal: `/microservices-architecture/start_services.sh`.
   - Adaugă noul port (ex: 3040) în array-ul `PORTS=(...)`.
   - Adaugă linia de pornire background în secțiunea Start Services: `(cd services/service-[NumeNou] && npm run dev > /dev/null 2>&1) &`.

3. **CONFIGURARE GATEWAY SERVER:**
   - Pentru ca microserviciul proaspăt creat să devină activ pe site, **TREBUIE** să-lrutezi în Gateway.
   - Mergi și editează `/microservices-architecture/gateway-acasa/server.js`.
   - În interiorul obiectului `serviceMap`, adaugă maparea oficială a domain-ului (ex: `'/ruta-noua': { target: 'http://127.0.0.1:[PORTUL_NOU]' }`).
   - Fără acest pas, microserviciul este inutilizabil.

4. **INTEGRARE UI (SHARED COMPONENTS):**
   - Importă și folosește corect Navigația Globală (Navbar) și Subsolul (Footer) din folderul `/microservices-architecture/shared/`.
   - Asigură-te că noul microserviciu reazemă pe aceleași reguli CSS globale, dar modulele lui interioare sunt izolate `page.module.css`. 

5. **REGULA ANTI-HACK & ANTI-LEAKS:**
   - Codul Next.js pe care îl introduci în `/src/app/` trebuie să fie impecabil optimizat pentru mobile, fără loop-uri de re-randare care dau crash la WebGL și la Safari iOS.
   - Păstrează numărul de pachete instalate la minim - adaugă o librărie doar dacă e strict justificat arhitectural.

**SCOP FINAL:** Când semnalizezi terminarea creării, rularea comenzilor `bash start_services.sh restart` + `bash start_services.sh verify` trebuie să arate Noul Microserviciu UP AND RUNNING 100%. Te rog execută scriptarea respectând orbeste acești parametri.

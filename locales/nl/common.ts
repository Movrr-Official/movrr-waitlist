import type { Dictionary } from "@/locales/types";

export const nl: Dictionary = {
  branding: {
    wordmark: "MOVRR",
  },
  metadata: {
    siteName: "Movrr",
    keywords:
      "bewegingsbeloningen, stedelijk fietsen, fietsbeloningen, dagelijks fietsen, beloond bewegen, Rotterdam",
    pages: {
      home: {
        title: "Movrr — Dagelijkse ritten, beloond.",
        description:
          "Doe mee met MOVRR early access. Rijd je bestaande routes, verdien per geverifieerde kilometer, en wees een van de eerste fietsers in Rotterdam.",
      },
      privacy: {
        title: "Privacybeleid | Movrr",
        description:
          "Lees welke gegevens Movrr verzamelt, hoe we daarmee omgaan en welke privacyrechten je hebt.",
      },
      terms: {
        title: "Algemene Voorwaarden | Movrr",
        description:
          "Lees de voorwaarden voor deelname aan de Movrr-wachtlijst en het gebruik van deze website.",
      },
      unauthorized: {
        title: "Toegang geweigerd | Movrr",
        description: "Je hebt geen toestemming om deze pagina te bekijken.",
      },
    },
  },
  languageSwitcher: {
    ariaLabel: "Selecteer taal",
    englishLabel: "EN",
    dutchLabel: "NL",
    englishName: "Engels",
    dutchName: "Nederlands",
  },
  hero: {
    eyebrow: "Early access",
    status: ["Lanceert binnenkort"],
    proofPoints: [
      "Lancering in Rotterdam",
      "Dan Den Haag, Amsterdam, Utrecht",
      "Alleen early access",
    ],
    audienceLabel: "Gebouwd voor fietsers",
    audience: [
      "Dagelijkse forensen",
      "Studenten",
      "Stadsfietsers",
      "Weekendrijders",
    ],
    titleLines: ["RIJD.", "VERDIEN.", "HOOR ERBIJ."],
    highlightedLine: "Jouw dagelijkse routes. Nu meer waard.",
    description:
      "Rijd je bestaande routes. Verdien per geverifieerde kilometer. Geen bezorgingen, geen rooster — MOVRR loopt stil mee met de ritten die je toch al maakt.",
    primaryCta: "Krijg early access",
    secondaryCta: "Bekijk hoe het werkt",
    backgroundAlt: "Close-up van een MOVRR-fiets met displaypaneel",
    logoAlt: "Movrr icoon",
  },
  valueProposition: {
    heading: {
      eyebrow: "WAAROM MOVRR",
      title: "Bewegen heeft waarde. MOVRR geeft het terug.",
      subtitle:
        "Geen omwegen. Geen bezorgingen. Alleen de routes die je toch al rijdt.",
    },
    items: [
      {
        title: "Rijd",
        description:
          "Wat je toch al doet, begint op te leveren. Geen omwegen, geen bezorgingen nodig.",
      },
      {
        title: "Verdien",
        description:
          "Elke geverifieerde kilometer levert MOVRR Points op. Campagneritten van merkpartners vermenigvuldigen die — soms meerdere keren. Je verdient hoe dan ook.",
      },
      {
        title: "Hoor erbij",
        description:
          "De eerste fietsers bepalen mee hoe MOVRR wordt in jouw stad. Jij hoort bij de founding cohort.",
      },
    ],
  },
  howItWorks: {
    heading: {
      eyebrow: "HOE HET WERKT",
      title: "Eenvoudig by design.",
      subtitle: "Vier stappen van aanmelding tot jouw eerste beloning.",
    },
    steps: [
      {
        title: "Aanmelden",
        description: "We nemen contact op zodra jouw stad live gaat.",
      },
      {
        title: "Ontvang je kit",
        description:
          "Bevestig het MOVRR-displaypaneel op je fiets. Kwestie van minuten.",
      },
      {
        title: "Rijd door de stad",
        description:
          "Rijd je routes. Campagnes lopen stil mee. Jouw routine blijft jouw routine.",
      },
      {
        title: "Beloning ophalen",
        description:
          "Je saldo groeit met elke geverifieerde rit. Duidelijke criteria, niets verborgen.",
      },
    ],
  },
  riderBenefits: {
    heading: {
      eyebrow: "VOOR DAGELIJKSE FIETSERS",
      title: "Jouw dagelijkse rit. Meer waard.",
      subtitle:
        "Een flexibel model dat aansluit op de routes die je toch al rijdt.",
    },
    items: [
      {
        title: "Verdien terwijl je rijdt",
        description:
          "Jouw bestaande routes, jouw bestaande schema — nu beloond.",
      },
      {
        title: "Pure beweging",
        description:
          "MOVRR beloont het fietsen zelf. Geen pakketten, geen opdrachten, niets extra's vereist.",
      },
      {
        title: "Flexibel",
        description:
          "Geen minimumschema, geen verplichtingen. Rijd wanneer je rijdt.",
      },
      {
        title: "Besteed aan wat jij wil",
        description:
          "MOVRR Points zijn inwisselbaar voor echte partnerbeloningen — fietsuitrusting, eten, vouchers en dagelijkse artikelen. Verdien per kilometer. Besteed wanneer jij wil.",
      },
    ],
    cta: "Aanmelden",
    ctaNote: "Geen verplichtingen. Alleen founding cohort.",
  },
  productConcept: {
    heading: {
      eyebrow: "De hardware",
      title: "Het MOVRR-displaypaneel.",
    },
    body: "Een lichtgewicht, weerbestendig paneel dat op compatibele fietsen wordt gemonteerd. Het synchroniseert met MOVRR om elke kilometer te verifiëren en campagnebeloningen te ontgrendelen terwijl je rijdt.",
    highlights: [
      "Compatibele fietsbevestiging",
      "Duurzaam en weerbestendig",
      "Geverifieerde rittracking",
      "Naadloze beloningssync",
    ],
    imageAlt: "Movrr displaypaneel bevestigd aan een fiets",
    cta: "Aanmelden",
  },
  cityLaunch: {
    heading: {
      eyebrow: "Stadslancering",
      title: "Lancering in de Randstad.",
      subtitle: "Rotterdam eerst. Den Haag daarna.",
    },
    badge: "Binnenkort live",
    cards: [
      {
        name: "Rotterdam",
        asset: "/city-rotterdam-card.png",
        cta: "Aanmelden",
        featured: true,
      },
      {
        name: "Den Haag",
        asset: "/city-the-hague-card.png",
        cta: "Aanmelden",
      },
      {
        name: "Amsterdam",
        asset: "/city-amsterdam-card.png",
        cta: "Aanmelden",
      },
      {
        name: "Utrecht",
        asset: "/city-utrecht-card.png",
        cta: "Aanmelden",
      },
    ],
  },
  faq: {
    heading: {
      eyebrow: "FAQ",
      title: "Wat fietsers het meest vragen.",
      subtitle: "Heldere antwoorden voor de lancering.",
    },
    items: [
      {
        question: "Hoe start ik met rijden via MOVRR?",
        answer:
          "Meld je aan voor early access. Zodra MOVRR beschikbaar is in jouw stad, nemen we contact op met alles wat je nodig hebt om te beginnen.",
      },
      {
        question: "Hoeveel kan ik verdienen?",
        answer:
          "Je verdient MOVRR Points voor elke GPS-geverifieerde kilometer die je rijdt. Campagneritten van merkpartners vermenigvuldigen je verdiensten — soms aanzienlijk. Points zijn inwisselbaar via de app tegen partnerbeloningen: fietsuitrusting, eten, vouchers en dagelijkse artikelen. De exacte kilometervergoeding wordt bevestigd bij lancering.",
      },
      {
        question: "Heb ik mijn eigen fiets nodig?",
        answer:
          "Ja. Je hebt een eigen fiets nodig om met MOVRR te rijden. Wij zorgen voor het displaypaneel dat binnen het programma wordt gebruikt.",
      },
      {
        question: "Kan ik rijden wanneer ik wil?",
        answer:
          "Ja. MOVRR past op jouw bestaande routine — of je nu dagelijks rijdt, in het weekend, of gewoon wanneer het uitkomt.",
      },
      {
        question: "Wat als een rit niet verifieert?",
        answer:
          "Verificatie is GPS-gebaseerd en automatisch. Als een rit niet aan de criteria voldoet, zie je in de app precies waarom — en uitzonderingen kunnen worden ingediend ter controle. Points worden alleen toegekend voor ritten die echt verifiëren. Dat is wat ze waard maakt voor iedere fietser die eerlijk verdient.",
      },
      {
        question: "Wanneer lanceert MOVRR?",
        answer:
          "MOVRR is pre-launch. Meld je aan voor early access en we houden je op de hoogte zodra de lancering in jouw stad bevestigd is.",
      },
    ],
  },
  waitlistSection: {
    eyebrow: "EARLY ACCESS",
    title: "Jouw stad. Jouw route. Jouw beloningen.",
    subtitle: "Zeker je plek in de founding rider-groep.",
    reassurance: "Geen verplichtingen. Alleen founding cohort.",
  },
  waitlistForm: {
    labels: {
      name: "Volledige naam",
      email: "E-mail",
      city: "Stad",
      bikeOwnership: "Heb je een fiets? (Optioneel)",
    },
    placeholders: {
      name: "Typ je naam",
      email: "Typ je e-mailadres",
      city: "Bijvoorbeeld Rotterdam",
      bikeOwnership: "Kies een optie",
    },
    bikeOptions: {
      own: "Ik heb een fiets",
      interested: "Nog niet",
      planning: "Binnenkort",
    },
    validation: {
      nameMin: "Vul minimaal 2 tekens in",
      emailInvalid: "Voer een geldig e-mailadres in",
      cityMin: "Vul een geldige plaatsnaam in",
    },
    actions: {
      submitting: "Bezig met aanmelden...",
      submit: "Krijg early access",
      reset: "Nog iemand registreren",
      revealBikeOwnership: "Fietsdetails toevoegen (optioneel)",
    },
    success: {
      title: "Je staat erin.",
      description:
        "We houden je op de hoogte zodra MOVRR live gaat in jouw stad.",
      instagram: {
        eyebrow: "Blijf op de hoogte",
        heading: "De founding riders community is in opbouw.",
        body: "Volg @movrr.app voor lanceringsupdates en behind-the-scenes vanuit Rotterdam.",
        cta: "Volgen op Instagram",
        handle: "@movrr.app",
        href: "https://www.instagram.com/movrr.app/",
      },
    },
    messages: {
      success: "Je staat op de lijst.",
      genericError: "Er ging iets mis. Probeer het opnieuw.",
    },
    consent: {
      line1: "Je ontvangt lanceringsupdates voor jouw stad. Verder niets.",
      line2: "Geen spam. Uitschrijven kan altijd.",
    },
    trustNotes: [
      "Geen account nodig",
      "Geen betaling nodig",
      "Alleen founding cohort",
    ],
  },
  footer: {
    logoAlt: "Movrr icoon",
    tagline: "Jouw beweging, beloond.",
    privacy: "Privacy",
    terms: "Voorwaarden",
    instagram: "Instagram",
    instagramHref: "https://www.instagram.com/movrr.app/",
    copyrightSuffix: "Movrr. Alle rechten voorbehouden.",
  },
  privacy: {
    backToMovrr: "Terug naar Movrr",
    title: "Privacybeleid",
    subtitle:
      "Hoe MOVRR persoonsgegevens verzamelt, gebruikt, bewaart en beschermt op de pre-launch waitlistwebsite.",
    lastUpdated: "Laatst bijgewerkt",
    lastUpdatedDate: "8 maart 2026",
    sections: [
      {
        title: "1. Inleiding",
        paragraph:
          "Dit Privacybeleid legt uit hoe MOVRR persoonsgegevens verwerkt wanneer je onze waitlistwebsite bezoekt, het early access-formulier invult of pre-launch updates ontvangt. MOVRR exploiteert op dit moment alleen een pre-launch website. Er zijn nog geen gebruikersaccounts, betalingen of live advertentiecampagnes beschikbaar.",
      },
      {
        title: "2. Gegevens van de verwerkingsverantwoordelijke",
        paragraph:
          "MOVRR, gevestigd in Rotterdam, Nederland, is de verwerkingsverantwoordelijke voor de persoonsgegevens die in dit Privacybeleid worden beschreven.",
      },
      {
        title: "3. Persoonsgegevens die we verzamelen",
        paragraph:
          "Via de waitlist verzamelen we in hoofdzaak je naam, e-mailadres, stad en, als je dat wilt invullen, of je een fiets bezit. Daarnaast kunnen we beperkte technische gegevens verzamelen, zoals IP-adres, browsertype, apparaatgegevens, verwijzende bron en interactiedata die ontstaan via hosting-, beveiligings- en analysetools.",
      },
      {
        title: "4. Hoe we gegevens verzamelen",
        bullets: [
          "Rechtstreeks van jou wanneer je het waitlistformulier invult of contact met ons opneemt",
          "Automatisch via websitelogs, beveiligingsmonitoring en analysetechnologie",
          "Via dienstverleners die ons helpen met hosting, beveiliging en website-analyse",
        ],
      },
      {
        title: "5. Rechtsgrond voor verwerking (GDPR artikel 6)",
        bullets: [
          "Toestemming, wanneer je vrijwillig je gegevens indient voor waitlistupdates of niet-essentiële cookies",
          "Gerechtvaardigd belang, voor websitebeveiliging, fraudepreventie, verbetering van de dienst en basisanalyses waar dit is toegestaan",
          "Wettelijke verplichtingen, wanneer wij gegevens moeten bewaren of verstrekken om aan toepasselijk recht te voldoen",
        ],
      },
      {
        title: "6. Hoe we persoonsgegevens gebruiken",
        paragraph:
          "Wij gebruiken persoonsgegevens om de MOVRR-waitlist te beheren, early access- en launchupdates te versturen, vraag per stad en riderprofiel te begrijpen, de website te beveiligen en verbeteren, en om te voldoen aan wettelijke en toezichthoudende verplichtingen.",
      },
      {
        title: "7. Bewaartermijnen",
        paragraph:
          "Wij bewaren waitlistgegevens niet langer dan nodig is voor de doeleinden uit dit Privacybeleid. Als MOVRR niet live gaat, of als jouw gegevens niet langer nodig zijn, verwijderen of anonimiseren wij deze binnen een redelijke termijn, tenzij een langere bewaartermijn wettelijk verplicht is. Technische logs kunnen korter worden bewaard voor operationele en beveiligingsdoeleinden.",
      },
      {
        title: "8. Delen van gegevens en derden",
        paragraph:
          "Wij verkopen je persoonsgegevens niet. Wel kunnen wij gegevens delen met zorgvuldig geselecteerde dienstverleners die ons ondersteunen bij hosting, analytics, communicatie, beveiliging, juridische naleving en professioneel advies. Deze partijen mogen gegevens alleen verwerken op onze instructie of voor hun eigen wettelijke verplichtingen.",
      },
      {
        title: "9. Internationale doorgiften",
        paragraph:
          "Sommige dienstverleners kunnen persoonsgegevens buiten de Europese Economische Ruimte verwerken. In dat geval gebruikt MOVRR een adequaatheidsbesluit, de Standard Contractual Clauses van de Europese Commissie of een andere wettelijk vereiste doorgiftemechaniek onder de AVG.",
      },
      {
        title: "10. Cookies en trackingtechnologie",
        paragraph:
          "MOVRR kan cookies of vergelijkbare technologie gebruiken voor essentiële websitefuncties, beveiliging en analytics. Waar de Nederlandse of Europese ePrivacyregels toestemming vereisen voor niet-essentiële cookies of tracking, vragen wij die toestemming vooraf. Je kunt cookies ook beheren via je browserinstellingen, maar dat kan invloed hebben op de werking van de website.",
      },
      {
        title: "11. Beveiligingsmaatregelen",
        bullets: [
          "Toegangsbeperkingen en rolgebaseerde toegang waar passend",
          "Veilige hosting, versleuteling tijdens verzending en technische maatregelen ter bescherming van gegevens",
          "Monitoring, logging en interne maatregelen om misbruik en ongeautoriseerde toegang te signaleren",
        ],
      },
      {
        title: "12. Jouw AVG-rechten",
        bullets: [
          "Recht op inzage",
          "Recht op rectificatie",
          "Recht op verwijdering",
          "Recht op beperking van de verwerking",
          "Recht op dataportabiliteit",
          "Recht van bezwaar",
          "Recht om toestemming in te trekken wanneer verwerking daarop is gebaseerd",
          "Recht om een klacht in te dienen bij een toezichthouder, waaronder de Autoriteit Persoonsgegevens",
        ],
      },
      {
        title: "13. Hoe je jouw rechten uitoefent",
        paragraph:
          "Om jouw rechten uit te oefenen kun je mailen naar legal@movrr.nl. Wij kunnen je vragen om aanvullende informatie om je identiteit te verifiëren voordat wij op je verzoek reageren. Wij reageren binnen de termijnen die de wet voorschrijft.",
      },
      {
        title: "14. Privacy van kinderen",
        paragraph:
          "De MOVRR-waitlistwebsite is niet gericht op kinderen. Wij verzamelen niet bewust persoonsgegevens van personen jonger dan 16 jaar zonder geldige toestemming van een ouder of wettelijke vertegenwoordiger wanneer die toestemming vereist is.",
      },
      {
        title: "15. Wijzigingen in dit beleid",
        paragraph:
          "Wij kunnen dit Privacybeleid van tijd tot tijd aanpassen vanwege wijzigingen in de website, onze pre-launch activiteiten, dienstverleners of toepasselijke wetgeving. De meest recente versie wordt op deze pagina gepubliceerd en de datum hierboven wordt aangepast.",
      },
      {
        title: "16. Contact",
        paragraph:
          "Voor privacyvragen of om jouw rechten uit te oefenen kun je contact opnemen via legal@movrr.nl. Voor algemene vragen over de website of support kun je mailen naar support@movrr.nl. MOVRR is gevestigd in Rotterdam, Nederland.",
      },
    ],
  },
  terms: {
    backToMovrr: "Terug naar Movrr",
    title: "Algemene Voorwaarden",
    subtitle:
      "De voorwaarden die gelden voor het gebruik van de MOVRR pre-launch waitlistwebsite.",
    lastUpdated: "Laatst bijgewerkt",
    lastUpdatedDate: "8 maart 2026",
    sections: [
      {
        title: "1. Inleiding",
        paragraph:
          "Deze Algemene Voorwaarden zijn van toepassing op het gebruik van de MOVRR-website en deelname aan de MOVRR pre-launch waitlist. MOVRR biedt op dit moment uitsluitend een waitlist, productinformatie en early access-communicatie aan.",
      },
      {
        title: "2. Aanvaarding van de voorwaarden",
        paragraph:
          "Door de website te bezoeken of je aan te melden voor de MOVRR-waitlist ga je akkoord met deze voorwaarden. Als je niet akkoord gaat, dien je de website niet te gebruiken of je niet voor de waitlist aan te melden.",
      },
      {
        title: "3. Beschrijving van de dienst (pre-launch waitlist)",
        paragraph:
          "MOVRR biedt momenteel een landing page, productinformatie, een waitlistformulier en early access-aankondigingen aan. De website biedt op dit moment geen gebruikersaccounts, betalingen, live campagnes of actieve deelname aan een operationeel platform.",
      },
      {
        title: "4. Toelating",
        paragraph:
          "Je mag de website alleen gebruiken als je juridisch bevoegd bent om een bindende overeenkomst aan te gaan volgens toepasselijk recht. Gebruik je de website namens een organisatie, dan verklaar je dat je bevoegd bent om die organisatie te binden.",
      },
      {
        title: "5. Deelname aan de waitlist",
        paragraph:
          "Aanmelding voor de waitlist betekent uitsluitend dat je interesse toont in MOVRR. Deelname aan de waitlist creëert geen account, garandeert geen toegang, garandeert geen launch in een bepaalde stad en garandeert geen selectie voor toekomstige campagnes, pilots of platformdeelname.",
      },
      {
        title: "6. Verantwoordelijkheden van gebruikers",
        bullets: [
          "Verstrek correcte en actuele informatie",
          "Gebruik de website rechtmatig en te goeder trouw",
          "Dien alleen informatie in waar MOVRR om vraagt",
        ],
      },
      {
        title: "7. Verboden gedrag",
        bullets: [
          "Onjuiste, misleidende of frauduleuze informatie indienen",
          "De website verstoren, manipuleren of proberen ongeautoriseerd toegang te verkrijgen",
          "De website gebruiken voor onrechtmatige, schadelijke, beledigende of misleidende doeleinden",
          "Kwaadaardige code uploaden of proberen kwetsbaarheden uit te buiten",
        ],
      },
      {
        title: "8. Intellectuele eigendom",
        paragraph:
          "De MOVRR-website, het merk, logo, de teksten, het design en gerelateerde materialen zijn eigendom van MOVRR of haar licentiegevers en worden beschermd door toepasselijke intellectuele-eigendomsrechten. Deze voorwaarden geven je geen eigendomsrechten of licentie, behalve het beperkte recht om de website te gebruiken voor het beoogde doel.",
      },
      {
        title: "9. Geen garantie van launch of deelname",
        paragraph:
          "MOVRR bevindt zich in de pre-launch fase en kan launchplannen op elk moment wijzigen, uitstellen, beperken of annuleren. Wij garanderen niet dat het platform live gaat, dat het in jouw stad live gaat, of dat iemand op de waitlist wordt uitgenodigd om deel te nemen.",
      },
      {
        title: "10. Wijzigingen aan het platform",
        paragraph:
          "Wij kunnen elk onderdeel van de website of de waitlist op elk moment wijzigen, opschorten of beëindigen. Als MOVRR later een live platform lanceert, kunnen daarvoor aanvullende platformspecifieke voorwaarden gelden.",
      },
      {
        title: "11. Uitsluiting van garanties",
        paragraph:
          "Voor zover wettelijk toegestaan wordt de website aangeboden op basis van beschikbaarheid en zoals deze is. MOVRR garandeert niet dat de website ononderbroken, foutloos of geschikt voor een bepaald doel zal zijn. Niets in deze voorwaarden beperkt rechten die je hebt op grond van dwingend consumentenrecht.",
      },
      {
        title: "12. Beperking van aansprakelijkheid",
        paragraph:
          "Voor zover wettelijk toegestaan is MOVRR niet aansprakelijk voor indirecte, incidentele, bijzondere of gevolgschade voortvloeiend uit het gebruik van de website. MOVRR sluit geen aansprakelijkheid uit voor fraude, grove nalatigheid, overlijden, persoonlijk letsel of andere aansprakelijkheid die onder Nederlands of Europees recht niet mag worden uitgesloten.",
      },
      {
        title: "13. Vrijwaring",
        paragraph:
          "Je bent verantwoordelijk voor verliezen, kosten of claims die voortvloeien uit jouw onrechtmatige gebruik van de website, schending van deze voorwaarden of inbreuk op rechten van derden, voor zover dit op grond van toepasselijk recht is toegestaan.",
      },
      {
        title: "14. Diensten van derden",
        paragraph:
          "De website kan gebruikmaken van externe aanbieders voor hosting, analytics, communicatie of infrastructuur. MOVRR is niet verantwoordelijk voor diensten van derden, behalve voor zover toepasselijk recht anders bepaalt.",
      },
      {
        title: "15. Verwijzing naar privacy",
        paragraph:
          "Lees ook het MOVRR Privacybeleid om te begrijpen hoe wij persoonsgegevens verwerken in verband met de website en de waitlist.",
      },
      {
        title: "16. Toepasselijk recht",
        paragraph:
          "Op deze voorwaarden is Nederlands recht van toepassing, onverminderd dwingende consumentenbescherming die kan gelden op grond van het recht van jouw woonland binnen de Europese Unie.",
      },
      {
        title: "17. Geschillenregeling",
        paragraph:
          "Als er een geschil ontstaat, vragen wij je eerst contact op te nemen met MOVRR zodat we proberen het informeel op te lossen. Als dat niet lukt, zijn de bevoegde rechtbanken in Rotterdam bevoegd, tenzij dwingend recht je toestaat de zaak elders aanhangig te maken.",
      },
      {
        title: "18. Wijzigingen in deze voorwaarden",
        paragraph:
          "Wij kunnen deze voorwaarden van tijd tot tijd wijzigen. Wanneer dat gebeurt, publiceren wij de herziene versie op deze pagina en passen wij de datum hierboven aan. Als je de website blijft gebruiken nadat de herziene voorwaarden van kracht zijn geworden, aanvaard je de bijgewerkte voorwaarden.",
      },
      {
        title: "19. Contact",
        contact: {
          emailLabel: "Juridisch",
          emailValue: "legal@movrr.nl",
          supportLabel: "Support",
          supportValue: "support@movrr.nl",
          addressLabel: "Adres",
          addressLine1: "MOVRR",
          addressLine2: "Rotterdam, Nederland",
        },
      },
    ],
  },
  unauthorized: {
    title: "TOEGANG GEWEIGERD",
    description: "Je hebt geen toegang tot het admin dashboard.",
    note: "Deze poging is vastgelegd voor beveiligingsdoeleinden.",
    returnHome: "Terug naar de homepage",
    tryDifferentAccount: "Inloggen met een ander account",
  },
};

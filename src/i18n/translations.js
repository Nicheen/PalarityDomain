// Lightweight i18n dictionary. No external library.
// Privacy Policy is stored as structured blocks consumed by a renderer.
// Inline tokens: [[email]] -> mailto link, [[termly]] -> Termly generator link.

export const EMAIL = 'palarity.ab@gmail.com';

const en = {
  // App shell
  brand: 'PALARITY.DEV',
  nav: {
    toggleMenu: 'Toggle menu',
    pageHero: 'Go to hero',
    pageAbout: 'Go to about',
    langLabel: 'Language',
  },

  // Hero
  hero: {
    presents: 'Palarity Presents',
    titleLevel: 'Level',
    titleShift: 'Shift',
    discordCta: 'Join our Discord',
  },

  // Footer
  footer: {
    copy: (year) => `© ${year} Palarity AB. Uppsala, Sweden.`,
    privacy: 'Privacy Policy',
  },

  // About
  about: {
    title: 'ABOUT US',
    paragraphs: [
      'Palarity was started in October 2025 by two electrical engineers from Uppsala University.',
      'Before using Godot, we wrote a game engine in C from scratch. It taught us a lot about how things work under the hood, and that shows in how we make our games.',
      // {pre} ... {strong} ... {post} rendered with a bold middle
      { pre: 'We are making a ', strong: 'precision 2D platformer', post: ' with tight controls, geometric level design, dash mechanics, and speedrunning.' },
    ],
  },

  // Social dropdown
  social: {
    steam: 'Steam (SOON)',
    twitter: 'X / Twitter',
    discord: 'Discord',
    instagram: 'Instagram',
    email: EMAIL,
  },

  // Cookie consent
  cookie: {
    line1: 'We use cookies to analyze website traffic and improve your experience.',
    line2: 'No personal data is collected without your consent.',
    accept: 'Accept',
    decline: 'Decline',
    acceptAria: 'Accept analytics cookies',
    declineAria: 'Decline analytics cookies',
  },

  // Privacy Policy
  privacy: {
    back: '← Back',
    label: 'Legal',
    title: 'Privacy Policy',
    date: 'Last updated March 01, 2026',
    intro: [
      { p: 'This Privacy Notice for Palarity AB (doing business as Palarity) ("we," "us," or "our") describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you visit our website or engage with us in other related ways, including any marketing or events.' },
      { p: 'Questions or concerns? Contact us at [[email]].' },
    ],
    sections: [
      {
        h2: 'Summary of Key Points',
        blocks: [
          { ul: [
            { b: 'Personal information we process:', t: ' Information you provide when interacting with our Services.' },
            { b: 'Sensitive information:', t: ' We do not process sensitive personal information.' },
            { b: 'Third-party sources:', t: ' We may collect information from public databases, marketing partners, and social media platforms.' },
            { b: 'How we process it:', t: ' To provide, improve, and administer our Services, communicate with you, and for security and fraud prevention.' },
            { b: 'Your rights:', t: ' Depending on your location, you may have rights regarding your personal information.' },
            { b: 'How to exercise your rights:', t: ' Contact us at [[email]].' },
          ] },
        ],
      },
      {
        h2: 'Table of Contents',
        blocks: [
          { ol: [
            'What Information Do We Collect?',
            'How Do We Process Your Information?',
            'What Legal Bases Do We Rely On?',
            'When and With Whom Do We Share Your Personal Information?',
            'Do We Use Cookies and Other Tracking Technologies?',
            'How Do We Handle Your Social Logins?',
            'How Long Do We Keep Your Information?',
            'How Do We Keep Your Information Safe?',
            'Do We Collect Information From Minors?',
            'What Are Your Privacy Rights?',
            'Controls for Do-Not-Track Features',
            'Do United States Residents Have Specific Privacy Rights?',
            'Do We Make Updates to This Notice?',
            'How Can You Contact Us About This Notice?',
            'How Can You Review, Update, or Delete the Data We Collect?',
          ] },
        ],
      },
      {
        h2: '1. What Information Do We Collect?',
        blocks: [
          { h3: 'Personal information you disclose to us' },
          { note: 'In Short: We collect personal information that you provide to us.' },
          { p: 'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.' },
          { p: 'The personal information we collect may include:' },
          { ul: ['Names', 'Email addresses', 'Usernames'] },
          { p: 'We do not process sensitive information.' },
          { h3: 'Information automatically collected' },
          { note: 'In Short: Some information is collected automatically when you visit our Services.' },
          { p: 'We automatically collect certain information when you visit, use, or navigate the Services. This includes device and usage information such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Services. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.' },
          { p: 'Like many businesses, we also collect information through cookies and similar technologies.' },
        ],
      },
      {
        h2: '2. How Do We Process Your Information?',
        blocks: [
          { note: 'In Short: We process your information to provide, improve, and administer our Services.' },
          { p: 'We process your personal information for the following purposes:' },
          { ul: [
            { b: 'Deliver services:', t: ' To provide you with the requested service.' },
            { b: 'Support:', t: ' To respond to your inquiries and solve any potential issues.' },
            { b: 'Administrative communications:', t: ' To send details about our products, services, and policy changes.' },
            { b: 'Order fulfillment:', t: ' To fulfill and manage your orders, payments, returns, and exchanges.' },
            { b: 'User communications:', t: ' To enable communication between users if applicable.' },
            { b: 'Feedback:', t: ' To request feedback about your use of our Services.' },
            { b: 'Marketing:', t: ' To send marketing and promotional communications in accordance with your preferences.' },
            { b: 'Advertising:', t: ' To deliver targeted advertising tailored to your interests.' },
            { b: 'Analytics:', t: ' To determine the effectiveness of our marketing campaigns.' },
            { b: 'Vital interests:', t: " To save or protect an individual's vital interest, such as to prevent harm." },
          ] },
        ],
      },
      {
        h2: '3. What Legal Bases Do We Rely On?',
        blocks: [
          { note: 'In Short: We only process your personal information when we have a valid legal reason to do so.' },
          { h3: 'EU and UK residents (GDPR)' },
          { ul: [
            { b: 'Consent:', t: ' We may process your information if you have given us permission. You can withdraw consent at any time.' },
            { b: 'Performance of a Contract:', t: ' When necessary to fulfill our contractual obligations to you.' },
            { b: 'Legitimate Interests:', t: ' When reasonably necessary to achieve our legitimate business interests, including sending special offers, developing personalized advertising, and understanding user experience.' },
            { b: 'Legal Obligations:', t: ' When necessary for compliance with our legal obligations.' },
            { b: 'Vital Interests:', t: ' When necessary to protect your vital interests or those of a third party.' },
          ] },
          { h3: 'Canada residents' },
          { p: 'We may process your information if you have given us express or implied consent. You can withdraw your consent at any time. In some exceptional cases, we may be legally permitted to process your information without consent as permitted by applicable law.' },
        ],
      },
      {
        h2: '4. When and With Whom Do We Share Your Personal Information?',
        blocks: [
          { note: 'In Short: We may share information in specific situations with the following third parties.' },
          { ul: [
            { b: 'Business Transfers:', t: ' We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition of our business.' },
            { b: 'Business Partners:', t: ' We may share your information with our business partners to offer you certain products, services, or promotions.' },
          ] },
        ],
      },
      {
        h2: '5. Do We Use Cookies and Other Tracking Technologies?',
        blocks: [
          { note: 'In Short: We may use cookies and other tracking technologies to collect and store your information.' },
          { p: 'We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.' },
          { p: 'We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising purposes. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.' },
        ],
      },
      {
        h2: '6. How Do We Handle Your Social Logins?',
        blocks: [
          { note: 'In Short: If you log in using a social media account, we may have access to certain information about you.' },
          { p: 'Our Services offer you the ability to register and log in using your third-party social media account details. We will receive certain profile information from your social media provider, such as your name, email address, and profile picture. We will use this information only for the purposes described in this Privacy Notice.' },
        ],
      },
      {
        h2: '7. How Long Do We Keep Your Information?',
        blocks: [
          { note: 'In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this notice.' },
          { p: 'We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.' },
        ],
      },
      {
        h2: '8. How Do We Keep Your Information Safe?',
        blocks: [
          { note: 'In Short: We aim to protect your personal information through organizational and technical security measures.' },
          { p: 'We have implemented appropriate and reasonable technical and organizational security measures to protect any personal information we process. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. You should only access the Services within a secure environment.' },
        ],
      },
      {
        h2: '9. Do We Collect Information From Minors?',
        blocks: [
          { note: 'In Short: We do not knowingly collect data from or market to children under 18 years of age.' },
          { p: 'We do not knowingly collect, solicit data from, or market to children under 18 years of age. By using the Services, you represent that you are at least 18 years old. If we learn that personal information from users under 18 has been collected, we will deactivate the account and delete such data. If you become aware of any data we may have collected from children under 18, please contact us at [[email]].' },
        ],
      },
      {
        h2: '10. What Are Your Privacy Rights?',
        blocks: [
          { note: 'In Short: Depending on your location, you have rights that allow you greater access to and control over your personal information.' },
          { p: 'In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws, including the right to:' },
          { ul: [
            'Request access and obtain a copy of your personal information',
            'Request rectification or erasure',
            'Restrict the processing of your personal information',
            'Data portability (if applicable)',
            'Not be subject to automated decision-making',
          ] },
          { p: 'If you are in the EEA or UK and believe we are unlawfully processing your personal information, you have the right to complain to your Member State data protection authority. If you are in Switzerland, you may contact the Federal Data Protection and Information Commissioner.' },
          { h3: 'Withdrawing your consent' },
          { p: 'You have the right to withdraw your consent at any time by contacting us using the details in Section 14. This will not affect the lawfulness of processing before its withdrawal.' },
          { h3: 'Opting out of marketing' },
          { p: 'You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in our emails or by contacting us at [[email]].' },
        ],
      },
      {
        h2: '11. Controls for Do-Not-Track Features',
        blocks: [
          { p: 'Most web browsers include a Do-Not-Track ("DNT") feature. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals. If a standard is adopted that we must follow in the future, we will inform you in a revised version of this Privacy Notice.' },
        ],
      },
      {
        h2: '12. Do United States Residents Have Specific Privacy Rights?',
        blocks: [
          { note: 'In Short: If you are a US resident, you may have the right to request access to and details about your personal information.' },
          { h3: 'Categories of Personal Information We Collect' },
          { table: {
            head: ['Category', 'Examples', 'Collected'],
            rows: [
              ['A. Identifiers', 'Name, alias, postal address, phone, IP address, email, account name', 'NO'],
              ['B. California Customer Records', 'Name, contact info, education, employment, financial information', 'NO'],
              ['C. Protected classification characteristics', 'Gender, age, race, ethnicity, national origin, marital status', 'NO'],
              ['D. Commercial information', 'Transaction info, purchase history, financial details', 'NO'],
              ['E. Biometric information', 'Fingerprints and voiceprints', 'NO'],
              ['F. Internet or network activity', 'Browsing history, search history, online behavior', 'NO'],
              ['G. Geolocation data', 'Device location', 'NO'],
              ['H. Audio, electronic, sensory', 'Images, audio, video, or call recordings', 'NO'],
              ['I. Professional information', 'Business contact details, job title, work history', 'NO'],
              ['J. Education information', 'Student records and directory information', 'NO'],
              ['K. Inferences', 'Inferences drawn to create a profile about an individual', 'NO'],
              ['L. Sensitive personal information', '—', 'NO'],
            ],
          } },
          { h3: 'Your Rights' },
          { ul: [
            'Right to know whether or not we are processing your personal data',
            'Right to access your personal data',
            'Right to correct inaccuracies in your personal data',
            'Right to request deletion of your personal data',
            'Right to obtain a copy of personal data you previously shared with us',
            'Right to non-discrimination for exercising your rights',
            'Right to opt out of targeted advertising, the sale of personal data, or profiling',
          ] },
          { h3: 'How to Exercise Your Rights' },
          { p: 'To exercise these rights, contact us at [[email]].' },
          { h3: 'Appeals' },
          { p: 'If we decline to take action regarding your request, you may appeal our decision by emailing us at [[email]]. If your appeal is denied, you may submit a complaint to your state attorney general.' },
          { h3: 'California "Shine The Light" Law' },
          { p: 'California Civil Code Section 1798.83 permits California residents to request, once a year and free of charge, information about categories of personal information we disclosed to third parties for direct marketing purposes. Submit such requests in writing using the contact details in Section 14.' },
        ],
      },
      {
        h2: '13. Do We Make Updates to This Notice?',
        blocks: [
          { note: 'In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.' },
          { p: 'We may update this Privacy Notice from time to time. The updated version will be indicated by an updated date at the top of this notice. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.' },
        ],
      },
      {
        h2: '14. How Can You Contact Us About This Notice?',
        blocks: [
          { p: 'If you have questions or comments about this notice, you may email us at [[email]] or contact us by post at:' },
          { address: ['Palarity AB', 'Kungsgatan 91B', 'Uppsala 75318', 'Sweden'] },
        ],
      },
      {
        h2: '15. How Can You Review, Update, or Delete the Data We Collect?',
        blocks: [
          { p: 'Based on the applicable laws of your country or state of residence, you may have the right to request access to the personal information we collect from you, correct inaccuracies, or delete your personal information. To make such a request, please contact us at [[email]].' },
        ],
      },
    ],
    generatorNote: { pre: "This Privacy Policy was created using Termly's ", link: 'Privacy Policy Generator', post: '.' },
  },
};

const sv = {
  brand: 'PALARITY.DEV',
  nav: {
    toggleMenu: 'Växla meny',
    pageHero: 'Gå till start',
    pageAbout: 'Gå till om oss',
    langLabel: 'Språk',
  },

  hero: {
    presents: 'Palarity Presenterar',
    titleLevel: 'Level',
    titleShift: 'Shift',
    discordCta: 'Gå med i vår Discord',
  },

  footer: {
    copy: (year) => `© ${year} Palarity AB. Uppsala, Sverige.`,
    privacy: 'Integritetspolicy',
  },

  about: {
    title: 'OM OSS',
    paragraphs: [
      'Palarity startades i oktober 2025 av två civilingenjörer inom elektroteknik från Uppsala universitet.',
      'Innan vi använde Godot skrev vi en spelmotor i C från grunden. Det lärde oss mycket om hur saker fungerar under huven, och det syns i hur vi gör våra spel.',
      { pre: 'Vi gör en ', strong: 'precisions-2D-plattformare', post: ' med exakta kontroller, geometrisk bandesign, dash-mekanik och speedrunning.' },
    ],
  },

  social: {
    steam: 'Steam (SNART)',
    twitter: 'X / Twitter',
    discord: 'Discord',
    instagram: 'Instagram',
    email: EMAIL,
  },

  cookie: {
    line1: 'Vi använder cookies för att analysera webbtrafik och förbättra din upplevelse.',
    line2: 'Ingen personlig data samlas in utan ditt samtycke.',
    accept: 'Acceptera',
    decline: 'Avböj',
    acceptAria: 'Acceptera analyscookies',
    declineAria: 'Avböj analyscookies',
  },

  privacy: {
    back: '← Tillbaka',
    label: 'Juridik',
    title: 'Integritetspolicy',
    date: 'Senast uppdaterad 01 mars 2026',
    intro: [
      { p: 'Detta integritetsmeddelande för Palarity AB (som bedriver verksamhet som Palarity) ("vi", "oss" eller "vår") beskriver hur och varför vi kan komma åt, samla in, lagra, använda och/eller dela ("behandla") dina personuppgifter när du använder våra tjänster ("Tjänsterna"), inklusive när du besöker vår webbplats eller interagerar med oss på andra relaterade sätt, inklusive marknadsföring eller evenemang.' },
      { p: 'Frågor eller funderingar? Kontakta oss på [[email]].' },
    ],
    sections: [
      {
        h2: 'Sammanfattning av viktiga punkter',
        blocks: [
          { ul: [
            { b: 'Personuppgifter vi behandlar:', t: ' Uppgifter du lämnar när du interagerar med våra Tjänster.' },
            { b: 'Känsliga uppgifter:', t: ' Vi behandlar inte känsliga personuppgifter.' },
            { b: 'Tredjepartskällor:', t: ' Vi kan samla in uppgifter från offentliga databaser, marknadsföringspartners och sociala medier.' },
            { b: 'Hur vi behandlar dem:', t: ' För att tillhandahålla, förbättra och administrera våra Tjänster, kommunicera med dig samt för säkerhet och bedrägeribekämpning.' },
            { b: 'Dina rättigheter:', t: ' Beroende på var du befinner dig kan du ha rättigheter gällande dina personuppgifter.' },
            { b: 'Hur du utövar dina rättigheter:', t: ' Kontakta oss på [[email]].' },
          ] },
        ],
      },
      {
        h2: 'Innehållsförteckning',
        blocks: [
          { ol: [
            'Vilka uppgifter samlar vi in?',
            'Hur behandlar vi dina uppgifter?',
            'Vilka rättsliga grunder förlitar vi oss på?',
            'När och med vem delar vi dina personuppgifter?',
            'Använder vi cookies och annan spårningsteknik?',
            'Hur hanterar vi dina sociala inloggningar?',
            'Hur länge sparar vi dina uppgifter?',
            'Hur håller vi dina uppgifter säkra?',
            'Samlar vi in uppgifter från minderåriga?',
            'Vilka är dina integritetsrättigheter?',
            'Kontroller för Do-Not-Track-funktioner',
            'Har invånare i USA specifika integritetsrättigheter?',
            'Gör vi uppdateringar av detta meddelande?',
            'Hur kan du kontakta oss om detta meddelande?',
            'Hur kan du granska, uppdatera eller radera de uppgifter vi samlar in?',
          ] },
        ],
      },
      {
        h2: '1. Vilka uppgifter samlar vi in?',
        blocks: [
          { h3: 'Personuppgifter du lämnar till oss' },
          { note: 'Kort sagt: Vi samlar in de personuppgifter du lämnar till oss.' },
          { p: 'Vi samlar in personuppgifter som du frivilligt lämnar till oss när du visar intresse för att få information om oss eller våra produkter och Tjänster, när du deltar i aktiviteter i Tjänsterna eller annars när du kontaktar oss.' },
          { p: 'De personuppgifter vi samlar in kan inkludera:' },
          { ul: ['Namn', 'E-postadresser', 'Användarnamn'] },
          { p: 'Vi behandlar inte känsliga uppgifter.' },
          { h3: 'Uppgifter som samlas in automatiskt' },
          { note: 'Kort sagt: Vissa uppgifter samlas in automatiskt när du besöker våra Tjänster.' },
          { p: 'Vi samlar automatiskt in viss information när du besöker, använder eller navigerar i Tjänsterna. Detta inkluderar enhets- och användningsinformation såsom din IP-adress, webbläsar- och enhetsegenskaper, operativsystem, språkinställningar, hänvisande URL:er, enhetsnamn, land, plats och information om hur och när du använder våra Tjänster. Denna information behövs främst för att upprätthålla säkerheten och driften av våra Tjänster samt för vår interna analys och rapportering.' },
          { p: 'Liksom många företag samlar vi också in information via cookies och liknande teknik.' },
        ],
      },
      {
        h2: '2. Hur behandlar vi dina uppgifter?',
        blocks: [
          { note: 'Kort sagt: Vi behandlar dina uppgifter för att tillhandahålla, förbättra och administrera våra Tjänster.' },
          { p: 'Vi behandlar dina personuppgifter för följande ändamål:' },
          { ul: [
            { b: 'Leverera tjänster:', t: ' För att tillhandahålla den begärda tjänsten.' },
            { b: 'Support:', t: ' För att svara på dina förfrågningar och lösa eventuella problem.' },
            { b: 'Administrativ kommunikation:', t: ' För att skicka detaljer om våra produkter, tjänster och policyändringar.' },
            { b: 'Orderhantering:', t: ' För att uppfylla och hantera dina beställningar, betalningar, returer och byten.' },
            { b: 'Användarkommunikation:', t: ' För att möjliggöra kommunikation mellan användare i tillämpliga fall.' },
            { b: 'Återkoppling:', t: ' För att be om återkoppling om din användning av våra Tjänster.' },
            { b: 'Marknadsföring:', t: ' För att skicka marknadsföring och kampanjkommunikation i enlighet med dina preferenser.' },
            { b: 'Annonsering:', t: ' För att leverera riktad annonsering anpassad efter dina intressen.' },
            { b: 'Analys:', t: ' För att avgöra effektiviteten i våra marknadsföringskampanjer.' },
            { b: 'Grundläggande intressen:', t: ' För att rädda eller skydda en persons grundläggande intresse, såsom att förhindra skada.' },
          ] },
        ],
      },
      {
        h2: '3. Vilka rättsliga grunder förlitar vi oss på?',
        blocks: [
          { note: 'Kort sagt: Vi behandlar endast dina personuppgifter när vi har en giltig rättslig grund för det.' },
          { h3: 'Invånare i EU och Storbritannien (GDPR)' },
          { ul: [
            { b: 'Samtycke:', t: ' Vi kan behandla dina uppgifter om du har gett oss tillstånd. Du kan återkalla samtycket när som helst.' },
            { b: 'Fullgörande av avtal:', t: ' När det är nödvändigt för att uppfylla våra avtalsförpliktelser gentemot dig.' },
            { b: 'Berättigade intressen:', t: ' När det är rimligen nödvändigt för att uppnå våra berättigade affärsintressen, inklusive att skicka specialerbjudanden, utveckla personanpassad annonsering och förstå användarupplevelsen.' },
            { b: 'Rättsliga förpliktelser:', t: ' När det är nödvändigt för att uppfylla våra rättsliga förpliktelser.' },
            { b: 'Grundläggande intressen:', t: ' När det är nödvändigt för att skydda dina eller en tredje parts grundläggande intressen.' },
          ] },
          { h3: 'Invånare i Kanada' },
          { p: 'Vi kan behandla dina uppgifter om du har gett oss uttryckligt eller underförstått samtycke. Du kan återkalla ditt samtycke när som helst. I vissa undantagsfall kan vi vara juridiskt tillåtna att behandla dina uppgifter utan samtycke enligt gällande lag.' },
        ],
      },
      {
        h2: '4. När och med vem delar vi dina personuppgifter?',
        blocks: [
          { note: 'Kort sagt: Vi kan dela uppgifter i specifika situationer med följande tredje parter.' },
          { ul: [
            { b: 'Företagsöverlåtelser:', t: ' Vi kan dela eller överföra dina uppgifter i samband med en fusion, försäljning av företagstillgångar, finansiering eller förvärv av vår verksamhet.' },
            { b: 'Affärspartners:', t: ' Vi kan dela dina uppgifter med våra affärspartners för att erbjuda dig vissa produkter, tjänster eller kampanjer.' },
          ] },
        ],
      },
      {
        h2: '5. Använder vi cookies och annan spårningsteknik?',
        blocks: [
          { note: 'Kort sagt: Vi kan använda cookies och annan spårningsteknik för att samla in och lagra dina uppgifter.' },
          { p: 'Vi kan använda cookies och liknande spårningsteknik (som webbfyrar och pixlar) för att samla in information när du interagerar med våra Tjänster. Viss online-spårningsteknik hjälper oss att upprätthålla säkerheten i våra Tjänster, förhindra krascher, rätta buggar, spara dina preferenser och underlätta grundläggande webbplatsfunktioner.' },
          { p: 'Vi tillåter också tredje parter och tjänsteleverantörer att använda online-spårningsteknik i våra Tjänster för analys- och annonseringssyften. Specifik information om hur vi använder sådan teknik och hur du kan neka vissa cookies anges i vårt cookiemeddelande.' },
        ],
      },
      {
        h2: '6. Hur hanterar vi dina sociala inloggningar?',
        blocks: [
          { note: 'Kort sagt: Om du loggar in via ett konto på sociala medier kan vi få tillgång till viss information om dig.' },
          { p: 'Våra Tjänster ger dig möjlighet att registrera dig och logga in med dina inloggningsuppgifter från tredjeparts sociala medier. Vi tar emot viss profilinformation från din leverantör av sociala medier, såsom ditt namn, din e-postadress och din profilbild. Vi använder denna information endast för de ändamål som beskrivs i detta integritetsmeddelande.' },
        ],
      },
      {
        h2: '7. Hur länge sparar vi dina uppgifter?',
        blocks: [
          { note: 'Kort sagt: Vi sparar dina uppgifter så länge det är nödvändigt för de ändamål som beskrivs i detta meddelande.' },
          { p: 'Vi sparar endast dina personuppgifter så länge det är nödvändigt för de ändamål som anges i detta integritetsmeddelande, om inte en längre lagringsperiod krävs enligt lag. När vi inte längre har något berättigat affärsbehov av att behandla dina personuppgifter kommer vi antingen att radera eller anonymisera dem.' },
        ],
      },
      {
        h2: '8. Hur håller vi dina uppgifter säkra?',
        blocks: [
          { note: 'Kort sagt: Vi strävar efter att skydda dina personuppgifter genom organisatoriska och tekniska säkerhetsåtgärder.' },
          { p: 'Vi har implementerat lämpliga och rimliga tekniska och organisatoriska säkerhetsåtgärder för att skydda de personuppgifter vi behandlar. Ingen elektronisk överföring över internet eller lagringsteknik kan dock garanteras vara 100 % säker. Du bör endast använda Tjänsterna i en säker miljö.' },
        ],
      },
      {
        h2: '9. Samlar vi in uppgifter från minderåriga?',
        blocks: [
          { note: 'Kort sagt: Vi samlar inte medvetet in uppgifter från eller marknadsför till barn under 18 år.' },
          { p: 'Vi samlar inte medvetet in, begär uppgifter från eller marknadsför till barn under 18 år. Genom att använda Tjänsterna intygar du att du är minst 18 år. Om vi får kännedom om att personuppgifter från användare under 18 år har samlats in kommer vi att avaktivera kontot och radera sådana uppgifter. Om du blir medveten om några uppgifter vi kan ha samlat in från barn under 18 år, vänligen kontakta oss på [[email]].' },
        ],
      },
      {
        h2: '10. Vilka är dina integritetsrättigheter?',
        blocks: [
          { note: 'Kort sagt: Beroende på var du befinner dig har du rättigheter som ger dig större tillgång till och kontroll över dina personuppgifter.' },
          { p: 'I vissa regioner (som EES, Storbritannien, Schweiz och Kanada) har du vissa rättigheter enligt gällande dataskyddslagar, inklusive rätten att:' },
          { ul: [
            'Begära tillgång till och få en kopia av dina personuppgifter',
            'Begära rättelse eller radering',
            'Begränsa behandlingen av dina personuppgifter',
            'Dataöverförbarhet (i tillämpliga fall)',
            'Inte bli föremål för automatiserat beslutsfattande',
          ] },
          { p: 'Om du befinner dig i EES eller Storbritannien och anser att vi olagligt behandlar dina personuppgifter har du rätt att klaga hos din medlemsstats dataskyddsmyndighet. Om du befinner dig i Schweiz kan du kontakta Federal Data Protection and Information Commissioner.' },
          { h3: 'Återkalla ditt samtycke' },
          { p: 'Du har rätt att återkalla ditt samtycke när som helst genom att kontakta oss med uppgifterna i avsnitt 14. Detta påverkar inte lagligheten i behandlingen före återkallelsen.' },
          { h3: 'Avanmäla marknadsföring' },
          { p: 'Du kan när som helst avsluta prenumerationen på marknadsföringskommunikation genom att klicka på avanmälningslänken i våra mejl eller genom att kontakta oss på [[email]].' },
        ],
      },
      {
        h2: '11. Kontroller för Do-Not-Track-funktioner',
        blocks: [
          { p: 'De flesta webbläsare inkluderar en Do-Not-Track ("DNT")-funktion. I detta skede har ingen enhetlig teknisk standard för att känna igen och implementera DNT-signaler färdigställts. Därför svarar vi för närvarande inte på DNT-signaler från webbläsare. Om en standard antas som vi måste följa i framtiden kommer vi att informera dig i en reviderad version av detta integritetsmeddelande.' },
        ],
      },
      {
        h2: '12. Har invånare i USA specifika integritetsrättigheter?',
        blocks: [
          { note: 'Kort sagt: Om du är bosatt i USA kan du ha rätt att begära tillgång till och detaljer om dina personuppgifter.' },
          { h3: 'Kategorier av personuppgifter vi samlar in' },
          { table: {
            head: ['Kategori', 'Exempel', 'Insamlat'],
            rows: [
              ['A. Identifierare', 'Namn, alias, postadress, telefon, IP-adress, e-post, kontonamn', 'NEJ'],
              ['B. Kaliforniska kundregister', 'Namn, kontaktuppgifter, utbildning, anställning, finansiell information', 'NEJ'],
              ['C. Skyddade klassificeringsegenskaper', 'Kön, ålder, ras, etnicitet, nationellt ursprung, civilstånd', 'NEJ'],
              ['D. Kommersiell information', 'Transaktionsinformation, köphistorik, finansiella detaljer', 'NEJ'],
              ['E. Biometrisk information', 'Fingeravtryck och röstavtryck', 'NEJ'],
              ['F. Internet- eller nätverksaktivitet', 'Webbhistorik, sökhistorik, onlinebeteende', 'NEJ'],
              ['G. Geolokaliseringsdata', 'Enhetens plats', 'NEJ'],
              ['H. Ljud, elektroniskt, sensoriskt', 'Bilder, ljud, video eller samtalsinspelningar', 'NEJ'],
              ['I. Yrkesinformation', 'Affärskontaktuppgifter, jobbtitel, arbetshistorik', 'NEJ'],
              ['J. Utbildningsinformation', 'Studentregister och kataloginformation', 'NEJ'],
              ['K. Slutsatser', 'Slutsatser som dras för att skapa en profil om en individ', 'NEJ'],
              ['L. Känsliga personuppgifter', '—', 'NEJ'],
            ],
          } },
          { h3: 'Dina rättigheter' },
          { ul: [
            'Rätt att veta om vi behandlar dina personuppgifter eller inte',
            'Rätt att få tillgång till dina personuppgifter',
            'Rätt att rätta felaktigheter i dina personuppgifter',
            'Rätt att begära radering av dina personuppgifter',
            'Rätt att få en kopia av personuppgifter du tidigare delat med oss',
            'Rätt till icke-diskriminering för att utöva dina rättigheter',
            'Rätt att välja bort riktad annonsering, försäljning av personuppgifter eller profilering',
          ] },
          { h3: 'Hur du utövar dina rättigheter' },
          { p: 'För att utöva dessa rättigheter, kontakta oss på [[email]].' },
          { h3: 'Överklaganden' },
          { p: 'Om vi avböjer att vidta åtgärder gällande din begäran kan du överklaga vårt beslut genom att mejla oss på [[email]]. Om ditt överklagande avslås kan du lämna in ett klagomål till din delstats justitieminister.' },
          { h3: 'Kaliforniens "Shine The Light"-lag' },
          { p: 'Kaliforniens civillag avsnitt 1798.83 tillåter invånare i Kalifornien att en gång per år och kostnadsfritt begära information om kategorier av personuppgifter vi lämnat ut till tredje parter för direktmarknadsföring. Skicka sådana begäranden skriftligen med kontaktuppgifterna i avsnitt 14.' },
        ],
      },
      {
        h2: '13. Gör vi uppdateringar av detta meddelande?',
        blocks: [
          { note: 'Kort sagt: Ja, vi uppdaterar detta meddelande vid behov för att följa relevanta lagar.' },
          { p: 'Vi kan uppdatera detta integritetsmeddelande från tid till annan. Den uppdaterade versionen anges med ett uppdaterat datum högst upp i detta meddelande. Vi uppmuntrar dig att granska detta integritetsmeddelande ofta för att hållas informerad om hur vi skyddar dina uppgifter.' },
        ],
      },
      {
        h2: '14. Hur kan du kontakta oss om detta meddelande?',
        blocks: [
          { p: 'Om du har frågor eller kommentarer om detta meddelande kan du mejla oss på [[email]] eller kontakta oss per post på:' },
          { address: ['Palarity AB', 'Kungsgatan 91B', 'Uppsala 75318', 'Sverige'] },
        ],
      },
      {
        h2: '15. Hur kan du granska, uppdatera eller radera de uppgifter vi samlar in?',
        blocks: [
          { p: 'Baserat på gällande lagar i ditt land eller din delstat kan du ha rätt att begära tillgång till de personuppgifter vi samlar in från dig, rätta felaktigheter eller radera dina personuppgifter. För att göra en sådan begäran, vänligen kontakta oss på [[email]].' },
        ],
      },
    ],
    generatorNote: { pre: 'Denna integritetspolicy skapades med Termlys ', link: 'Integritetspolicy-generator', post: '.' },
  },
};

export const translations = { en, sv };

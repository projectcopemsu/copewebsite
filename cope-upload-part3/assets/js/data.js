/* ==========================================================================
   COPE SITE CONTENT
   This is the ONE file to edit for day-to-day updates (news, publications,
   partners, events, workshops...). Copy an entry, paste it, change the text.
   Images: put the file in /assets/img/ and set image: "assets/img/your-file.jpg".
   Leave image: "" to show a placeholder box.
   Anything in [square brackets] still needs real info.
   Remove  sample: true  once an entry has real information.
   ========================================================================== */
window.COPE = {

  org: {
    shortName: "COPE",
    fullName: "Communities Organizing for Prevention and Empowerment",
    tagline: "Community. Hope. Enduring.",
    mission: "To foster collaboration among key community sectors in an effort to increase the capacity for health promotion prevention activities through direct service delivery, outreach, education, and community empowerment.",
    about: "C.O.P.E. (Communities Organizing for Prevention & Empowerment) is a Montclair State University initiative, a federally funded grant centered out of the Department of Family Science & Human Development, serving the city of Paterson, NJ.",
    affiliation: "Montclair State University",
    logo: "assets/img/cope-logo.png",          // COPE mark (header)
    logoFull: "assets/img/cope-logo-full.png", // mark + tagline (footer, About)
    address: "147 Clove Rd, Little Falls Township, NJ 07424",
    phone: "973-655-6785",
    email: "ProjectCope@montclair.edu",
    hours: "9am–4pm",
    social: {
      instagram: ["cope.msu", "cope_pfs", "cope_hiv", "cope_pcope"],  // handles, no @
      facebook: "https://www.facebook.com/MSUProjectCOPE/",
      x: "https://twitter.com/msuprojectcope"
    }
  },

  /* Form delivery: create a free key at web3forms.com using the inbox that
     should receive submissions, then paste it here. Until then forms show a
     "not sent" notice instead of submitting. */
  forms: { endpoint: "https://api.web3forms.com/submit", accessKey: "88de217b-f6b6-4dfb-bab8-8430ea882efd" },

  /* Home page impact numbers */
  stats: [
    { value: "30,000+", label: "Paterson youth and young adults reached since 2003" },
    { value: "1,000+", label: "Youth reached each year" },
    { value: "35+", label: "Paterson & Passaic County schools and organizations partnered" },
    { value: "$8M+", label: "In federal prevention funding since 2003" }
  ],

  /* What we do (About + Home) */
  whatWeDo: [
    "Prevention education & professional training",
    "Substance use, HIV & hepatitis awareness",
    "Community outreach & network",
    "Data collection for grants",
    "Policy & advocacy"
  ],

  /* Grants & initiatives. status: "Active" or "Past" */
  initiatives: [
    { code: "PFS", status: "Active", name: "Strategic Prevention Framework – Partnerships for Success (SPF-PFS)",
      summary: "Applies SAMHSA's Strategic Prevention Framework (assessment, capacity, planning, implementation, evaluation) to substance misuse prevention in Paterson.",
      funder: "U.S. Department of Health and Human Services (HHS), Substance Abuse and Mental Health Services Administration (SAMHSA), Center for Substance Abuse Prevention (CSAP)",
      years: "2020–2025", grant: "5H79SPO82663-02", serves: "[Who it serves]", image: "", link: "" },
    { code: "HIV NAVIGATOR", status: "Past", name: "Substance Misuse, HIV, and Viral Hepatitis Prevention Navigator Initiative",
      summary: "The Paterson NJ / Montclair State University prevention navigator initiative for racial/ethnic minorities ages 13–24, covering substance misuse, HIV and viral hepatitis.",
      funder: "HHS, SAMHSA, Center for Substance Abuse Prevention (CSAP), Minority AIDS Initiative (MAI)",
      years: "2021–2026", grant: "1H79SP082100-01", serves: "Racial/ethnic minority youth and young adults ages 13–24", image: "", link: "" },
    { code: "P-COPE + STOP ACT", status: "", name: "Paterson Coalition for Prevention and Empowerment & Sober Truth on Preventing Underage Drinking (STOP) Act Grant",
      summary: "Community coalition work to reduce underage drinking and youth access to alcohol and tobacco in Paterson.",
      funder: "[Funder]", years: "[Years]", grant: "", serves: "[Who it serves]", image: "", link: "" },
    { code: "OPIOID RESPONSE", status: "Active", noPhoto: true, partOf: "P-COPE", name: "Opioid Response Team: FFY17 Comprehensive Opioid Abuse Site-Based Program",
      summary: "[Short description of the Opioid Response Team's work.]",
      funder: "[Funder]", years: "FFY 2017", grant: "", serves: "[Who it serves]", image: "", link: "" },
    { code: "DFC", status: "Active", noPhoto: true, partOf: "PFS", name: "Drug-Free Communities (DFC) Support Program",
      summary: "Supported the Paterson coalition's community-level prevention work, including the alcohol outlet density policy brief and Paterson's Tobacco 21 ordinance.",
      funder: "Executive Office of the President, Office of National Drug Control Policy (ONDCP); HHS, SAMHSA, CSAP; Centers for Disease Control and Prevention (CDC)",
      years: "2013–2023", grant: "H79SP020019", serves: "City of Paterson", image: "", link: "" },
    { code: "P-CASA", status: "Past", name: "Paterson Coalition Against Substance Abuse (P-CASA)",
      summary: "P-CASA is an anti-drug coalition in Paterson's 1st Ward, funded by the Drug Free Communities Grant Program (ONDCP) and SAMHSA. A partnership between Montclair State University and community groups, it brings together youth, parents, schools, faith groups, social services, law enforcement and the media. It works to reduce substance use among youth ages 12–17, limit youth access to alcohol and tobacco, and support stronger oversight of alcohol and tobacco sellers.",
      funder: "Drug Free Communities Grant Program: White House Office of National Drug Control Policy (ONDCP) and SAMHSA", years: "[Years]", grant: "", serves: "Youth ages 12–17 in Paterson's 1st Ward", image: "", link: "https://p-casa.org/" }
  ],

  /* Workshops. topic drives the filter buttons. evidence: true = part of the
     Evidence-Based Prevention Curriculum. All are free, in English or Spanish. */
  workshops: [
    { topic: "Substance Use", title: "Don't Get Vaped In", grades: "6th–9th grade", length: "45–50 min", image: "",
      goals: ["Learn the risks, health effects and social influences of vaping to prevent starting", "Evidence-based facts on nicotine and marijuana devices and their short- and long-term impacts", "Build decision-making skills and confidence to resist peer pressure"] },
    { topic: "Substance Use", title: "If You're Vaped In", grades: "6th–12th grade", length: "45–50 min", image: "",
      goals: ["Builds on Don't Get Vaped In with deeper awareness of vaping risks and addiction", "More on how nicotine and marijuana devices affect physical and mental health", "Practical quit strategies, coping skills and confidence to cut back or stop"] },
    { topic: "Substance Use", title: "The AMAZING Brain", grades: "6th–12th grade", length: "45–50 min", evidence: true, image: "",
      goals: ["Marijuana's effects, risks and social influences in an interactive format", "How marijuana affects physical health, mental health, brain development and decisions", "Critical thinking and peer discussion through team-based gameplay"] },
    { topic: "Substance Use", title: "Alcohol 101, 102 & 103", grades: "6th–12th grade", length: "45–50 min each", image: "",
      goals: ["101: Alcohol's effects, risks and social influences", "102: The dangers of mixing alcohol with other substances", "103: How alcohol addiction develops, its warning signs and impact"] },
    { topic: "Substance Use", title: "Legal Doesn't Always Mean Harmless", grades: "6th–12th grade", length: "45–50 min", evidence: true, image: "",
      goals: ["How dopamine shapes behavior, motivation and habits", "Why legal substances can still carry real risks", "Healthy habits and coping skills that reduce reliance on substances"] },
    { topic: "Substance Use", title: "Tobacco+", grades: "6th–10th grade", length: "45–50 min", image: "",
      goals: ["Types of tobacco products and why nicotine is so addictive", "How nicotine affects the brain, body and behavior", "Risks of tobacco use to support informed decisions"] },
    { topic: "Substance Use", title: "Marijuana Jeopardy", grades: "6th–12th grade", length: "45–50 min", image: "",
      goals: ["Marijuana effects, risks and common myths in a game format", "Dangers like addiction, impaired judgment and mental health impacts", "Team-based gameplay that builds critical thinking"] },
    { topic: "Substance Use", title: "Marijuana, Alcohol & Opioid Jeopardy", grades: "6th–12th grade", length: "45–50 min", image: "",
      goals: ["Effects, risks and myths across marijuana, alcohol and opioids", "Dangers like addiction, impaired judgment and health impacts", "Team-based gameplay and discussion"] },
    { topic: "Substance Use", title: "Decisions, Decisions...", grades: "6th–12th grade", length: "45–50 min", evidence: true, image: "",
      goals: ["How decision-making, influence and reward systems shape habits", "How peer pressure, social media, emotions and substances affect judgment", "How short-term choices affect long-term goals", "Healthy coping skills and positive habits"] },
    { topic: "Substance Use", title: "Opioids: Musical Chairs", grades: "8th–12th grade", length: "45–50 min", image: "",
      goals: ["How pop culture and music shape views of opioid use", "Dangers of opioid misuse, including addiction and overdose", "Analyze lyrics, trends and real-life scenarios"] },
    { topic: "Substance Use", title: "Opioids: Create Your Own Story", grades: "11th–12th grade", length: "45–50 min", image: "",
      goals: ["Scenario-based role plays where choices change the outcome", "Real-life consequences of opioid misuse: overdose, addiction, legal issues", "Practice safer, healthier choices"] },
    { topic: "Substance Use", title: "Alcohol, Tobacco & Other Drugs Family Feud", grades: "6th–12th grade", length: "60–90 min", image: "",
      goals: ["Marijuana, alcohol and opioid facts and myths in a game format", "Dangers like addiction, overdose and health impacts", "Team gameplay with real-life scenarios"] },
    { topic: "Mental Health & SEL", title: "Stress for Youth", grades: "6th–12th grade", length: "45–50 min", evidence: true, image: "",
      goals: ["What stress is and how it affects emotions, thoughts and the body", "Common youth stressors: school, social pressure, life changes", "Practice healthy coping skills and resilience"] },
    { topic: "Mental Health & SEL", title: "Managing Stress", grades: "6th–12th grade", length: "45–50 min", image: "",
      goals: ["What anxiety is and how it differs from everyday stress", "The risks of self-diagnosis and misinformation", "Coping strategies and knowing when to seek help"] },
    { topic: "Mental Health & SEL", title: "Positive Mind", grades: "5th–12th grade", length: "45–60 min", image: "",
      goals: ["Managing depressive feelings", "Knowing when and how to get help"] },
    { topic: "Mental Health & SEL", title: "You Belong", grades: "6th–12th grade", length: "45–50 min", image: "",
      goals: ["Identity is layered: culture, language, experiences, values, expression", "The difference between internal identity and external expression", "Practice respecting identities different from our own"] },
    { topic: "Mental Health & SEL", title: "Values & Vibes", grades: "9th–12th grade", length: "45–50 min", image: "",
      goals: ["The difference between values and boundaries", "Spot green flags vs. red flags in relationships", "Build healthy romantic and platonic relationships"] },
    { topic: "HIV & Sexual Health", title: "HIV & Viral Hepatitis Bingo", grades: "6th–12th grade", length: "45–50 min", evidence: true, image: "",
      goals: ["HIV and viral hepatitis basics: transmission, prevention, myths", "Risk factors, testing and early detection", "Open conversation that reduces stigma"] },
    { topic: "HIV & Sexual Health", title: "HIV & Viral Hepatitis Jeopardy", grades: "6th–12th grade", length: "45–50 min", image: "",
      goals: ["Team-based learning on HIV and viral hepatitis", "Transmission, prevention, symptoms and treatment", "Real-life scenarios and discussion"] },
    { topic: "HIV & Sexual Health", title: "Love ST-Island", grades: "9th–12th grade (12+)", length: "60 min", image: "",
      goals: ["Bacterial STIs (chlamydia, gonorrhea, syphilis) and viral STIs (HIV, HPV, herpes)", "Protection, consent and communication", "Prevention, regular testing and early treatment", "Judgment-free discussion with real-life scenarios"] },
    { topic: "HIV & Sexual Health", title: "Are You Wrapping It Up?", grades: "11th–12th grade & adults", length: "45–50 min", image: "",
      goals: ["Scenario-based role plays where choices change the outcome", "Real consequences of unprotected sex", "Practice safer, healthier choices"] }
  ],

  /* Parent workshops: photo goes in assets/img/workshop-vape-and-tobacco-workshop-for-parents.jpg */
  parentWorkshop: { topic: "Parents & Caregivers", title: "Vape & Tobacco Workshop for Parents", grades: "Parents & caregivers", image: "",
    goals: ["What parents and caregivers should know about vape and tobacco products"] },

  /* The 8-session Evidence-Based Prevention Curriculum, in order */
  curriculum: ["Pre-Survey", "Decisions, Decisions...", "Stress for Youth", "The AMAZING Brain", "Legal Doesn't Always Mean Harmless", "HIV & Viral Hepatitis", "Post-Survey"],

  trainings: [
    { title: "Professional Development for Schools & Staff", who: "Teachers, counselors, school staff and youth-serving professionals", image: "",
      what: "Interactive trainings for educators and staff, delivered game-style, with a take-home resource sheet of free curricula, engagement tools, self-care and cessation resources." },
    { title: "Youth Peer-to-Peer Training", who: "Students who want to lead", image: "",
      what: "Young people often hear the message best from each other. COPE trains students to lead our workshops themselves: they learn the content, practice facilitating, and then deliver the workshops to their peers, building leadership and public-speaking skills along the way. In partnership with Sankofa Academy and BUDS & UMOJA." }
  ],

  /* Youth groups & campaigns */
  youthGroups: [
    { name: "Youth Leadership Council", ages: "All grades · ages 8+", meets: "3 times a month", image: "",
      what: "Youth leaders who set goals, document their community through photovoice and environmental scanning, then prepare and practice to advocate for change, all the way to Paterson City Council meetings. Run in collaboration with BUDS & UMOJA and Paterson MAPP." }
  ],
  youthCampaigns: [
    /* Each campaign gets its own section on the Campaigns page.
       cover: shows on the Youth page. infographics + gallery: lists of
       { title, file }. Files live in assets/img/. Add more by copying a line. */
    { name: "Let's Be Blunt / Seamos Francos", topic: "Marijuana", year: "2017–2023", image: "assets/img/camp-blunt-ad-brain-development.jpg",
      downloads: [{ title: "Let's Be Blunt: Face the Facts on Youth Marijuana Use (2017)", file: "assets/docs/face-the-facts-marijuana-2017.pdf" }],
      what: "Bilingual marijuana prevention campaign for Paterson youth: marijuana slows brain development, 1 in 6 teens who use marijuana become addicted, and good friends don't pressure friends to use. Youth who are active in their community are less likely to use marijuana.",
      infographics: [
        { title: "Face the Facts: Teen Marijuana Use in Paterson (comic)", file: "assets/img/camp-blunt-comic-en.jpg" },
        { title: "Seamos Francos (comic, Spanish)", file: "assets/img/camp-blunt-comic-es.jpg" },
        { title: "Let's Be Blunt: Face the Facts on Youth Marijuana Use", file: "assets/img/camp-blunt-facts-en.jpg" },
        { title: "Seamos Francos: El Uso de la Marihuana (Spanish)", file: "assets/img/camp-blunt-facts-es.jpg" }
      ],
      gallery: [
        { title: "Billboard", file: "assets/img/camp-blunt-billboard.jpg" },
        { title: "Marijuana slows brain development", file: "assets/img/camp-blunt-ad-brain-development.jpg" },
        { title: "Good friends don't pressure friends", file: "assets/img/camp-blunt-ad-good-friends.jpg" },
        { title: "Bilingual ad", file: "assets/img/camp-blunt-ad-bilingual.jpg" },
        { title: "1 in 6 teens who use marijuana become addicted", file: "assets/img/camp-blunt-ad-1-in-6.jpg" },
        { title: "Seamos Francos", file: "assets/img/camp-blunt-ad-seamos-francos.jpg" },
        { title: "Seamos Francos (vertical)", file: "assets/img/camp-blunt-ad-seamos-francos-tall.jpg" }
      ] },
    { name: "Lean Is Dangerous", topic: "Lean", year: "2018–2023", image: "assets/img/camp-lean-comic.jpg",
      what: "Campaign on the dangers of lean: side effects include addiction, overdose, seizures, coma, brain damage and death. Local youth organizations added their information to the campaign.",
      infographics: [{ title: "Did You Know? The Dangers of Using Lean (comic)", file: "assets/img/camp-lean-comic.jpg" }],
      gallery: [{ title: "Lean Is Dangerous banner", file: "assets/img/camp-lean-banner.jpg" }] },
    { name: "Underage Drinking Is Not a Minor Problem", topic: "Alcohol", year: "2019–2025", image: "assets/img/camp-underage-comic.jpg",
      downloads: [{ title: "Face the Facts: Underage Drinking in Paterson (2015)", file: "assets/docs/face-the-facts-underage-drinking-2015.pdf" }],
      what: "Campaign on underage drinking in Paterson, with Face the Facts infographics in English and Spanish.",
      infographics: [
        { title: "Underage Drinking Is Not a Minor Problem (comic)", file: "assets/img/camp-underage-comic.jpg" },
        { title: "Face the Facts on Underage Drinking in Paterson", file: "assets/img/camp-underage-facts-en.jpg" },
        { title: "El Consumo de Alcohol por Menores de Edad (Spanish)", file: "assets/img/camp-underage-facts-es.jpg" }
      ],
      gallery: [] },
    { name: "Sticker Shock", topic: "Alcohol", year: "", image: "assets/img/camp-underage-sticker-photo.jpg",
      what: "Youth post Face the Facts warning stickers in local Paterson stores, reminding adults that providing alcohol to anyone under 21 is a crime, with up to a $1,000 fine and 6 months in jail. Part of our alcohol prevention work.",
      infographics: [],
      gallery: [
        { title: "Youth posting stickers in a local store", file: "assets/img/camp-underage-sticker-photo.jpg" },
        { title: "STOP: Providing alcohol to a person under 21 is a crime", file: "assets/img/camp-underage-stop-sign.jpg" },
        { title: "Buying alcohol for a minor has major penalties", file: "assets/img/camp-underage-sticker.jpg" }
      ] },
    { name: "Photovoice", topic: "Tobacco & Alcohol", year: "", image: "assets/img/camp-photovoice-tobacco-1.jpg",
      what: "Youth photovoice projects on tobacco and alcohol in Paterson.",
      infographics: [],
      gallery: [
        { title: "Tobacco photovoice by C.C., 15", file: "assets/img/camp-photovoice-tobacco-1.jpg" },
        { title: "Tobacco photovoice by D.H., 17", file: "assets/img/camp-photovoice-tobacco-2.jpg" },
        { title: "Alcohol photovoice 1", file: "assets/img/camp-photovoice-alcohol-1.jpg" },
        { title: "Alcohol photovoice 2", file: "assets/img/camp-photovoice-alcohol-2.jpg" },
        { title: "Alcohol photovoice 3", file: "assets/img/camp-photovoice-alcohol-3.jpg" }
      ] },
    { name: "Face the Facts", topic: "Tobacco & Vaping", year: "2019–2025", image: "assets/img/camp-tobacco-comic.jpg",
      downloads: [{ title: "Face the Facts on Youth Tobacco Product Use (2017)", file: "assets/docs/face-the-facts-tobacco-2017.pdf" }],
      what: "Infographics on youth tobacco and e-cigarette use in Paterson, NJ, in English and Spanish.",
      infographics: [
        { title: "Face the Facts on Teen Tobacco & Vape Use (comic)", file: "assets/img/camp-tobacco-comic.jpg" },
        { title: "Face the Facts on Youth Tobacco & E-Cigarette Use", file: "assets/img/camp-tobacco-facts-en.jpg" },
        { title: "El Consumo de Tabaco por Menores de Edad (Spanish)", file: "assets/img/camp-tobacco-facts-es.jpg" }
      ],
      gallery: [] },
    { name: "Opioids Are a Prescription for Bigger Problems", topic: "Opioids", year: "2020–2022", image: "assets/img/camp-opioids-comic.jpg",
      what: "Campaign on teen prescription drug misuse in Paterson. It takes only 5 to 7 days to get addicted to a prescription opioid.",
      infographics: [
        { title: "Opioids Are a Prescription for Bigger Problems (comic)", file: "assets/img/camp-opioids-comic.jpg" },
        { title: "Face the Facts on Youth Rx Drug Use in Paterson", file: "assets/img/camp-opioids-facts.jpg" }
      ],
      gallery: [] },
    { name: "Social Media Initiatives", topic: "Mental Health", year: "", image: "assets/img/camp-mental-health-comics.jpg",
      what: "Mental health messages COPE creates and shares on Instagram.",
      infographics: [{ title: "Mental health posts", file: "assets/img/camp-mental-health-comics.jpg" }],
      gallery: [] },
    { name: "Alcohol: Still the Deadliest Drug", topic: "Alcohol", year: "2017", image: "",
      what: "Public awareness campaign on the dangers of alcohol.",
      infographics: [{ title: "Alcohol: Still the Deadliest Drug", file: "assets/img/camp-alcohol-deadliest-drug.jpg" }],
      gallery: [] }
  ],

  /* Ongoing community events. The first one is featured at the top. */
  communityEvents: [
    { name: "Self-Care Fair", when: "Annual since 2023", where: "Paterson high schools", featured: true, image: "",
      history: [
        { year: "2023", place: "John F. Kennedy High School" },
        { year: "2024", place: "John F. Kennedy High School" },
        { year: "2025", place: "Eastside High School & John F. Kennedy High School" },
        { year: "2026", place: "Eastside High School · May 28" }
      ],
      what: "In 2026, 100 representatives from 40 organizations connected with more than 1,600 Eastside students, providing access to hundreds of resources around health, family, youth, education, finance, housing, immigration and community support. Featuring a photo booth, games, arts & crafts, interactive learning and music, with Eastside High School's cosmetology program and Jersey College's nursing program.",
      gallery: [
        { title: "Self-Care Fair resource table", file: "event-self-care-fair-2.jpg" },
        { title: "Students at the Self-Care Fair", file: "event-self-care-fair-3.jpg" },
        { title: "Self-Care Fair table", file: "event-self-care-fair-4.jpg" },
        { title: "Self-Care Fair 2025 save the date", file: "event-self-care-fair-flyer-2025.jpg" }
      ],
      quote: "I loved the vibe, the music, and that the community around us cared enough to show up.", quoteBy: "Eastside High School student" },
    { name: "Paterson Community Cleanup", when: "Most recent: September 27, 2025", where: "Paterson, NJ", image: "",
      what: "Neighbors, students and partners come together to clean up Paterson streets and public spaces." },
    { name: "General Coalition Meeting", join: true, when: "Bi-monthly", where: "Paterson Public Library, 350 Broadway, Paterson, or virtually", image: "",
      what: "The Paterson Coalition for Prevention and Empowerment brings community members, schools and organizations together to plan prevention work." },
    { name: "Mental Health Advisory Council", fit: "contain", join: true, when: "Bi-monthly", where: "Paterson Public Library, 350 Broadway, Paterson, or virtually", image: "",
      what: "A professional network of partners focused on youth and community mental health in Paterson." },
    { name: "Paterson Networking Connection (P.N.C.)", fit: "contain", join: true, when: "Bi-monthly", where: "Paterson Public Library, 350 Broadway, Paterson, or virtually", image: "",
      what: "A bi-monthly meeting where Paterson professionals and organizations come together to share what their organizations are doing, connect, and break down silos across the Paterson community." }
  ],

  /* Policy & city-level change */
  cityInitiatives: [
    { name: "Tobacco 21 in Paterson", image: "",
      what: "COPE's coalition and youth advocated for a Paterson ordinance prohibiting the sale of tobacco, nicotine, nicotine delivery products and smoking devices to anyone under 21, presented to the Municipal Council in 2015." },
    { name: "Alcohol Outlet Density", fit: "contain", image: "",
      what: "Our 2014–2015 policy brief found Paterson had 200 liquor-selling establishments, almost three times the NJ ABC guideline, and mapped a statistically significant link between outlet density and assaultive violence." },
    { name: "Environmental Mapping", fit: "contain", image: "",
      what: "Mapping alcohol and tobacco retailers, risk and protective factors across Paterson neighborhoods to guide prevention." },
    { name: "Public Awareness Campaigns", image: "",
      what: "Citywide campaigns and bilingual infographics on tobacco, marijuana, lean and alcohol, built from local youth data." }
  ],

  /* Partners. type drives the filter. */
  partners: [
    { name: "Montclair State University", type: "University", logo: "" },
    { name: "Straight and Narrow", type: "Community Organization", logo: "" },
    { name: "Paterson Public Schools", type: "School", logo: "" },
    { name: "Eastside High School", type: "School", logo: "" },
    { name: "John F. Kennedy High School", type: "School", logo: "" },
    { name: "School-Based Youth Services Program", type: "School", logo: "" },
    { name: "CBH Care", type: "Health Provider", logo: "" },
    { name: "Hyacinth", type: "Health Provider", logo: "" },
    { name: "Partnership for Maternal & Child Health of Northern New Jersey", type: "Health Provider", logo: "" },
    { name: "Growing in Grace Counseling Group", type: "Health Provider", logo: "" },
    { name: "Eva's Village", type: "Community Organization", logo: "" },
    { name: "CUMAC", type: "Community Organization", logo: "" },
    { name: "New Destiny Family Success Centers", type: "Community Organization", logo: "" },
    { name: "Paterson Prevention Project", type: "Community Organization", logo: "" },
    { name: "BUDS & UMOJA / Sankofa Academy", type: "Community Organization", logo: "" },
    { name: "Oasis – A Haven for Women & Children", type: "Community Organization", logo: "" },
    { name: "Father English Community Center", type: "Community Organization", logo: "" },
    { name: "Silk City Sharks", type: "Community Organization", logo: "" },
    { name: "Turning Point", type: "Health Provider", logo: "" },
    { name: "Aspire", type: "Community Organization", logo: "" },
    { name: "Passaic County One Stop Career Center", type: "Government", logo: "" },
    { name: "St. Joseph's Community Outreach", type: "Health Provider", logo: "" },
    { name: "Planned Parenthood", type: "Health Provider", logo: "" },
    { name: "NJ4S Passaic County Hub", type: "Community Organization", logo: "" },
    { name: "Paterson Healing Collective", type: "Community Organization", logo: "" },
    { name: "Jersey College", type: "University", logo: "" },
    { name: "PCCC Wellness Center", type: "University", logo: "" },
    { name: "Young Men's Leadership Academy", type: "School", logo: "" },
    { name: "New Jersey Youth Corps", type: "Community Organization", logo: "" },
    { name: "WIOA Youth Rise – Passaic", type: "Community Organization", logo: "" },
    { name: "Paterson Youth Services Bureau", type: "Government", logo: "" },
    { name: "Teens2BHeard", type: "Community Organization", logo: "" },
    { name: "Safe Counsel", type: "Business", logo: "" },
    { name: "YCS at Eastside High School", type: "School", logo: "" },
    { name: "Great Falls Youth Center", type: "Community Organization", logo: "" },
    { name: "Paterson Counseling Center", type: "Health Provider", logo: "" },
    { name: "The Center for Prevention & Counseling", type: "Community Organization", logo: "" },
    { name: "Lighthouse Pregnancy Resource Center", type: "Community Organization", logo: "" },
    { name: "New Jersey Clean Communities", type: "Government", logo: "" },
    { name: "Humble Beginnings, Inc.", type: "Community Organization", logo: "" },
    { name: "Muture Sisters & Brothers", type: "Community Organization", logo: "" },
    { name: "Ruby's Vision", type: "Community Organization", logo: "" },
    { name: "Full Service Community Schools", type: "School", logo: "" },
    { name: "Tobacco-Free for a Healthy New Jersey", type: "Community Organization", logo: "" },
    { name: "Paterson Municipal Alliance Prevention Program (MAPP)", type: "Government", logo: "" },
    { name: "Paterson Police Community Affairs", type: "Government", logo: "" }
  ],

  /* How we work (Our Approach page) */
  spf: [
    { step: "Assessment", q: "What is the problem?", what: "Identify local prevention needs based on data." },
    { step: "Capacity", q: "What do we have to work with?", what: "Build local resources and readiness to address prevention needs." },
    { step: "Planning", q: "What should we do, and how?", what: "Find out what works to address prevention needs and how to do it." },
    { step: "Implementation", q: "How do we put the plan into action?", what: "Deliver evidence-based programs and practices as intended." },
    { step: "Evaluation", q: "Is the plan succeeding?", what: "Examine the process and outcomes of programs and practices." }
  ],
  pace: [
    { letter: "P", word: "Presence" }, { letter: "A", word: "Awareness" },
    { letter: "C", word: "Consistency" }, { letter: "E", word: "Empathy" }
  ],
  dataMethods: ["Pre/post surveys", "SBIRT", "Focus groups", "Feedback forms", "Environmental scans", "Youth Risk Behavior Survey"],

  /* Research & publications. type: Journal article, Policy brief, Infographic */
  researchAreas: [
    { name: "Youth empowerment", what: "Measuring sociopolitical control, sense of community and civic participation among youth of color." },
    { name: "Sexual health & HIV", what: "Sexual risk, HIV prevention and sexual health education for Black, Latinx and foster care youth." },
    { name: "Substance use", what: "Local youth substance use data, alcohol outlet density and policy research in Paterson." }
  ],
  publications: [
    { type: "Journal article", year: "2020", date: "Sep 19, 2020", title: "Ethnic Identity, Empowerment, Social Support and Sexual Risk Behaviors Among Black Adolescent Girls: Examining Drug Use as a Mediator",
      authors: "Ijeoma Opara, Elizabeth I. Rivera Rodas, Pauline Garcia-Reid, Robert J. Reid", venue: "", topic: "Sexual health", pdf: "", link: "https://pubmed.ncbi.nlm.nih.gov/35462639/" },
    { type: "Journal article", year: "2018", date: "Aug 5, 2018", title: "Understanding the Influence of Sexual Risk Taking, Ethnic Identity, and Family and Peer Support on School Importance Among Hispanic Adolescents",
      authors: "Pauline Garcia-Reid, David T. Lardier Jr., Robert J. Reid, Ijeoma Opara", venue: "", topic: "Sexual health", pdf: "", link: "https://pubmed.ncbi.nlm.nih.gov/32742004/" },
    { type: "Journal article", year: "2020", date: "Mar 23, 2020", title: "The Mediating Role of Ethnic Identity and Social Justice Orientation Between Community Civic Participation, Psychological Sense of Community, and Dimensions of Psychological Empowerment Among Adolescents of Color",
      authors: "David T. Lardier Jr., Ijeoma Opara, Pauline Garcia-Reid, Robert J. Reid", venue: "", topic: "Youth empowerment", pdf: "", link: "https://pubmed.ncbi.nlm.nih.gov/34483379/" },
    { type: "Journal article", year: "2021", date: "Jan 4, 2021", title: "Psychological Sense of Community, Community Civic Participation, and Ethnic Identity on Social Justice Orientation and Psychological Empowerment Between LGBQ and Non-LGBQ Youth of Color",
      authors: "David T. Lardier, Ijeoma Opara, Mary Kathryn Brammer, Stacy A. Pinto, Pauline Garcia-Reid, Robert J. Reid", venue: "", topic: "Youth empowerment", pdf: "", link: "https://pubmed.ncbi.nlm.nih.gov/36855462/" },
    { type: "Journal article", year: "2022", date: "Sep 1, 2022", title: "What Happens When We Ask? A Phenomenological Focus Group on HIV Prevention and Sexual Health Education Among Emancipated Foster Care Youth",
      authors: "Ijeoma Opara, Ashley Lizarraga, David T. Lardier, Andriana Herrera, Pauline Garcia-Reid, Robert J. Reid", venue: "Children and Youth Services Review, 140:106583", topic: "HIV prevention", pdf: "", doi: "https://doi.org/10.1016/j.childyouth.2022.106583", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9337728/" },
    { type: "Journal article", year: "2021", date: "May 3, 2021", title: "The Brief Sense of Community Scale: Testing Dimensionality and Measurement Invariance by Gender Among Hispanic/Latinx Youth",
      authors: "David T. Lardier Jr., Ijeoma Opara, Irene Cantu, Pauline Garcia-Reid, Robert J. Reid", venue: "", topic: "Youth empowerment", pdf: "", link: "https://pubmed.ncbi.nlm.nih.gov/33938003/" },
    { type: "Journal article", year: "2021", date: "Jul 8, 2021", title: "Measuring Youth Empowerment: An Item Response Theory Analysis of the Sociopolitical Control Scale for Youth",
      authors: "Kristen Gilmore Powell, N. Andrew Peterson, Peter C. Treitler, David T. Lardier Jr., Mariam Rashid, Robert J. Reid", venue: "", topic: "Youth empowerment", pdf: "", link: "https://pubmed.ncbi.nlm.nih.gov/34237162/" },
    { type: "Journal article", year: "2020", title: "“You Gotta Be Strong Minded”: Substances and Individualism Among Urban Minority Youth",
      authors: "David T. Lardier, Autumn Bermea, Tiffany L. Brown, Pauline Garcia-Reid, Robert J. Reid", venue: "Urban Social Work, 4(2)", topic: "Substance use", pdf: "", link: "https://www.researchgate.net/publication/341475489_You_Gotta_Be_Strong_Minded_Substances_Use_and_Individualism_Among_Urban_Minority_Youth", doi: "https://doi.org/10.1891/USW-D-19-00015" },
    { type: "Policy brief", year: "2024", title: "Trends and Impact of Youth Marijuana, Semi-Synthetic Cannabinoids, and Flavored Vapes in Paterson, New Jersey",
      authors: "The COPE Initiative", venue: "Supported by the Partnerships for Success (PFS) and Drug-Free Communities (DFC) grants", topic: "Substance use", pdf: "assets/docs/marijuana-policy-brief-paterson-2024.pdf", link: "" },
    { type: "Policy brief", year: "2015", title: "Alcohol Policy Brief: Paterson, NJ (2014–2015)",
      authors: "Paterson Coalition Against Substance Abuse", venue: "Drug-Free Communities (DFC) Initiative", topic: "Substance use", pdf: "assets/docs/alcohol-policy-brief-paterson-2015.pdf", link: "" },
    { type: "Infographic", year: "2017", title: "Face the Facts on Youth Tobacco Product Use in Paterson, NJ",
      authors: "Paterson Coalition Against Substance Abuse (P-CASA)", venue: "Survey of 410 Paterson youth ages 12–18, 2017 school year", topic: "Substance use", pdf: "assets/docs/face-the-facts-tobacco-2017.pdf", link: "" },
    { type: "Infographic", year: "2017", title: "Let's Be Blunt: Face the Facts on Youth Marijuana Use in Paterson, NJ",
      authors: "Paterson Coalition Against Substance Abuse (P-CASA)", venue: "Survey of 1,115 Paterson youth ages 12–18, 2013–2017", topic: "Substance use", pdf: "assets/docs/face-the-facts-marijuana-2017.pdf", link: "" },
    { type: "Infographic", year: "2015", title: "Face the Facts: Underage Drinking in Paterson, NJ",
      authors: "Paterson Coalition Against Substance Abuse (P-CASA)", venue: "Survey of 737 Paterson youth ages 12–18, 2014–2015 school year", topic: "Substance use", pdf: "assets/docs/face-the-facts-underage-drinking-2015.pdf", link: "" },
    { type: "Infographic", year: "[Year]", title: "Mental Health Outcomes: Depression & Suicide",
      authors: "COPE", venue: "Infographic", topic: "Mental health", pdf: "", link: "" }
  ],

  /* News: announcements + newsletters */
  announcements: [
    { date: "2026-10-23", title: "Local Legends nominations are open", tag: "Local Legends",
      body: "Know a business, a neighbor, or a leader who makes Paterson better? Nominate them for COPE's new Local Legends recognition." },
    { date: "2026-05-28", title: "2026 Self-Care Fair recap", tag: "Events",
      body: "On May 28, 2026, more than 1,600 Eastside High School students connected with 100 representatives from 40 organizations at this year's Self-Care Fair at Eastside High School." },
    { date: "2026", title: "2026 workshop menu now available", tag: "Workshops",
      body: "20 free workshops in English and Spanish on substance use prevention, mental health and sexual health. Contact us to schedule." }
  ],
  newsletters: [
    { title: "[Newsletter — Season Year]", date: "[Month Year]", pdf: "", cover: "", sample: true },
    { title: "[Newsletter — Season Year]", date: "[Month Year]", pdf: "", cover: "", sample: true },
    { title: "[Newsletter — Season Year]", date: "[Month Year]", pdf: "", cover: "", sample: true }
  ],

  /* Local Legends */
  legendPillars: [
    { name: "Businesses", what: "Local businesses that hire locally, give back, and keep the neighborhood strong." },
    { name: "Individuals", what: "Neighbors, mentors, coaches and volunteers who show up for the community every day." },
    { name: "Community Vote", what: "Nominees chosen by the people. The community votes on who gets recognized." }
  ],
  legends: [
    { name: "American Fried Chicken", pillar: "Businesses", year: "", image: "assets/img/legend-american-fried-chicken.jpg",
      why: "For donating food to many of COPE's meetings and youth groups. 253 Broadway, Paterson." },
    { name: "Mr. Raheem Smallwood", pillar: "Individuals", year: "", image: "assets/img/legend-raheem-smallwood.jpg",
      why: "An icon in the Paterson community. Mr. Smallwood has run multiple youth groups, worked with many organizations at once, and created his own groups, including Sankofa Academy and BUDS & UMOJA, to serve Paterson youth. Always involved in the community, he has gone above and beyond to make Paterson a special place. He received the Montclair State University Community Trailblazer of the Year Award on December 12, 2023, in recognition of exceptional leadership in driving positive change within the community." }
  ],

  /* Team */
  team: [
    { name: "Dr. Robert Reid", role: "Principal Investigator", image: "" },
    { name: "Dr. Pauline Garcia-Reid", role: "Principal Investigator", image: "" },
    { name: "Andriana Herrera", role: "Program Manager", image: "" },
    { name: "David Lardier", role: "Program Evaluator", image: "" },
    { name: "Sama Dwaidari", role: "Educational Program Strategist", image: "" },
    { name: "John Soh", role: "Prevention Specialist & Lead Facilitator", image: "" },
    { name: "Lucia Mendoza", role: "Community Outreach Specialist & Intern Coordinator", image: "" }
  ],

  /* Resources. Hotline numbers were checked Oct 2026 — re-check yearly. */
  crisisLines: [
    { label: "Suicide & Crisis Lifeline", number: "988", note: "Call, text or chat, 24/7" },
    { label: "ReachNJ (addiction help)", number: "1-844-732-2465", note: "24/7, any insurance or none" },
    { label: "Emergency", number: "911", note: "Immediate danger" }
  ],
  /* Resources. Each item can have: address, hours, phones (list of numbers),
     text (text-message line), email, services (list), notes (list), url, partner.
     Hotline numbers were checked Oct 2026 — re-check yearly. */
  resources: [
    { id: "hiv", title: "HIV, PrEP & Hepatitis Testing", intro: "Testing, PrEP, hepatitis vaccines and free condoms in Paterson.", items: [
      { name: "Paterson Community Health Centers",
        address: "32 Clinton St. & 227 Broadway, Paterson", hours: "Mon–Wed & Fri 9am–5pm · Thu 9am–8pm",
        phones: ["973-790-6594", "973-278-2600"],
        services: ["HIV testing ($16–$32)", "STI testing", "Hepatitis B & C testing", "Hepatitis A & B vaccines", "HPV vaccine", "Treatment & counseling"],
        notes: ["No appointment needed", "Ages 13 and up", "Spanish available", "ID required for results"] },
      { name: "Hyacinth", partner: true,
        address: "100 Hamilton Plaza, 14th Floor, Suite 1401, Paterson", hours: "Mon–Wed 10am–4pm · Thu 10am–7pm",
        phones: ["800-433-0254"],
        services: ["Free rapid HIV testing", "PrEP services", "HIV counseling", "Substance use counseling", "Peer support groups", "Free condoms"],
        notes: ["No ID required", "Resources in Spanish"] },
      { name: "Planned Parenthood – Paterson Center", partner: true, address: "680 Broadway, Paterson", phones: ["973-345-3883"], url: "https://www.plannedparenthood.org/health-center/new-jersey/paterson/07505/paterson-center-2557-90920",
        services: ["Birth control & emergency contraception", "STD testing & treatment", "HIV services", "Pregnancy testing & planning", "Vaccines & wellness care"], notes: ["In person or telehealth"] },
      { name: "Paterson Division of Health",
        address: "176 Broadway, Paterson", hours: "Mon–Fri 9am–1pm",
        phones: ["973-321-1277"],
        services: ["Free rapid HIV testing", "PrEP services", "HCV testing", "STI testing", "Hepatitis A & B vaccine", "Treatment & counseling"],
        notes: ["Ask for Yolanda Figueroa", "Ages 13 and up", "Cost depends on income", "Spanish available", "ID may be required"] }
    ]},
    { id: "youth", title: "Youth", intro: "For teens and young adults who need someone to talk to, help quitting, or answers.", items: [
      { name: "Great Falls Youth Center", partner: true, address: "52 Front St, Paterson", phones: ["862-203-8803"], url: "https://www.njcdc.org/",
        services: ["Free after-school youth center", "Homework help, games & tournaments", "Culinary, music & recording programs"], notes: ["For Paterson teens from any high school", "Run by NJ Community Development Corporation"] },
      { name: "NJ4S Passaic County Hub", partner: true, phones: ["973-413-1600"], email: "NJ4S@njcdc.org", url: "https://njcdc.org/youth-development-1/nj4s-passaic-county-hub",
        services: ["Prevention & intervention services for students", "Workshops, presentations & assemblies", "Individual & group sessions"], notes: ["Grades K–12"] },
      { name: "Paterson Youth Services Bureau", partner: true, address: "60 Temple St, Paterson", phones: ["973-321-1264"], url: "https://patersonnj.gov/department/division.php?fDD=9-33",
        services: ["Support for youth at risk of, or involved with, the juvenile justice system", "Evening Reporting Program", "Case management for youth & families"] },
      { name: "2NDFLOOR Youth Helpline", phones: ["888-222-2228"], url: "http://www.2ndfloor.org/",
        services: ["Helpline for New Jersey youth and young adults"] },
      { name: "This is Quitting (Truth Initiative)", text: { code: "DITCHVAPE", to: "88709" }, url: "https://truthinitiative.org/",
        services: ["Free quit-vaping program by text", "Built for teens", "No app needed"] },
      { name: "988 Suicide & Crisis Lifeline", phones: ["988"], text: { code: "", to: "988" }, url: "https://988lifeline.org/",
        services: ["Call, text or chat 24/7", "For any kind of crisis"] }
    ]},
    { id: "substance-use", title: "Substance Use & Quitting", intro: "Treatment, recovery support and help quitting nicotine.", items: [
      { name: "ReachNJ", phones: ["1-844-732-2465"], hours: "24/7", url: "https://nj.gov/humanservices/reachnj/",
        services: ["Addiction help line", "Connects callers to treatment"], notes: ["Any insurance or no insurance"] },
      { name: "Straight & Narrow", partner: true, address: "508 Straight St, Paterson", phones: ["973-345-6000"], url: "https://ccpaterson-org.sites.ecatholic.com/SN",
        services: ["Drug & alcohol rehabilitation", "Outpatient treatment", "Detox unit"], notes: ["Detox walk-ins that meet medical criteria: Mon–Fri 9am–1pm", "Part of Catholic Charities"] },
      { name: "Turning Point", partner: true, address: "680 Broadway, Suite 104, Paterson", phones: ["973-239-9400"], url: "https://www.turningpointnj.org/",
        services: ["Drug & alcohol addiction treatment", "Care for co-occurring disorders"] },
      { name: "Paterson Counseling Center", partner: true, address: "319-321 Main St, Paterson", phones: ["973-523-8316"], url: "http://www.patersoncounseling.org/",
        services: ["Substance use counseling & treatment", "HIV counseling", "Methadone maintenance", "DUI program"] },
      { name: "Hackensack Meridian Health Quit Center", phones: ["551-996-1632"], email: "quitcenter@hmhn.org",
        services: ["Nicotine & tobacco cessation", "Individual quit plans", "Clinical support"], notes: ["Ages 16 and up", "Free with or without insurance"] },
      { name: "Paterson Municipal Alliance Prevention Program (MAPP)", partner: true, phones: ["973-321-1242"], url: "https://www.patersonnj.gov/department/division.php?fDD=9-143",
        services: ["Alcohol & substance use prevention education"], notes: ["City of Paterson, with schools, law enforcement, faith groups, residents and businesses"] },
      { name: "Tobacco Free for a Healthy New Jersey", partner: true, phones: ["973-383-4787"], url: "https://www.tobaccofreenj.com/",
        services: ["Youth Tobacco Action Groups (ages 13–18)", "Smoke-free housing & workplace support", "Retailer education on legal sales age"] },
      { name: "QuitStart & QuitGuide", url: "https://smokefree.gov/",
        services: ["Free quit-smoking apps", "QuitStart is built for teens"], notes: ["From Smokefree.gov / National Cancer Institute"] }
    ]},
    { id: "parents", title: "Parents & Caregivers", intro: "Family support, parenting help and services close to home.", items: [
      { name: "New Destiny Family Success Center", partner: true, address: "79 Ellison St, Paterson", phones: ["973-278-0220"], email: "info@newdestinyfsc.org", url: "https://newdestinyfsc.org/",
        services: ["Parent education", "Parent-child activities", "Life skills", "Housing services", "Employment & training", "Youth development", "Home visiting"] },
      { name: "Partnership for Maternal & Child Health of Northern NJ", partner: true, phones: ["973-942-3630"], url: "https://pmch.org/",
        services: ["Parenting & caregiving", "Pregnancy & teen pregnancy services", "Case management", "Substance use referrals"], notes: ["Free", "Phone line for Bergen & Passaic Counties", "Staff speak Spanish, Arabic and Creole"] }
    ]},
    { id: "mental-health", title: "Mental Health & Self-Care", intro: "Support for stress, anxiety, grief and everyday wellbeing.", items: [
      { name: "988 Suicide & Crisis Lifeline", phones: ["988"], text: { code: "", to: "988" }, url: "https://988lifeline.org/",
        services: ["24/7 crisis line by call, text or chat", "Connects you to local services"] },
      { name: "PCCC Wellness Center", partner: true, address: "Memorial Hall, Room M237, Passaic County Community College, Paterson", email: "wellness@pccc.edu", url: "https://pccc.edu/wellness/",
        services: ["Short-term counseling & mental health referrals", "Free teletherapy (Uwill)", "Panther Pantry food pantry", "Help with benefits, housing & utilities"], notes: ["For PCCC students"] },
      { name: "CBH Care – Wellness & Support Center", partner: true, address: "680 Broadway, Suite 206, Paterson", phones: ["973-221-8100"], url: "https://www.cbhcare.org/",
        services: ["Outpatient behavioral health treatment"], notes: ["For adults"] }
    ]},
    { id: "educators", title: "Educators & Professionals", intro: "Free and low-cost tools from COPE's professional development sessions.", items: [
      { name: "FLARE by NAMI", url: "https://flare.nami.org/", services: ["Trauma-informed mental health literacy curriculum", "23 ready-to-teach lessons"], notes: ["Free", "No clinical background needed"] },
      { name: "Headspace for Educators", url: "https://www.headspace.com/educators", services: ["Meditation, sleep & stress tools"], notes: ["Free for K-12 teachers and staff with a school email"] },
      { name: "Calm for Schools", url: "https://www.calm.com/schools/resources", services: ["Classroom mindfulness practices"], notes: ["Free for verified K-12 educators"] },
      { name: "Compassion Resilience Toolkit", url: "https://eliminatestigma.org/compassion-resilience-toolkit/", services: ["Compassion fatigue support for helping professionals", "Team discussion guides"], notes: ["Free"] },
      { name: "MagicSchool AI", url: "https://www.magicschool.ai/", services: ["Lesson planning & differentiation tools"], notes: ["Free version", "$12.99/month for full access"] },
      { name: "Wayground (formerly Quizizz)", url: "https://wayground.com/", services: ["Gamified quizzes with live leaderboards"], notes: ["Free starter plan"] },
      { name: "JeopardyLabs", url: "https://jeopardylabs.com/", services: ["Jeopardy-style review games"], notes: ["Free", "No login needed"] },
      { name: "Gimkit", url: "https://www.gimkit.com/", services: ["Review games with an in-game economy"], notes: ["Free basic plan"] },
      { name: "Mentimeter", url: "https://www.mentimeter.com/", services: ["Live polls & word clouds in presentations"], notes: ["Free plan available"] }
    ]},
    { id: "basic-needs", title: "Food, Housing, Jobs & Basic Needs", intro: "Help with food, shelter, work and other essentials.", items: [
      { name: "Father English Community Center", partner: true, address: "35 Getty Ave, Paterson", phones: ["973-279-7100"],
        services: ["Emergency food pantry"], notes: ["Call for hours"] },
      { name: "Passaic County One Stop Career Center", partner: true, address: "25 Howe Ave, Passaic", phones: ["973-742-9226"], url: "https://nj.gov/labor/career-services/",
        services: ["Job placement", "Career services", "Veterans services"], notes: ["Call to confirm hours and services"] },
      { name: "CUMAC", partner: true, address: "223 Ellison St, Paterson", phones: ["973-742-5518"],
        services: ["Food pantry"], notes: ["Call ahead for hours"] },
      { name: "Oasis – A Haven for Women & Children", partner: true, address: "59 Mill St, Paterson", phones: ["973-881-8307"], url: "https://www.oasisnj.org/",
        services: ["Food & clothing for women and children", "Education & job skills", "Support toward economic independence"] },
      { name: "Eva's Village", partner: true, address: "393 Main St, Paterson", phones: ["973-523-6220"], url: "https://www.evasvillage.org/",
        services: ["Emergency shelter", "Food", "Addiction recovery programs", "Free primary care clinic"] }
    ]}
  ]
};

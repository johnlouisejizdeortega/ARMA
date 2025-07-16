// services.ts - Complete ARMA Legal Services Data
import React from "react"

// Type Definitions
export interface Service {
  title: string
  description: string
  sectionTitle: string
  icon: React.ReactNode
  id: string
  backgroundImage?: string
  titleImage?: string
  placeholderImage?: string
  heroImage?: string
  isCommercialLitigation?: boolean
  isInjunction?: boolean
  isFraudDefense?: boolean
  isAssetRecovery?: boolean
  isFraudProsecution?: boolean
  isInvestigations?: boolean
  isInternational?: boolean
  isHybridised?: boolean
  isCrisisManagement?: boolean
  content?: ServiceContent
}

export interface ServiceContent {
  mainDescription: string
  quote?: string
  sections?: ServiceSection[]
  capabilities?: string[]
  specializations?: string[]
  keyPoints?: string[]
  procedures?: string[]
  industries?: string[]
  disputes?: string[]
  courts?: string[]
  tools?: string[]
  approaches?: string[]
  globalReach?: {
    coverage: string
    expertise: string
  }
  conclusion?: string
  cardContent?: ServiceCard[]
}

export interface ServiceSection {
  title: string
  content: string
  items?: string[]
  subsections?: {
    title: string
    description: string
  }[]
}

export interface ServiceCard {
  icon: string
  title: string
  description: string
}

// Icon Components
const BriefcaseIcon = () => React.createElement('svg', {
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, React.createElement('path', {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2"
}))

const ShieldIcon = () => React.createElement('svg', {
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, React.createElement('path', {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
}))

const AlertTriangleIcon = () => React.createElement('svg', {
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, React.createElement('path', {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
}))

const SearchIcon = () => React.createElement('svg', {
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, React.createElement('path', {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
}))

const GlobeIcon = () => React.createElement('svg', {
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, React.createElement('path', {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
}))

const LayersIcon = () => React.createElement('svg', {
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, React.createElement('path', {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M7 21l3-3 3 3 3-3 3 3V9l-3-3-3 3-3-3-3 3v12z"
}))

const AlertOctagonIcon = () => React.createElement('svg', {
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, React.createElement('path', {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}))

// Complete Services Data
export const services: Record<string, Service> = {
  commercial: {
    id: "commercial",
    title: "Commercial Litigation",
    description: "Expert legal representation for businesses facing complex commercial disputes, contract breaches, and corporate conflicts.",
    sectionTitle: "ARMA Commercial Litigation",
    backgroundImage: "/images/commercial-litigation-bg.png",
    titleImage: "/images/commercial-litigation-icon.png",
    placeholderImage: "/png/gaetan-marceau-caron-BEKde68fePU-unsplash.jpg",
    heroImage: "/png/gaetan-marceau-caron-BEKde68fePU-unsplash.jpg",
    icon: React.createElement(BriefcaseIcon),
    isCommercialLitigation: true,
    content: {
      mainDescription: "ARMA is a specialist commercial litigation practice dedicated to resolving high-stakes disputes with precision, strategy, and tenacity. We represent UHNWIs, multinational corporations, entrepreneurs, high-profile individuals, and executives, consistently delivering outcomes that protect reputational, financial, and commercial interests.",
      keyPoints: [
        "Our reputation is built on strategic thinking, technical excellence, and an unrelenting focus on results that align with our clients' business objectives.",
        "Whether bringing or defending a claim, our lawyers have the insight and firepower to support you at every stage of the dispute process.",
        "We are known for being aggressive—but only with strategy. Our team expertly leverages court procedures and interim remedies, including freezing injunctions, disclosure orders, and security for costs applications, to strengthen our clients' positions.",
        "At the same time, we are skilled negotiators, securing favorable settlements through mediation and strategic resolution—where it makes commercial sense to do so."
      ],
      industries: [
        "Finance",
        "Technology",
        "Construction",
        "Energy",
        "Professional services",
        "Real estate"
      ],
      disputes: [
        "Contract breaches and termination",
        "Shareholder and director conflicts",
        "Commercial fraud and misrepresentation",
        "Professional negligence claims",
        "Partnership and joint venture disputes",
        "Supply chain and procurement issues",
        "Restrictive covenants and business protection",
        "Debt recovery and enforcement"
      ],
      courts: [
        "The High Court (Chancery and KBD)",
        "The Court of Appeal",
        "The Commercial Court",
        "IPEC",
        "The Investigatory Powers Tribunal",
        "The London Court of International Arbitration (LCIA)",
        "International arbitral tribunals worldwide"
      ],
      conclusion: "At ARMA, we combine legal firepower with strategic acumen—delivering exceptional results when it matters most."
    }
  },

  injunction: {
    id: "injunction",
    title: "Injunction",
    description: "Urgent legal intervention to prevent actions that could cause irreparable harm to your business or personal interests.",
    sectionTitle: "ARMA Injunction",
    backgroundImage: "/images/injunction-bg.png",
    placeholderImage: "/png/ryuno-hgh7ycL5zDw-unsplash (1).jpg",
    heroImage: "/png/ryuno-hgh7ycL5zDw-unsplash (1).jpg",
    icon: React.createElement(AlertTriangleIcon),
    isInjunction: true,
    content: {
      mainDescription: "In a personal or commercial crisis, you need to think fast and act even faster. We specialize in prosecuting strategic applications for injunctive relief, ensuring immediate legal intervention when it matters most.",
      quote: "Injunctions are often called the 'nuclear weapons of law'—a powerful legal remedy that can prevent harm or mitigate damage before it occurs.",
      keyPoints: [
        "These applications can get you into court in days, sometimes hours, making swift and precise action critical.",
        "Securing an injunction requires intensive front-loaded work and evidence building. What most firms take six months to do, we undertake in six days. In many cases, the success of an injunction leads to an early settlement—resolving disputes years before trial.",
        "Our experience spans both domestic and international cases, often involving multi-jurisdictional elements requiring sophisticated legal coordination.",
        "With deep expertise in crisis litigation and strategic legal responses, we work around the clock to prepare compelling evidence and persuasive arguments—securing injunctive relief in urgent and sensitive scenarios."
      ],
      capabilities: [
        "Freeze assets (nationally and worldwide)",
        "Preserve evidence",
        "Restrain disclosure of confidential information",
        "Compel disclosure of internal financial documents",
        "Prohibit and cease ongoing criminal acts (e.g., corporate identity theft, corporate espionage)",
        "Enforce contract obligations"
      ],
      conclusion: "We act for UHNWIs, multinational corporations, entrepreneurs, high-profile individuals, and executives, consistently achieving outcomes that protect reputational, financial, and commercial interests."
    }
  },

  fraudDefense: {
    id: "fraudDefense",
    title: "Fraud Defense",
    description: "Strategic legal defense for individuals and corporations facing allegations of fraudulent activities or misrepresentation.",
    sectionTitle: "ARMA Fraud Defense",
    placeholderImage: "/png/pexels-tima-miroshnichenko-6538954.JPG",
    heroImage: "/png/pexels-tima-miroshnichenko-6538954.JPG",
    icon: React.createElement(ShieldIcon),
    isFraudDefense: true,
    content: {
      mainDescription: "With our specialist expertise in prosecuting fraud cases, we are equally trusted to defend corporations and individuals against allegations of commercial deceit and dishonesty—whether in a commercial or insolvency context.",
      keyPoints: [
        "We are unrivaled in deploying strategic countermeasures that protect our clients' interests while safeguarding their reputations. Our team is highly skilled and fearless in utilizing early strike-out applications to dismantle unfounded claims before they gain traction."
      ],
      cardContent: [
        {
          icon: "Shield",
          title: "Strategic Defense",
          description: "Proactive legal strategies to protect your interests and reputation against fraud allegations"
        },
        {
          icon: "AlertTriangle",
          title: "Early Intervention",
          description: "Swift action to challenge and dismantle unfounded claims before they gain momentum"
        }
      ]
    }
  },

  assetRecovery: {
    id: "assetRecovery",
    title: "Asset Recovery",
    description: "Specialized legal solutions to trace, freeze, and recover misappropriated assets across jurisdictions.",
    sectionTitle: "ARMA Asset Recovery",
    placeholderImage: "/png/pexels-adiprayogo-liemena-55233277-13478691.jpg",
    heroImage: "/png/pexels-adiprayogo-liemena-55233277-13478691.jpg",
    icon: React.createElement(SearchIcon),
    isAssetRecovery: true,
    content: {
      mainDescription: "We specialize in tracing, freezing, and repatriating assets—particularly those that have been hidden, transferred offshore, or otherwise concealed. This requires a unique blend of legal expertise, investigative capability, and relentless determination.",
      keyPoints: [
        "Our team collaborates with forensic accountants, international investigators, and global networks to locate and recover funds, property, and other high-value assets lost through fraud, breach of trust, or unlawful conduct.",
        "From high-value commercial disputes to complex fraud cases, we tailor recovery strategies to suit each situation. We are particularly experienced in:"
      ],
      tools: [
        "Worldwide freezing orders",
        "Norwich Pharmacal orders",
        "Disclosure applications"
      ]
    }
  },

  fraudProsecution: {
    id: "fraudProsecution",
    title: "Fraud Prosecution",
    description: "We are recognised leaders and specialists in prosecuting claim of dishonesty and fraud against third party defendants.",
    sectionTitle: "ARMA Fraud Prosecution",
    placeholderImage: "/png/sasun-bughdaryan-oA1aVtEcWaE-unsplash.jpg",
    heroImage: "/png/sasun-bughdaryan-oA1aVtEcWaE-unsplash.jpg",
    icon: React.createElement(AlertOctagonIcon),
    isFraudProsecution: true,
    content: {
      mainDescription: `Our team is trusted by major insurers, self-insured businesses, local authorities, and corporates to identify, challenge, and defeat organised fraud rings, involving multiple actors across multiple jurisdictions. Our lawyers are skilled at deploying the full range of legal tools to challenge claims, including:\n- Strategic use of surveillance and evidence building\n- Immediate interim applications for injunctive relief\n- Early summary judgment for fraud applications\n- Fundamental dishonesty findings under CPR 44.16 and s.57 of the Criminal Justice and Courts Act\n- Contempt of court proceedings and co-counselling on private criminal prosecutions\nWe work closely with claims handlers, investigators, and expert witnesses to build robust, evidence-led defences.`
    }
  },

  investigations: {
    id: "investigations",
    title: "Private & International Investigations",
    description: "We are specialists in Private and International Investigations, a sector where discretion, legal precision, and strategic insight are paramount.",
    sectionTitle: "ARMA Private & International Investigations",
    placeholderImage: "/png/pexels-aaditya-arora-188236-592753.jpg",
    heroImage: "/png/pexels-aaditya-arora-188236-592753.jpg",
    icon: React.createElement(SearchIcon),
    isInvestigations: true,
    content: {
      mainDescription: `We are instructed to trace assets, uncover fraud, conduct due diligence into company and employee affairs, or deploy pre-emptive solutions in the context of possible high-stakes litigation. In an increasingly globalised world, risk does not stop at national borders—and neither do we. Our team is trusted by corporations, high-net-worth individuals, insurers, law enforcement bodies, and other legal professionals to handle complex and sensitive matters with professionalism and care. We are specialists in working with private investigators, trusted intelligence operatives, forensic accountants, cyber experts, local assets and PMCs to obtain actionable intelligence for the purposes of deciding what to do next. From uncovering misconduct within a company to identifying hidden assets in offshore jurisdictions, our team has the experience and resources to go deeper. We act quickly and decisively, often in time-critical situations where information needs to be obtained fast.`,
      capabilities: [
        "Asset tracing and recovery (domestic and offshore)",
        "Corporate and individual background checks",
        "Fraud and corruption investigations",
        "Internal investigations and whistleblower response",
        "Cyber and digital forensic analysis",
        "Cross-border due diligence for mergers, acquisitions, and investments",
        "Litigation support and evidence gathering",
        "Surveillance and monitoring (in accordance with local laws)"
      ],
      globalReach: {
        coverage: "We have extensive experience operating across jurisdictions, including in high-risk or opaque environments. and discreetly almost anywhere in the world. From financial centres in Europe and the Middle East to offshore jurisdictions and emerging markets, we provide seamless investigative support—regardless of geography.",
        expertise: "We’re particularly adept at navigating complex cross-border investigations where cultural, linguistic, and regulatory factors play a key role. We understand the nuances of international evidence gathering and are experienced in working with foreign courts, local enforcement bodies, and global financial institutions."
      }
    }
  },

  international: {
    id: "international",
    title: "International Pursuit and Enforcement",
    description: "With global investigative expertise, we equally handle pursuing defendants and third parties internationally.",
    sectionTitle: "ARMA International Pursuit and Enforcement",
    placeholderImage: "/png/pexels-sulimansallehi-1586663.jpg",
    heroImage: "/png/pexels-sulimansallehi-1586663.jpg",
    icon: React.createElement(GlobeIcon),
    isInternational: true,
    content: {
      mainDescription: "We are instructed in cases where significant sums are at risk, assets are hidden offshore, or enforcement must take place across multiple jurisdictions. Whether you're seeking to enforce a judgment, recover misappropriated funds, or trace assets moved across borders, we combine sharp legal insight with tactical execution.",
      keyPoints: [
        "Our team is regularly instructed by corporates, financial institutions, litigation funders, trustees, and high-net-worth individuals to pursue assets and enforce awards with speed, discretion, and tenacity.",
        "Each matter demands a tailored, multi-jurisdictional strategy—one that aligns with the nature of the claim, the location of assets, and the applicable laws."
      ],
      procedures: [
        "Enforcement of domestic and foreign judgments and arbitral awards",
        "Worldwide and domestic freezing injunctions",
        "Cross-border asset tracing and recovery",
        "Interim relief in aid of foreign proceedings",
        "Third-party disclosure (e.g. Norwich Pharmacal and Bankers Trust orders)",
        "Recognition of foreign judgments under the Hague and New York Conventions",
        "Working with forensic accountants and global investigators"
      ],
      conclusion: "We coordinate with a trusted network of foreign counsel, financial institutions, investigators, and enforcement agents to track and recover assets worldwide—from London to Luxembourg, Dubai to the Caribbean."
    }
  },

  hybridised: {
    id: "hybridised",
    title: "Hybridised Litigation",
    description: "Uniquely, our boutique size gives us the ability and the agility to combine with our clients in-house in order to deliver hybridised litigation services.",
    sectionTitle: "ARMA Hybridised Litigation",
    placeholderImage: "/png/pexels-tima-miroshnichenko-6388362.jpg",
    heroImage: "/png/pexels-tima-miroshnichenko-6388362.jpg",
    icon: React.createElement(LayersIcon),
    isHybridised: true,
    content: {
      mainDescription: "In today’s fast-paced and high-pressure legal landscape, businesses need more than traditional outside counsel—they need a litigation partner that understands internal pressures, mirrors internal processes, and adds strategic value from the inside out.",
      keyPoints: [
        "We work hand-in-hand with General Counsel, Heads of Legal, and in-house teams to deliver tailored support that flexes to your needs—whether that’s full-scale litigation support, specialist input on discrete issues, or embedding our lawyers within your business to operate as an extension of your team.",
        "Our hybrid model is designed to bridge the gap between internal resource limitations and the demands of complex disputes.",
        "We understand the competing pressures you face: controlling legal spend, managing risk, maintaining consistency across jurisdictions, and meeting board-level expectations."
      ],
      approaches: [
        "Work alongside your team as trusted advisors or embedded secondees",
        "Support end-to-end dispute resolution, or handle targeted phases (e.g., pleadings, disclosure, settlement strategy)",
        "Deliver expert insight on risk management, litigation readiness, and procedural tactics",
        "Provide real-time, transparent communication aligned with your internal reporting structures",
        "Focus on cost control, often with flexible fee arrangements, budget forecasts, and project-based pricing"
      ]
    }
  },

  crisis: {
    id: "crisis",
    title: "Crisis Management",
    description: "We specialise in crisis management—navigating high-risk, high-stakes situations with discretion, speed, and precision.",
    sectionTitle: "ARMA Crisis Management",
    placeholderImage: "/png/pexels-suyashbatra-31741816.jpg",
    heroImage: "/png/pexels-suyashbatra-31741816.jpg",
    icon: React.createElement(AlertOctagonIcon),
    isCrisisManagement: true,
    content: {
      mainDescription: "We have been instructed to advise and respond in cases involving corporate espionage, high-value asset misappropriation, international fraud, kidnapping, repatriation of assets (real and personal) from unstable regions, work that a normal law firm does not do. Our strength lies in a multidisciplinary approach that blends legal expertise, strategic intelligence, and global reach.",
      keyPoints: [
        "We partner with security specialists, intelligence analysts, cyber experts, and international legal advisors to coordinate complex operations across jurisdictions.",
        "Our managing partner is experienced in managing sensitive, high-pressure scenarios where timing and tactical decision-making are critical.",
        "We conduct deep-dive internal investigations and protect clients from intellectual property theft, trade secret breaches, and sabotage.",
        "Whether dealing with state-sponsored actors or internal leaks, we identify the source, contain the damage, and help clients pursue civil and criminal remedies.",
        "Our priority is discretion and speed—keeping business disruption to a minimum while securing your interests."
      ],
      capabilities: [
        "Executive protection and negotiation",
        "Legal representation and repatriation",
        "Asset tracing, freezing orders, and working with global enforcement bodies",
        "Emergency extraction and repatriation of assets",
        "Recovery of individuals caught in conflict zones or facing unlawful detention"
      ],
      procedures: [
        "Coordinate with police, Interpol and other international agencies and private security firms to ensure safe resolution",
        "Lead the response to complex financial frauds, Ponzi schemes, embezzlement, and cyber-enabled crimes",
        "Trace funds, secure injunctions, freeze assets, and litigate across multiple jurisdictions",
        "Assist both corporations and individuals in crisis, protecting their rights and securing restitution"
      ],
      conclusion: "From hidden bank accounts to physical assets smuggled offshore, we know how to follow the money and bring it home. In unstable regions, time is everything."
    }
  }
}

// Contact Information
export const contactInfo = {
  phone: "+44 (0) 113 242 4099",
  email: "info@armalitigation.com",
  description: "Ready to protect your professional practice? Contact our team today for a confidential consultation.",
  supportText: "You can contact us by phone at +44 (0) 113 242 4099 or send us an email at info@armalitigation.com. Our team is ready to assist you with your professional indemnity needs and provide the support you require."
}

// Social Media Links (as SVG paths for icons)
export const socialMedia = {
  twitter: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 23.027 24 18.062 24 12.073z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
}

// Page Metadata
export const pageMetadata = {
  title: "Services - ARMA Legal",
  fonts: {
    bunny: "https://fonts.bunny.net",
    instrumentSans: "https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
  },
  fontAwesome: {
    url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
    integrity: "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
    crossOrigin: "anonymous",
    referrerPolicy: "no-referrer"
  }
}

// Styling and Design Constants
export const styling = {
  colorPalette: {
    primary: "#00A0E9",
    primaryHover: "#0085C3",
    primaryDark: "#00A0E9",
    background: "linear-gradient(to right, #000000 5%, #1A1A1A 100%)",
    textPrimary: "#FFFFFF",
    textSecondary: "#E5E7EB", // text-gray-200
    textTertiary: "#D1D5DB", // text-gray-300
    border: "rgba(255, 255, 255, 0.1)",
    cardBackground: "rgba(0, 0, 0, 0.3)",
    overlayBackground: "rgba(0, 0, 0, 0.6)"
  },
  layout: {
    maxWidth: "72rem", // max-w-6xl
    heroMinHeight: "400px",
    topMargin: "7rem", // mt-28
    bottomMargin: "6rem", // mb-24
    sectionSpacing: "5rem", // mb-20
    contactPadding: "8rem" // py-32
  },
  animations: {
    fadeIn: { duration: 0.8 },
    slideUp: { 
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      duration: 0.5
    },
    delayedSlideUp: {
      delay: 0.2,
      duration: 0.5
    }
  }
}

// Component State Management
export const componentState = {
  defaultActiveTab: "commercial",
  defaultService: "commercial",
  imageStates: {
    imageLoaded: false,
    heroImageLoaded: false
  }
}

// Navigation and URL Management
export const navigation = {
  hashChangeHandling: {
    preventDefaultScrolling: true,
    updateHistory: true,
    fallbackService: "commercial"
  },
  tabNavigation: {
    gridCols: {
      mobile: 3, // grid-cols-3
      desktop: 9 // md:grid-cols-9
    },
    tooltipEnabled: true
  }
}

// Content Sections Structure
export const contentSections = {
  hero: {
    badge: "ARMA LEGAL SERVICES",
    backgroundOverlay: true,
    overlayOpacity: 0.6
  },
  serviceNavigation: {
    type: "tabs",
    showTooltips: true,
    activeStyle: "bg-[#00A0E9] text-white"
  },
  serviceContent: {
    maxWidth: "48rem", // max-w-3xl
    animationMode: "wait"
  },
  otherServices: {
    layout: "grid",
    gridCols: {
      mobile: 1,
      desktop: 3
    },
    showImages: true,
    cardHover: true
  },
  contact: {
    layout: "grid",
    gridCols: {
      mobile: 1,
      large: 2
    },
    showSocialMedia: true,
    formFields: ["message"],
    formValidation: true
  }
}

// Default Fallback Images
export const defaultImages = {
  servicesBackground: "/images/services-background.png",
  legalServicesAbstract: "/legal-services-abstract.png",
  placeholder: "/placeholder.svg?height=200&width=400&query=legal%20services"
}

// Helper Functions for Service Data Access
export const getServiceById = (id: string): Service | undefined => {
  return services[id]
}

export const getAllServices = (): Service[] => {
  return Object.values(services)
}

export const getServicesByType = (type: keyof Service): Service[] => {
  return Object.values(services).filter(service => service[type] === true)
}

export const getServiceContent = (serviceId: string): ServiceContent | undefined => {
  const service = getServiceById(serviceId)
  return service?.content
}

export const getServiceIndustries = (serviceId: string): string[] => {
  const content = getServiceContent(serviceId)
  return content?.industries || []
}

export const getServiceCapabilities = (serviceId: string): string[] => {
  const content = getServiceContent(serviceId)
  return content?.capabilities || []
}

export const getServiceTools = (serviceId: string): string[] => {
  const content = getServiceContent(serviceId)
  return content?.tools || []
}

export const getServiceProcedures = (serviceId: string): string[] => {
  const content = getServiceContent(serviceId)
  return content?.procedures || []
}

export const getServiceDisputes = (serviceId: string): string[] => {
  const content = getServiceContent(serviceId)
  return content?.disputes || []
}

export const getServiceCourts = (serviceId: string): string[] => {
  const content = getServiceContent(serviceId)
  return content?.courts || []
}

export const getServiceKeyPoints = (serviceId: string): string[] => {
  const content = getServiceContent(serviceId)
  return content?.keyPoints || []
}

export const getServiceApproaches = (serviceId: string): string[] => {
  const content = getServiceContent(serviceId)
  return content?.approaches || []
}

export const getServiceSpecializations = (serviceId: string): string[] => {
  const content = getServiceContent(serviceId)
  return content?.specializations || []
}

export const getServiceSections = (serviceId: string): ServiceSection[] => {
  const content = getServiceContent(serviceId)
  return content?.sections || []
}

export const getServiceCardContent = (serviceId: string): ServiceCard[] => {
  const content = getServiceContent(serviceId)
  return content?.cardContent || []
}

export const getServiceGlobalReach = (serviceId: string) => {
  const content = getServiceContent(serviceId)
  return content?.globalReach
}

export const getServiceQuote = (serviceId: string): string | undefined => {
  const content = getServiceContent(serviceId)
  return content?.quote
}

export const getServiceConclusion = (serviceId: string): string | undefined => {
  const content = getServiceContent(serviceId)
  return content?.conclusion
}

// Service Type Checkers
export const isCommercialLitigation = (service: Service): boolean => !!service.isCommercialLitigation
export const isInjunction = (service: Service): boolean => !!service.isInjunction
export const isFraudDefense = (service: Service): boolean => !!service.isFraudDefense
export const isAssetRecovery = (service: Service): boolean => !!service.isAssetRecovery
export const isFraudProsecution = (service: Service): boolean => !!service.isFraudProsecution
export const isInvestigations = (service: Service): boolean => !!service.isInvestigations
export const isInternational = (service: Service): boolean => !!service.isInternational
export const isHybridised = (service: Service): boolean => !!service.isHybridised
export const isCrisisManagement = (service: Service): boolean => !!service.isCrisisManagement

// Content Rendering Utilities
export const renderServiceIndustries = (serviceId: string) => {
  return getServiceIndustries(serviceId).map((industry, index) => ({
    key: index,
    name: industry,
    className: "justify-start gap-2 px-4 py-2 text-gray-200 backdrop-blur-md bg-black/20 border-white/10"
  }))
}

export const renderServiceList = (items: string[], className?: string) => {
  return items.map((item, index) => ({
    key: index,
    content: item,
    className: className || "flex items-start gap-2"
  }))
}

// Form Handling
export const formConfig = {
  message: {
    id: "message",
    label: "Your Message",
    placeholder: "Write your message...",
    required: true,
    type: "textarea",
    className: "w-full h-40 p-4 bg-gray-800 text-gray-200 rounded-md resize-none text-base leading-relaxed font-light focus:outline-none focus:ring-2 focus:ring-[#00A0E9] border border-gray-700"
  },
  submit: {
    text: "Send Message",
    className: "bg-[#00A0E9] hover:bg-[#0085C3] text-white py-3 px-8 rounded-md text-base font-medium transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
  }
}

// Animation Configurations
export const motionConfig = {
  hero: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  },
  heroContent: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 0.2, duration: 0.5 }
  },
  serviceContent: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }
}

// CSS Class Collections
export const cssClasses = {
  container: "relative w-full overflow-x-hidden min-h-screen",
  hero: {
    wrapper: "w-full max-w-6xl mx-auto mt-28 mb-24 px-4",
    container: "overflow-hidden rounded-lg shadow-2xl border border-white/10",
    content: "relative min-h-[400px] flex items-center",
    overlay: "absolute inset-0 bg-black opacity-60",
    text: "relative z-10 w-full"
  },
  navigation: {
    wrapper: "w-full max-w-6xl mx-auto px-4 mb-20",
    tabs: "grid grid-cols-3 md:grid-cols-9 backdrop-blur-md bg-black/30 border border-white/10 p-1.5 h-auto rounded-xl",
    trigger: "data-[state=active]:bg-[#00A0E9] data-[state=active]:text-white py-2.5 px-3 h-auto rounded-lg"
  },
  serviceContent: {
    wrapper: "w-full max-w-6xl mx-auto px-4 mb-24",
    header: "flex items-center mb-12",
    title: "text-3xl font-bold text-white tracking-tight uppercase",
    divider: "h-1 w-24 bg-[#00A0E9] mt-3",
    content: "text-gray-300 text-base leading-relaxed font-light max-w-3xl space-y-8"
  },
  cards: {
    wrapper: "backdrop-blur-md bg-black/30 border border-white/10 p-10 rounded-lg mb-24 max-w-6xl mx-auto",
    grid: "grid grid-cols-1 md:grid-cols-3 gap-8",
    card: "backdrop-blur-md bg-black/30 border border-white/10 hover:border-[#00A0E9]/50 transition-all duration-300 cursor-pointer",
    image: "w-full h-40 overflow-hidden",
    content: "p-6"
  }
}

// Export comprehensive data object
export default {
  services,
  contactInfo,
  socialMedia,
  pageMetadata,
  styling,
  componentState,
  navigation,
  contentSections,
  defaultImages,
  formConfig,
  motionConfig,
  cssClasses,
  // Helper functions
  getServiceById,
  getAllServices,
  getServicesByType,
  getServiceContent,
  getServiceIndustries,
  getServiceCapabilities,
  getServiceTools,
  getServiceProcedures,
  getServiceDisputes,
  getServiceCourts,
  getServiceKeyPoints,
  getServiceApproaches,
  getServiceSpecializations,
  getServiceSections,
  getServiceCardContent,
  getServiceGlobalReach,
  getServiceQuote,
  getServiceConclusion,
  // Type checkers
  isCommercialLitigation,
  isInjunction,
  isFraudDefense,
  isAssetRecovery,
  isFraudProsecution,
  isInvestigations,
  isInternational,
  isHybridised,
  isCrisisManagement,
  // Rendering utilities
  renderServiceIndustries,
  renderServiceList
}
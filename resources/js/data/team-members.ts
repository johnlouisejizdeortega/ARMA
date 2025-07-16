export interface TeamMember {
  id: number;
  slug: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  biography: string;
  education: string;
  practiceAreas: string;
  funFact: string;
  email: string;
  phone: string;
  linkedin: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    slug: 'rajat-sharma',
    firstName: 'Rajat',
    lastName: 'Sharma',
    jobTitle: 'Managing Partner',
    biography: 'Rajat Sharma is the Managing Partner of ARMA. A solicitor advocate. A specialist in commercial dispute resolution.\n\nRajat is recognised in Legal 500 and Chambers & Partners for the success he has achieved for clients in complex disputes arising across a broad range of industrial sectors including corporate, commercial contract, fraud, financial services, media, professional negligence and international trade.\n\n*Rajat Sharma is \'a very professional, hard-working litigator, who discovers new angles and presents each action in a commercial manner"* (LEGAL 500)\n\nRajat Sharma is a seasoned litigator who wins praise from the market for his skills in dispute resolution. One satisfied client comments: "He is one of the fastest thinking people I know, very talented and gives what you need from a litigator"\n\nAnother client acclaimed Rajat Sharma as a *"highly charged litigator with great arguments; the best lawyer I have used so far"*.\n\nHe frequently acts on cross-border litigation, and has a particular emphasis on media and international trade disputes.\n\nRajat Sharma, is a solicitor advocate, he has a great deal of experience in handling contractual disputes as well as litigation relating to corporate transactions. One client describes him as *"tenacious, attentive to detail and highly proactive"*, while another says *"he possesses the ability to comprehend complex matters and provide innovative solutions very efficiently."*',
    education: '',
    practiceAreas: 'Commercial litigation (with a particular expertise in interim injunctions), international arbitrations (under the ICC, LCIA UNCITRAL rules), expert determinations, corporate investigations and cross-border work.',
    funFact: 'Outside law, Rajat has a strong interest in Mixed Martial Arts and seeks to be involved in various charities with a particular emphasis in autism and advocacy for the disabled.',
    email: 'rajat.sharma@armalitigation.com',
    phone: '0113 242 4099',
    linkedin: 'https://uk.linkedin.com/in/rajat-sharma-68183016',
    image: '/images/Rajat-1-450x418-c-1.webp'
  },
  {
    id: 2,
    slug: 'ailsa-selman',
    firstName: 'Ailsa',
    lastName: 'Selman',
    jobTitle: 'Senior Associate',
    biography: 'Ailsa joined ARMA as an Associate. She acts and advises on high value litigation matters, with a specialty in finding simple solutions to impossible problems.\n\nAilsa acts across a wide variety of civil and commercial areas, with a breadth of knowledge all geared at delivering the best possible results for her clients. She is used to advocating for clients in both mediations and settlement discussions, regularly appearing against more seasoned opponents and counsel.\n\nAs well as being a fierce litigator, as both a Costs Lawyer and a Mediator, Ailsa has a strong focus on the opportunities for settlement, and the costs consequences of litigation, rounding out the advice she gives to clients.\n\nWith a specialism in disputes regarding failed investments, and claims relating to conspiracy and dishonesty, Ailsa is used to fighting for the underdog and is not afraid to take on big opponents. Her preference is to pursue bold strategic interim applications that place clients in an immediate position of strength.\n\nShe has particular experience in fraud proceedings, solicitors\' negligence claims, non-party costs orders, s994 proceedings, and complex shareholder disputes. The sectors in which she operates are as diverse as finance, IT, property, franchising, asset backed security, construction, and personal guarantees.\n\nClients value Ailsa\'s strategic approach and empathetic manner, as well as her ability to give frank advice on merits. Outside of work, Ailsa enjoys craft design and playing the violin.',
    education: 'LLM LPC (Distinction) Nottingham Law School, LLM(Hons) (2:1) University of Edinburgh',
    practiceAreas: 'Civil fraud, solicitors\' negligence, contempt of court, property litigation, commercial litigation, breach of contract',
    funFact: 'I performed in the opening ceremony for Bradford 2025, RISE, which was broadcast internationally.',
    email: 'ailsa.selman@armalitigation.com',
    phone: '0113 483 0790',
    linkedin: 'https://uk.linkedin.com/in/ailsaselmanlaw',
    image: '/images/team/Ailsa Selman (16).jpg'
  },
  {
    id: 3,
    slug: 'iqra-rahman',
    firstName: 'Iqra',
    lastName: 'Rahman',
    jobTitle: 'Trainee Solicitor',
    biography: 'Iqra is a trainee solicitor who joined the team in 2023. She is a first class English Literature graduate, who completed her law conversion and the LPC with an LLM at the University of Law.\n\nIqra was drawn to ARMA Litigation because of its young and diverse team, as well as the firm\'s commitment to pro-bono and charity work.\n\nHer unique set of skills includes her attention to detail, interpersonal and written communication skills.',
    education: 'First Class English Literature degree from Newcastle University, Law Conversion and LPC at the University of Law',
    practiceAreas: 'Commercial Litigation',
    funFact: 'Running, Baking, Tennis',
    email: 'iqra.rahman@armalitigation.com',
    phone: '0113 531 9897',
    linkedin: 'https://www.linkedin.com/in/iqra-rahman99',
    image: '/images/team/Iqra Rahman (4).jpg'
  },
  {
    id: 4,
    slug: 'shannon-jordan',
    firstName: 'Shannon',
    lastName: 'Jordan',
    jobTitle: 'Litigation Paralegal',
    biography: 'During her time at ARMA, she has worked front of house, alongside the Accounts team, and is now a member of our Litigation team.\n\nShannon enjoys her role as she finds it interesting and thought provoking. Shannon is organised, approachable and prides herself on her professional approach.\n\nThe quality of her work speaks for itself, and she is an extremely valued member of the team.',
    education: 'Level 3 Paralegal Litigation',
    practiceAreas: 'Litigation Support',
    funFact: 'Going to concerts, listening to music and spending time with family and friends.',
    email: 'shannon.jordan@armalitigation.com',
    phone: '0113 483 0793',
    linkedin: 'www.linkedin.com/in/shannon-jordan-83a791137',
    image: '/images/team/Shannon Jordan (3).jpg'
  },
  {
    id: 5,
    slug: 'salman-hasan',
    firstName: 'Salman',
    lastName: 'Hasan',
    jobTitle: 'Associate',
    biography: 'Salman is an associate who completed his training contract with ARMA. He joined having completed his secondary education in Bahrain and obtaining a bilingual diploma, and his higher education with a focus on commercial law and commercial dispute resolution.\n\nSalman was drawn to ARMA due to its focus of delivering excellent service to clients. He enjoys advising clients in early crisis management, and has a passion for finding unorthodox and novel solutions tailored to each client\'s unique circumstances.',
    education: 'International Baccalaureate, followed by an LLB then an LLM at the University of Kent (with dual pathways of International Commercial Law and Intellectual Property Law), before concluding with an LPC diploma from the University of Law.',
    practiceAreas: 'Commercial litigation, particularly: shareholder disputes, insolvency disputes, complex contractual claims, subrogated recoveries, professional negligence against legal professionals, and pursuing and defending applications for interim remedies (both with and without notice).',
    funFact: 'Salman\'s hobbies include organising board game socials and long-running tabletop roleplaying games, supporting local theatre, reading.\n\nSalman is bilingual in Arabic and English, which has come into frequent use in his time at ARMA.\n\nHe once acted as a translator during a high-value commercial negotiation, at the insistence of not only his client but also that of the other party.',
    email: 'Salman.Hasan@armalitigation.com',
    phone: '0113 483 0795',
    linkedin: 'https://www.linkedin.com/in/sal-hasan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image: '/images/team/Salman Hassan (8).jpg'
  },
  {
    id: 6,
    slug: 'elroy-oduor',
    firstName: 'Elroy',
    lastName: 'Oduor',
    jobTitle: 'Trainee Solicitor',
    biography: 'Elroy is a Trainee in the 2024 intake at ARMA, where he is undergoing a structured and intensive training programme within the firm\'s civil and commercial disputes practice.\n\nHis work spans a broad spectrum of contentious matters—from modest civil claims to complex, multi-jurisdictional disputes involving substantial sums—ensuring early exposure to the strategic, procedural and commercial dimensions of litigation.\n\nElroy\'s development is shaped by the firm\'s commitment to producing client-focused, commercially aware litigators who are capable of navigating sophisticated claims with precision, commercial acumen, and tactical clarity.\n\nAlready known for his composed and analytical approach, Elroy is steadily building a reputation for being an assured litigator with an eye for detail and a readiness to engage with the granular aspects of contentious practice.\n\nHis exposure to a varied case load enables him to develop litigation instincts and legal judgment, equipping him with the tools to deliver robust outcomes for clients across a range of disputes.\n\nBeyond his legal training, Elroy when time allows, plays golf but one thing he won\'t miss is his morning gym workout. Although, Based in Leeds, he remains a steadfast Manchester United supporter and is very open about his (thus far) unshakable resistance to Yorkshire Tea—an affliction the wider team hopes might be cured by the end of his training contract.',
    education: 'Master of Law, Northumbria University',
    practiceAreas: 'Civil Fraud and Asset Recovery, Building and Construction Disputes, Employment Disputes, Trade Mark Litigation, Professional Negligence, Trust and Fiduciary Litigation',
    funFact: 'Golf, Gym, Football, Basketball and Finance',
    email: 'elroy.oduor@armalitigation.com',
    phone: '01134830797',
    linkedin: 'https://www.linkedin.com/in/elroy-oduor-b41714192/',
    image: '/images/team/Elroy Oduor (8).jpg'
  },
  {
    id: 7,
    slug: 'zubair-durrani',
    firstName: 'Zubair',
    lastName: 'Durrani',
    jobTitle: 'Litigation Paralegal',
    biography: 'Litigation Paralegal with experience providing administrative support in high value and complex disputes, international commercial disputes and multi-party claims.\n\nExperienced translator and interpreter with written and oral fluency in four languages, Zubair leverages his diverse cultural and educational background to bring a global mindset to cross-border litigation and multilingual client engagement.\n\nWith a keen interest in Middle Eastern and ASEAN emerging markets, Zubair aspires to qualify as a solicitor advocate focusing on international commercial dispute resolution.',
    education: 'LL.B (Hons) in Law - University of York, Foundation in Law and Shari\'a Law - International Islamic University Malaysia',
    practiceAreas: 'Commercial Litigation',
    funFact: 'Outside of work, Zubair enjoys nature, hiking and kickboxing.',
    email: 'zubairdurrani@armalitigation.com',
    phone: '+44 113 531 9901',
    linkedin: 'www.linkedin.com/in/zubair97',
    image: '/images/team/Zubair Durrani (10).jpg'
  },
  {
    id: 8,
    slug: 'ollie-nicholls',
    firstName: 'Ollie',
    lastName: 'Nicholls',
    jobTitle: 'Litigation Paralegal',
    biography: 'Ollie Nicholls is a First-Class Law graduate (MLaw with integrated LPC) from Northumbria University with experience in civil litigation, corporate transactions, and regulatory compliance.\n\nHis academic work includes a master\'s thesis on the integration of blockchain technology into commercial contracts, for which he received a mark of 90%.\n\nHe has supported legal teams in client-facing environments, with responsibilities ranging from legal research and drafting to case management and post-completion tasks.\n\nWith a strong interest in emerging technologies and commercial law, he is particularly focused on sectors such as FinTech and Artificial Intelligence.\n\nOllie currently works as a paralegal, bringing a pragmatic and detail-oriented approach to a fast-paced legal environment.',
    education: 'Upper High First Class with Honours from Northumbria University. 90% on master\'s thesis.',
    practiceAreas: 'Commercial Litigation, Crisis Management, High-Profile Property and Insurance Disputes, Public Law',
    funFact: 'In his spare time, Ollie enjoys playing golf with friends and occasionally traveling abroad to explore new cultures.\n\nA keen rugby player for over 15 years, Ollie has developed a deep passion for the sport and values the teamwork and discipline it brings.\n\nHe also keeps a close eye on developments in fintech and cryptocurrency, fascinated by how these technologies are reshaping global finance and driving innovation.',
    email: 'ollie.nicholls@armalitigation.com',
    phone: '+44 113 483 0791',
    linkedin: 'https://uk.linkedin.com/in/ollienicholls',
    image: '/images/team/Ollie Nicholls (3).jpg'
  },
  {
    id: 9,
    slug: 'uddhav-arora',
    firstName: 'Uddhav',
    lastName: 'Arora',
    jobTitle: 'Trainee Solicitor',
    biography: 'Uddhav is a Trainee Solicitor at ARMA Litigation, bringing with him a diverse academic and professional background. He holds a Bachelor of Commerce degree from India and has completed both his Bachelor and Master of Law (alongside LPC) degrees in England.\n\nThis combined academic foundation enables him to gain a comprehensive understanding of clients\' businesses and legal concerns, thereby allowing him to provide an effective advice. In addition to his legal qualifications, Uddhav is an Accredited Mediator too.\n\nUddhav commenced his legal career with the firm as a part-time paralegal while pursuing his Master\'s degree, and has since advanced to the position of Trainee Solicitor.\n\nIn this role, he continues to build his expertise across a broad spectrum of legal matters, with a particular focus on commercial, contractual, insolvency, and shareholder disputes.\n\nUddhav has also worked across various litigation sectors such as property, professional negligence, construction, and matters involving personal guarantees.\n\nHe thrives in fast-paced environments, enjoys collaborating with the team, and is passionate about finding effective, commercially focused solutions for clients.',
    education: 'Masters of Law (LPC) from University of Law and Bachelors in Law (LLB) from University of Leeds',
    practiceAreas: 'Commercial Litigation',
    funFact: 'Enjoys playing cricket, going on walks and listening to podcasts.',
    email: 'uddhav.arora@armalitigation.com',
    phone: '0113 483 0796',
    linkedin: 'http://linkedin.com/in/uddhavarora',
    image: '/images/team/Uddhave Arora (2).jpg'
  },
  {
    id: 10,
    slug: 'shafik-saadulla',
    firstName: 'Shafik',
    lastName: 'Saadulla',
    jobTitle: 'Apprentice Solicitor',
    biography: 'Shafik possesses a strong passion for the legal field, demonstrating keen attention to detail and a commitment to supporting the team at ARMA.\n\nHis diverse skill set and dedication to continuous professional development make him a valuable asset.\n\nHe particularly appreciates the pro bono work offered by ARMA and finds fulfilment in participating in the charitable initiatives provided by AMRA.\n\nShafik looks forward to the opportunity to collaborate with a talented, diverse, and successful team.',
    education: 'Completing a Solicitor Apprenticeship with BPP University through the SQE route to qualify as a solicitor',
    practiceAreas: 'Litigation',
    funFact: 'Watching movies, cooking and playing sports',
    email: 'Shafik.saadulla@armalitigation.com',
    phone: '0113 531 9896',
    linkedin: 'https://uk.linkedin.com/in/shafik-saadulla-8a419a267?trk=people-guest_people_search-card',
    image: '/images/team/Shafik Saadulla (3).jpg'
  },
  {
    id: 11,
    slug: 'steven-lewis',
    firstName: 'Steven',
    lastName: 'Lewis',
    jobTitle: 'Trainee Solicitor',
    biography: 'Steven is a trainee solicitor with an interest in commercial litigation. At ARMA, he supports solicitors whilst managing his own caseload.\n\nHe is skilled at adapting to urgent demands, maintaining accuracy and efficiency even in challenging situations.\n\nSteven is committed to achieving the best outcomes for clients through thorough preparation and clear communication.\n\nHe regularly undertakes pro bono work supporting individuals who might otherwise struggle to access legal advice.\n\nBeyond law, he enjoys hiking and running, and values time spent outdoors as a way to recharge and stay focused.',
    education: 'Commendation, LPC, University of Law 2:1 Law LLB Honour, Newcastle University',
    practiceAreas: 'Commercial Law, Dispute Resolution, Employment Law, Public Law',
    funFact: 'Hiking, Camping, Training for Marathons',
    email: 'steven.lewis@armalitigation.com',
    phone: '0113 531 9898',
    linkedin: 'https://www.linkedin.com/in/steven-lewis-641bb81b1/',
    image: '/images/team/Steven Lewis (13).jpg'
  },
  {
    id: 12,
    slug: 'saphina-coates-mohammed',
    firstName: 'Saphina',
    lastName: 'Coates Mohammed',
    jobTitle: 'Solicitor',
    biography: 'Saphina acts and advises on civil and commercial practice areas, with particular experience in insurance related disputes and litigation.',
    education: 'LLB Law with Spanish Law from the University of Sheffield. LPC and Masters from the University of Law.',
    practiceAreas: 'Commercial Law, Insurance Law',
    funFact: 'In my spare time I enjoy hiking, watching motorsport and horse riding.',
    email: 'saphina.coatesmohammed@armalitigation.com',
    phone: '01135319900',
    linkedin: 'https://www.linkedin.com/in/saphina-coates-mohammed-a516b612a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image: '/images/team/Saphina Mohammed (7).jpg'
  }
];

// Helper functions for easy data access
export const getTeamMemberBySlug = (slug: string): TeamMember | undefined => {
  return teamMembers.find(member => member.slug === slug);
};

export const getAllTeamMembers = (): TeamMember[] => {
  return teamMembers;
};
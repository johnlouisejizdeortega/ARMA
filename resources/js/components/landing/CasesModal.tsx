"use client"

import { useState, useEffect } from "react"
import { services } from "@/data/services"

interface CaseDetail {
  id: number
  title: string
  client: string
  description: string
  value: string
  status: string
  date: string
  type: string
  crossBorder: boolean
  jurisdictions?: string
  leadLawyer: string
  teamMembers?: string
  significance: string
}

const allCases: CaseDetail[] = [
  {
    id: 1,
    title: "Directors v National Law Firm & Counsel (Share Acquisition/Negligence)",
    client: "KING (Corporate Commercial business)",
    description: "Acting for 3 directors/shareholders prosecuting a claim against their former solicitors and counsel for damages exceeding £40m. The claim arises from a failed and improperly discontinued 20-day trial and a misadvised £10m corporate acquisition, involving breaches of contract, fiduciary duty, and professional negligence. The case is one of the largest value claims ever prosecuted, involving complex issues of legal retainer, fiduciary and tortious duties, and the interface between barristers and solicitors.",
    value: "£40M",
    status: "Ongoing",
    date: "2020-",
    type: "Commercial Litigation",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    teamMembers: "Ailsa Selman",
    significance: "One of the largest value professional negligence claims, involving complex issues of legal retainer and fiduciary duties."
  },
  {
    id: 2,
    title: "Ociusnet Group v Rogue Subsidiary (IP/Passing Off)",
    client: "Ociusnet Group (Sony Ericsson offshoot)",
    description: "Prosecution of injunction to restrain passing off and damage by a rogue subsidiary and holding company in the Philippines and Hong Kong, involving hacking and disappropriation of IP. Obtained injunction in IPEC and defending corporate misfeasance action in the Philippines. Led to a notable Non Party Costs Order.",
    value: "$10M+",
    status: "Ongoing",
    date: "-",
    type: "Injunction",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    teamMembers: "Ailsa Selman",
    significance: "Cross-border IP protection, cyber-attack, and international corporate misfeasance."
  },
  {
    id: 3,
    title: "Steintime Group v British Gas Trading Ltd (Electricity Act)",
    client: "Steintime Group",
    description: "Prosecuting two specific performance injunctions and defending a set aside application against British Gas for unlawful disconnection of electrical supply. Further action for breach of contract under the Electricity Act, seeking losses from unlawful entry and disconnection.",
    value: "£500K",
    status: "Ongoing",
    date: "-",
    type: "Injunction",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    significance: "Complex utilities litigation under the Electricity Act."
  },
  {
    id: 4,
    title: "Investor State Arbitration v Russian State (IP Disappropriation)",
    client: "English citizen & Spanish company",
    description: "Prosecuting investor state arbitration against the Russian State for disappropriation of IP (automated payment system used by Moscow State). Arbitration under UNITRAL rules, with potential impact on international law and sanctions enforcement.",
    value: "£80M+",
    status: "Ongoing",
    date: "2020-",
    type: "Hybridised Litigation Services",
    crossBorder: false,
    jurisdictions: "England, Russia",
    leadLawyer: "Rajat Sharma",
    teamMembers: "Sudhansu Swaroop QC, Vladimir Fomin - Moca",
    significance: "Complex investor-state arbitration with international law and sanctions implications."
  },
  {
    id: 5,
    title: "Dubai/Kuwait Investor Consortium v Solicitors (Land Investment Scheme)",
    client: "Dubai/Kuwait Investor Consortium",
    description: "Acting for a consortium prosecuting a class action for breach of contract, professional negligence, and fiduciary duty against solicitors and advisors in a failed land investment scheme. The case involves potential conspiracy, collusion, and fraudulent reports across multiple jurisdictions.",
    value: "£5-10M",
    status: "Ongoing",
    date: "2020-",
    type: "Fraud Prosecution Services",
    crossBorder: true,
    jurisdictions: "England & Wales, Dubai, Kuwait",
    leadLawyer: "Rajat Sharma",
    significance: "Class action exposing improper practices in high street conveyancing."
  },
  {
    id: 6,
    title: "Augusta Ventures Group v Former Client & Solicitors (Litigation Funding)",
    client: "Augusta Ventures Group",
    description: "Acting for the UK's largest litigation funder in a breach of funding agreement and conspiracy claim against a former client, solicitors, and third parties. Involved emergency interim applications (preservation of evidence, Norwich Pharmacal, pre-action disclosure). Case demonstrates top-tier funder trust in the firm.",
    value: "£1.5M+",
    status: "Completed and Settled",
    date: "2020-2021",
    type: "Commercial Litigation Services",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    teamMembers: "Ailsa Selman",
    significance: "Complex litigation funding dispute with emergency interim relief."
  },
  {
    id: 7,
    title: "Augusta Securities v Murli Mirchandani (Freezing Injunction)",
    client: "Augusta Securities",
    description: "Litigation funder instructed to prosecute breach of contract and duty against Dubai-based defendant. Obtained worldwide freezing injunction, prosecuted commercial breach, and succeeded in judgment over £1m. Ongoing asset recovery linked to Panama Papers.",
    value: "£4M+",
    status: "Enforcement Ongoing",
    date: "2019-",
    type: "Asset Recovery Services",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    significance: "Complex freezing injunction and asset recovery with international elements."
  },
  {
    id: 8,
    title: "UDOX International/Russell Williamson v Minority Shareholder (Section 994/260)",
    client: "UDOX International/Russell Williamson",
    description: "Defending majority shareholder in a complex dispute involving forfeiture of shares, directors loans, and derivative claims. Succeeded in dismissing bankruptcy proceedings and prosecuting section 994 and 260 claims for misuse of company resources.",
    value: "£6-10M",
    status: "Ongoing",
    date: "-",
    type: "Commercial Litigation Services",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    teamMembers: "Ailsa Selman, James McWilliams (3VB)",
    significance: "Complex shareholder and company law dispute."
  },
  {
    id: 9,
    title: "Insurer v Subcontractor (Defective Construction)",
    client: "Insurer",
    description: "Prosecuting breach of services and development contract and professional negligence dispute for insurer and insured against subcontractor, arising from defective construction of premium flats in London. Trial involves expert evidence and forensic analysis of causation and contractual terms.",
    value: "£3M+",
    status: "Ongoing",
    date: "2020-",
    type: "Commercial Litigation Services",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    teamMembers: "Ailsa Selman",
    significance: "Major professional negligence and construction litigation."
  },
  {
    id: 10,
    title: "DC Concepts v Novikov Club (Cross-Border Construction)",
    client: "DC Concepts",
    description: "Defending Technical and Construction Court proceedings in London for breach of contract relating to restaurant/catering installation. Parallel claim in Italy; contract governed by Texan law. Succeeded in setting aside judgment on technical grounds.",
    value: "£1M+",
    status: "Ongoing",
    date: "2019-",
    type: "Hybridised Litigation Services",
    crossBorder: true,
    jurisdictions: "England & Wales, Italy, Texas",
    leadLawyer: "Rajat Sharma",
    teamMembers: "Ailsa Selman",
    significance: "Rare cross-border construction dispute applying Texan law in English courts."
  },
  {
    id: 11,
    title: "M Group v Third Parties (Golf Course Sale)",
    client: "M Group",
    description: "Prosecuting claim arising from sale of £6m golf course, involving summary judgment for specific performance, injunction, damages for conspiracy and tortious interference, and defending misrepresentation. Achieved extraordinary settlement after replacing previous counsel.",
    value: "£6-10M",
    status: "Ongoing",
    date: "2019-",
    type: "Commercial Litigation Services",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    teamMembers: "Ailsa Selman, Alexander Halban, Adam Solomon C",
    significance: "High-stakes real estate and contract litigation."
  },
  {
    id: 12,
    title: "Aqua Boracay Beach Village Arbitration (LCIA)",
    client: "International Real Estate Client",
    description: "Secured $8m arbitral award under LCIA rules against Aqua Boracay Beach Village Corporation. Now prosecuting injunctive and reciprocal recognition proceedings in the Philippines, using diplomatic and legal strategies for enforcement.",
    value: "$8M",
    status: "Ongoing",
    date: "2019-",
    type: "Hybridised Litigation Services",
    crossBorder: true,
    jurisdictions: "Philippines, UK",
    leadLawyer: "Rajat Sharma",
    teamMembers: "James McWilliams (3VB)",
    significance: "International arbitration and enforcement in challenging jurisdictions."
  },
  {
    id: 13,
    title: "Industrial Lockers Dispute (Sale & Supply of Goods Act)",
    client: "Confidential (Industrial Client)",
    description: "Prosecuting and defending proceedings in the Technology and Construction Court for breach of contract relating to industrial lockers. Case involves forensic expert evidence and will set new authority on sale and supply of goods standards.",
    value: "£500K",
    status: "Ongoing",
    date: "2019-",
    type: "Commercial Litigation Services",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    teamMembers: "David Lascelles (Littleton Chambers)",
    significance: "Landmark case on sale and supply of goods standards."
  },
  {
    id: 14,
    title: "High-Profile Domestic Violence Case",
    client: "High-Profile Individual",
    description: "Defense of a high-profile case involving domestic violence allegations against a well-known public figure. The case required sophisticated reputation management strategies and required careful handling of media attention while ensuring the best legal outcome for the client.",
    value: "Confidential",
    status: "Completed",
    date: "2023",
    type: "Crisis Management Services",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    significance: "High-profile criminal defense requiring sophisticated reputation management."
  },
  {
    id: 15,
    title: "Prime Central London Property Fraud",
    client: "International Property Investor",
    description: "Successfully prosecuted a complex fraud case involving a prime central London property worth over £20 million. The case involved sophisticated financial instruments and required extensive forensic accounting to trace misappropriated funds across multiple jurisdictions.",
    value: "£20M+",
    status: "Completed",
    date: "2022-2023",
    type: "Fraud Prosecution Services",
    crossBorder: true,
    jurisdictions: "England & Wales, Switzerland, Monaco",
    leadLawyer: "Rajat Sharma",
    significance: "Major fraud prosecution involving prime London real estate and international finance."
  },
  {
    id: 16,
    title: "Technology Company IP Theft",
    client: "Multinational Technology Corporation",
    description: "Defended a major technology company against allegations of intellectual property theft involving proprietary algorithms. Successfully obtained injunctive relief to protect the client's business operations while the substantive issues were resolved through confidential arbitration.",
    value: "£50M+",
    status: "Completed",
    date: "2022",
    type: "Injunction Services",
    crossBorder: true,
    jurisdictions: "England & Wales, California, Singapore",
    leadLawyer: "Rajat Sharma",
    significance: "High-stakes IP protection involving cutting-edge technology and cross-border enforcement."
  },
  {
    id: 17,
    title: "Financial Services Regulatory Investigation",
    client: "Senior Financial Services Executive",
    description: "Represented a senior executive in a complex regulatory investigation by the Financial Conduct Authority (FCA) involving allegations of market manipulation. The case required careful coordination with compliance teams and sophisticated defense strategies to protect the client's career and reputation.",
    value: "Confidential",
    status: "Completed",
    date: "2021-2022",
    type: "Crisis Management Services",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    significance: "Complex FCA investigation requiring regulatory expertise and reputation protection."
  },
  {
    id: 18,
    title: "Cryptocurrency Exchange Fraud Defense",
    client: "Cryptocurrency Exchange Founder",
    description: "Successfully defended the founder of a major cryptocurrency exchange against fraud allegations involving misappropriation of customer funds. The case involved cutting-edge issues of digital asset law and required extensive technical expertise in blockchain technology.",
    value: "£100M+",
    status: "Completed",
    date: "2021",
    type: "Fraud Defense Services",
    crossBorder: true,
    jurisdictions: "England & Wales, Hong Kong, Cayman Islands",
    leadLawyer: "Rajat Sharma",
    significance: "Landmark cryptocurrency fraud defense involving novel legal issues in digital asset law."
  },
  {
    id: 19,
    title: "Offshore Asset Recovery Operation",
    client: "Pension Fund Trustees",
    description: "Successfully recovered over £75 million in assets for pension fund trustees following a sophisticated fraud scheme. The recovery operation involved freezing orders across multiple jurisdictions and complex negotiations with various regulatory authorities and liquidators.",
    value: "£75M",
    status: "Completed",
    date: "2020-2021",
    type: "Asset Recovery Services",
    crossBorder: true,
    jurisdictions: "England & Wales, Jersey, British Virgin Islands, Switzerland",
    leadLawyer: "Rajat Sharma",
    significance: "Major cross-border asset recovery operation involving pension fund protection."
  },
  {
    id: 20,
    title: "Private Equity Dispute Resolution",
    client: "International Private Equity Fund",
    description: "Resolved a high-stakes dispute between partners in a major private equity fund involving allegations of breach of fiduciary duty and mismanagement of fund assets. The case was successfully resolved through sophisticated commercial mediation avoiding potentially damaging litigation.",
    value: "£200M+",
    status: "Completed",
    date: "2020",
    type: "Commercial Litigation Services",
    crossBorder: true,
    jurisdictions: "England & Wales, Delaware, Luxembourg",
    leadLawyer: "Rajat Sharma",
    significance: "Major private equity dispute resolved through sophisticated alternative dispute resolution."
  },
  {
    id: 21,
    title: "Media Mogul Defamation Defense",
    client: "International Media Executive",
    description: "Successfully defended a prominent international media executive against multiple defamation claims arising from investigative journalism coverage. The case involved complex questions of press freedom, public interest, and cross-border publication issues.",
    value: "Confidential",
    status: "Completed",
    date: "2019-2020",
    type: "Crisis Management Services",
    crossBorder: true,
    jurisdictions: "England & Wales, New York, Australia",
    leadLawyer: "Rajat Sharma",
    significance: "High-profile defamation defense involving press freedom and international publication law."
  }
]

interface CasesModalProps {
  isOpen: boolean
  onClose: () => void
}

const CasesModal: React.FC<CasesModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedCase, setSelectedCase] = useState<CaseDetail | null>(null)

  const categories = [
    "All",
    ...Object.values(services).map(service => service.title).sort()
  ]

  const filteredCases = allCases.filter(caseItem => {
    const matchesCategory = selectedCategory === "All" || caseItem.type.includes(selectedCategory) || caseItem.type === selectedCategory
    const matchesSearch = caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseItem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseItem.client.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  }).sort((a, b) => a.title.localeCompare(b.title))

  const handleCaseClick = (caseItem: CaseDetail) => {
    setSelectedCase(caseItem)
  }

  const handleBackToList = () => {
    setSelectedCase(null)
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substr(0, maxLength) + "..."
  }

  // Check if we're on mobile for dynamic truncation
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedCase) {
          handleBackToList()
        } else {
          onClose()
        }
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, selectedCase])

  // Define the nine official specialism categories
  const SPECIALISM_CATEGORIES = [
    "Commercial Litigation",
    "Fraud & Asset Recovery",
    "International Arbitration",
    "Professional Negligence",
    "Human Rights & National Security",
    "Crisis Management",
    "Reputation & Privacy",
    "Regulatory & Investigations",
    "Employment & Partnership"
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 opacity-100">
        <div 
          className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl"
          onClick={selectedCase ? undefined : onClose}
        />
        
        {/* Ambient lighting */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#00A0E9]/[0.03] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
        </div>
        
        {/* Modal container */}
        <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="relative w-full max-w-7xl h-full max-h-[95vh] flex flex-col">
            
            {/* Glassmorphism container */}
            <div className="h-full flex flex-col backdrop-blur-3xl bg-white/[0.08] rounded-3xl border border-white/[0.12] shadow-2xl shadow-black/[0.15] overflow-hidden">
              
              {/* Header */}
              <div className="flex-shrink-0 flex items-center justify-between p-4 sm:p-6 lg:p-8 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                  {/* Back button - only show when case is selected */}
                  {selectedCase && (
                    <button
                      onClick={handleBackToList}
                      className="flex-shrink-0 p-2 sm:p-3 hover:bg-white/[0.06] rounded-xl transition-all duration-300 text-white/60 hover:text-white/90 hover:scale-105 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label="Back to cases list"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}
                  
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-white mb-1 tracking-wide truncate">
                      {selectedCase ? (
                        <>CASE <span className="text-[#00A0E9] font-normal">DETAILS</span></>
                      ) : (
                        <>ALL OUR <span className="text-[#00A0E9] font-normal">WORKS</span></>
                      )}
                    </h2>
                    <p className="text-white/60 text-xs sm:text-sm font-light truncate">
                      {selectedCase ? selectedCase.title.toUpperCase() : "Complete portfolio of landmark legal victories"}
                    </p>
                  </div>
                </div>
                
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 sm:p-3 hover:bg-white/[0.06] rounded-xl sm:rounded-2xl transition-all duration-300 text-white/60 hover:text-white/90 hover:scale-105 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] min-w-[44px] min-h-[44px] flex items-center justify-center ml-2 sm:ml-4"
                  aria-label="Close modal"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Filters section - only show when not viewing individual case */}
              {!selectedCase && (
                <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-b border-white/[0.08] bg-white/[0.02]">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    
                    {/* Search - full width on mobile */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Search cases..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 pl-10 sm:pl-11 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm sm:text-base placeholder-white/40 focus:outline-none focus:border-[#00A0E9]/50 focus:bg-white/[0.06] transition-all duration-300 backdrop-blur-xl font-light min-h-[44px]"
                      />
                      <svg className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>

                    {/* Filters and counter row */}
                    <div className="flex items-center gap-3 justify-between">
                      
                      {/* Filters - horizontal scroll on mobile */}
                      <div className="flex-1 min-w-0">
                        <div className="flex gap-2 overflow-x-auto filter-scrollbar pb-1">
                          {categories.map((category) => (
                            <button
                              key={category}
                              onClick={() => setSelectedCategory(category)}
                              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-light transition-all duration-300 backdrop-blur-xl border whitespace-nowrap flex-shrink-0 min-h-[36px] sm:min-h-[40px] uppercase ${
                                selectedCategory === category
                                  ? 'bg-[#00A0E9]/15 text-[#00A0E9] border-[#00A0E9]/25'
                                  : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.06] hover:text-white/80 border-white/[0.06] hover:border-white/[0.12]'
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Results counter */}
                      <div className="text-xs sm:text-sm text-white/50 font-light backdrop-blur-xl bg-white/[0.03] rounded-lg px-3 py-2 border border-white/[0.06] whitespace-nowrap flex-shrink-0 min-h-[36px] sm:min-h-[40px] flex items-center">
                        <span className="text-[#00A0E9]">{filteredCases.length}</span>
                        <span className="mx-1">/</span>
                        <span className="text-white/70">{allCases.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Content area */}
              <div className="flex-1 min-h-0 overflow-hidden">
                <div className="h-full overflow-y-auto minimal-scrollbar">
                  
                  {/* Cases List View */}
                  {!selectedCase && (
                    <div className="p-6 lg:p-8">
                      {filteredCases.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
                          {filteredCases.map((caseItem, index) => (
                            <div
                              key={caseItem.id}
                              className="group backdrop-blur-2xl bg-white/[0.06] rounded-2xl border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 hover:bg-white/[0.08] cursor-pointer transform-gpu hover:scale-[1.02]"
                              onClick={() => handleCaseClick(caseItem)}
                            >
                              <div className="p-3 sm:p-4">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-2 sm:mb-3">
                                  <div className="flex flex-wrap gap-1">
                                    <span className="inline-block px-2 py-0.5 text-xs font-light bg-[#00A0E9]/15 text-[#00A0E9] rounded-full border border-[#00A0E9]/20 backdrop-blur-xl">
                                      {caseItem.type}
                                    </span>
                                    {caseItem.crossBorder && (
                                      <span className="inline-block px-2 py-0.5 text-xs font-light bg-white/[0.08] text-white/70 rounded-full border border-white/[0.12] backdrop-blur-xl">
                                        Cross-Border
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-xs text-white/50 font-light backdrop-blur-xl bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06] ml-2 flex-shrink-0">
                                    {caseItem.date}
                                  </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-sm sm:text-base font-light text-white mb-2 group-hover:text-[#00A0E9] transition-colors duration-300 leading-snug line-clamp-2 uppercase">
                                  {caseItem.title}
                                </h3>

                                {/* Brief description */}
                                <p className="text-xs sm:text-sm text-white/70 mb-2 sm:mb-3 leading-relaxed font-light line-clamp-2 sm:line-clamp-3">
                                  {truncateText(caseItem.description, isMobile ? 80 : 120)}
                                </p>

                                {/* Quick details */}
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-xs text-white/50 font-light">Case Value</span>
                                  <span className="text-xs sm:text-sm font-light text-[#00A0E9]">{caseItem.value}</span>
                                </div>

                                {/* Expand indicator */}
                                <div className="flex justify-center pt-1 sm:pt-2 border-t border-white/[0.06]">
                                  <span className="text-xs text-white/40 font-light">Tap for details</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Empty state */
                        <div className="flex flex-col items-center justify-center h-full text-center py-16">
                          <div className="backdrop-blur-2xl bg-white/[0.04] rounded-3xl p-12 border border-white/[0.08] max-w-md mx-auto">
                            <div className="text-white/30 mb-6">
                              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-light text-white/80 mb-3">No cases found</h3>
                            <p className="text-white/50 text-sm mb-6 leading-relaxed font-light">
                              No cases match your current criteria
                            </p>
                            <button 
                              onClick={() => {
                                setSearchTerm("")
                                setSelectedCategory("All")
                              }}
                              className="bg-[#00A0E9]/20 hover:bg-[#00A0E9]/30 text-[#00A0E9] font-light py-3 px-6 rounded-2xl text-sm transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-[#00A0E9]/20"
                            >
                              Clear Filters
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Individual Case Detail View */}
                  {selectedCase && (
                    <div className="p-6 lg:p-8">
                      <div className="max-w-5xl mx-auto">
                        {/* Case header */}
                        <div className="mb-6 sm:mb-8">
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="inline-block px-3 py-1 text-sm font-light bg-[#00A0E9]/15 text-[#00A0E9] rounded-full border border-[#00A0E9]/20 backdrop-blur-xl">
                              {selectedCase.type}
                            </span>
                            {selectedCase.crossBorder && (
                              <span className="inline-block px-3 py-1 text-sm font-light bg-white/[0.08] text-white/70 rounded-full border border-white/[0.12] backdrop-blur-xl">
                                Cross-Border
                              </span>
                            )}
                            <span className="inline-block px-3 py-1 text-sm font-light bg-white/[0.04] text-white/60 rounded-full border border-white/[0.06] backdrop-blur-xl">
                              {selectedCase.date}
                            </span>
                          </div>
                          
                          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight mb-4 uppercase">
                            {selectedCase.title}
                          </h1>
                        </div>

                        {/* Case content */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                          {/* Main content - left side */}
                          <div className="lg:col-span-2 space-y-6">
                            {/* Client info */}
                            <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06]">
                              <h3 className="text-lg font-light text-white mb-3">Client</h3>
                              <p className="text-base text-white/80 font-light">{selectedCase.client}</p>
                            </div>

                            {/* Description */}
                            <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06]">
                              <h3 className="text-lg font-light text-white mb-4">Case Description</h3>
                              <p className="text-base text-white/70 leading-relaxed font-light">
                                {selectedCase.description}
                              </p>
                            </div>

                            {/* Legal Significance */}
                            <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06]">
                              <h3 className="text-lg font-light text-white mb-4">Legal Significance</h3>
                              <p className="text-base text-white/70 leading-relaxed font-light">
                                {selectedCase.significance}
                              </p>
                            </div>

                            {/* Team Information */}
                            <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06]">
                              <h3 className="text-lg font-light text-white mb-4">Legal Team</h3>
                              <div className="space-y-3">
                                <div>
                                  <span className="text-sm text-[#00A0E9]/80 font-light">Lead Lawyer:</span>
                                  <span className="text-base text-white/80 font-light ml-2">{selectedCase.leadLawyer}</span>
                                </div>
                                {selectedCase.teamMembers && (
                                  <div>
                                    <span className="text-sm text-[#00A0E9]/80 font-light">Team Members:</span>
                                    <span className="text-base text-white/70 font-light ml-2">{selectedCase.teamMembers}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Sidebar - right side */}
                          <div className="space-y-6">
                            {/* Case Details */}
                            <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06]">
                              <h3 className="text-lg font-light text-white mb-4">Case Details</h3>
                              <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                  <span className="text-sm text-white/50 font-light">Case Value</span>
                                  <span className="text-base font-light text-[#00A0E9] text-right">{selectedCase.value}</span>
                                </div>
                                
                                <div className="flex justify-between items-start">
                                  <span className="text-sm text-white/50 font-light">Status</span>
                                  <span className={`text-sm font-light px-3 py-1 rounded-full backdrop-blur-xl border text-center ${
                                    selectedCase.status.includes('Ongoing') ? 'bg-yellow-500/10 text-yellow-300/80 border-yellow-500/20' :
                                    selectedCase.status.includes('Settled') ? 'bg-green-500/10 text-green-300/80 border-green-500/20' :
                                    'bg-blue-500/10 text-blue-300/80 border-blue-500/20'
                                  }`}>
                                    {selectedCase.status}
                                  </span>
                                </div>

                                <div className="flex justify-between items-start">
                                  <span className="text-sm text-white/50 font-light">Date</span>
                                  <span className="text-base text-white/70 font-light text-right">{selectedCase.date}</span>
                                </div>

                                {selectedCase.jurisdictions && (
                                  <div className="flex justify-between items-start">
                                    <span className="text-sm text-white/50 font-light">Jurisdictions</span>
                                    <span className="text-base text-white/70 font-light text-right max-w-[60%]">{selectedCase.jurisdictions}</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl p-4 sm:p-6 border border-white/[0.06]">
                              <h3 className="text-base sm:text-lg font-light text-white mb-3 sm:mb-4">Quick Actions</h3>
                              <div className="space-y-3">
                                <button 
                                  onClick={handleBackToList}
                                  className="w-full bg-[#00A0E9]/20 hover:bg-[#00A0E9]/30 text-[#00A0E9] font-light py-3 px-4 rounded-xl text-sm sm:text-base transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-[#00A0E9]/20 flex items-center justify-center gap-2 min-h-[44px]"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                  </svg>
                                  <span>Back to Cases</span>
                                </button>
                                
                                <button className="w-full bg-white/[0.03] hover:bg-white/[0.06] text-white/70 hover:text-white/90 font-light py-3 px-4 rounded-xl text-sm sm:text-base transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.12] min-h-[44px]">
                                  Contact Team
                                </button>
                              </div>
                            </div>

                            {/* Case Summary */}
                            <div className="backdrop-blur-xl bg-gradient-to-br from-[#00A0E9]/10 to-white/[0.03] rounded-2xl p-6 border border-[#00A0E9]/20">
                              <h3 className="text-lg font-light text-white mb-3">Case Summary</h3>
                              <div className="text-sm text-white/60 font-light leading-relaxed">
                                This {selectedCase.crossBorder ? 'cross-border ' : ''}{selectedCase.type.toLowerCase()} case 
                                {selectedCase.status.includes('Settled') ? ' was successfully resolved' : ' is currently ongoing'} 
                                with a total value of {selectedCase.value}.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* Filter scrollbar */
        .filter-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 160, 233, 0.2) transparent;
        }
        
        .filter-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        
        .filter-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .filter-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 160, 233, 0.2);
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .filter-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 160, 233, 0.4);
        }

        /* Main content scrollbar */
        .minimal-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 160, 233, 0.3) rgba(255, 255, 255, 0.03);
        }
        
        .minimal-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .minimal-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
          backdrop-filter: blur(20px);
          margin: 8px 0;
        }
        
        .minimal-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, 
            rgba(0, 160, 233, 0.4) 0%, 
            rgba(0, 160, 233, 0.2) 50%, 
            rgba(0, 160, 233, 0.4) 100%
          );
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .minimal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, 
            rgba(0, 160, 233, 0.6) 0%, 
            rgba(0, 160, 233, 0.4) 50%, 
            rgba(0, 160, 233, 0.6) 100%
          );
          box-shadow: 0 0 10px rgba(0, 160, 233, 0.2);
        }

        .minimal-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }

        /* Smooth scroll behavior */
        .minimal-scrollbar {
          scroll-behavior: smooth;
        }

        /* Line clamp utilities for mobile */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Responsive line clamp */
        @media (max-width: 640px) {
          .sm\\:line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }

        /* Performance optimizations */
        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }

        /* Enhanced backdrop blur for better glassmorphism */
        .backdrop-blur-3xl {
          backdrop-filter: blur(64px) saturate(180%);
        }

        /* Clean focus states */
        input:focus {
          box-shadow: 
            0 0 0 1px rgba(0, 160, 233, 0.3),
            0 0 20px rgba(0, 160, 233, 0.1);
        }

        button:focus {
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.2),
            0 0 20px rgba(255, 255, 255, 0.05);
        }

        /* Minimalist text selection */
        ::selection {
          background: rgba(0, 160, 233, 0.2);
          color: white;
        }

        /* Glassmorphism text shadows for better readability */
        h1, h2, h3 {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        /* Clean typography */
        .font-light {
          font-weight: 300;
        }

        /* Responsive improvements */
        @media (max-width: 768px) {
          .backdrop-blur-3xl {
            backdrop-filter: blur(32px) saturate(150%);
          }
          
          .minimal-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .minimal-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          
          .filter-scrollbar::-webkit-scrollbar {
            height: 3px;
          }
        }

        /* Enhanced contrast for better accessibility */
        @media (prefers-contrast: high) {
          .bg-white\\/\\[0\\.06\\] {
            background-color: rgba(255, 255, 255, 0.12);
          }
          
          .border-white\\/\\[0\\.08\\] {
            border-color: rgba(255, 255, 255, 0.16);
          }
          
          .text-white\\/60 {
            color: rgba(255, 255, 255, 0.8);
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .minimal-scrollbar {
            scroll-behavior: auto;
          }
        }

        /* Better touch targets for mobile */
        @media (max-width: 768px) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Larger touch targets for filter buttons */
          .filter-scrollbar button {
            min-height: 40px;
            padding: 8px 12px;
          }
          
          /* Better spacing for mobile inputs */
          input {
            min-height: 44px;
            font-size: 16px; /* Prevents zoom on iOS */
          }
          
          /* Improved button spacing */
          .space-y-3 > * + * {
            margin-top: 12px;
          }
          
          /* Better modal padding on mobile */
          .p-4 {
            padding: 16px;
          }
        }

        /* Extra small devices */
        @media (max-width: 480px) {
          /* Even more compact on very small screens */
          .p-4 {
            padding: 12px;
          }
          
          /* Smaller gap for filters */
          .gap-2 {
            gap: 6px;
          }
          
          /* Reduce padding for filter buttons on very small screens */
          .filter-scrollbar button {
            padding: 6px 10px;
            font-size: 12px;
          }
        }

        /* Large touch devices (tablets) */
        @media (min-width: 769px) and (max-width: 1024px) {
          button {
            min-height: 48px;
          }
          
          input {
            min-height: 48px;
          }
        }

        /* Improved focus states for accessibility */
        button:focus-visible {
          outline: 2px solid rgba(0, 160, 233, 0.5);
          outline-offset: 2px;
        }

        input:focus-visible {
          outline: 2px solid rgba(0, 160, 233, 0.5);
          outline-offset: 2px;
        }

        /* Prevent iOS zoom on input focus */
        @supports (-webkit-touch-callout: none) {
          input {
            font-size: 16px;
          }
        }

        /* Better scroll behavior on mobile */
        .filter-scrollbar {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        /* Improve button press feedback on mobile */
        @media (hover: none) and (pointer: coarse) {
          button:active {
            transform: scale(0.95);
            transition-duration: 0.1s;
          }
        }

        /* Ensure content is fully scrollable */
        .min-h-0 {
          min-height: 0;
        }

        /* Prevent layout shift during loading */
        .grid > div {
          break-inside: avoid;
        }

        /* Smooth transitions for filter changes */
        .grid {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  )
}

export default CasesModal
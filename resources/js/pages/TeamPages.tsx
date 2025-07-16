import React from 'react'
import { Head } from '@inertiajs/react'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

const TeamPages: React.FC = () => {
  return (
    <>
      <Head title="Corporate Litigation Team" />
      <div className="relative w-full overflow-x-hidden">
        <Navbar />

        <main className="pt-20 pb-16">
          <section className="relative bg-black py-20">
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-10"></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#00A0E9] opacity-5 blur-3xl"></div>
              <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-[#00A0E9] opacity-5 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
                Corporate Litigation
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-300 text-lg mb-8 text-center">
                  Our expert litigation team resolves complex corporate disputes with strategic precision and industry-leading expertise.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Strategic Corporate Dispute Resolution</h2>
                    <p className="text-gray-700 mb-4">
                      In the complex arena of corporate litigation, experience and strategy are paramount. Our team brings decades of specialized expertise to every case, navigating the intricacies of commercial disputes with precision and foresight.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We understand that corporate litigation goes beyond legal arguments—it's about protecting business interests, shareholder value, and corporate reputation in an increasingly competitive landscape.
                    </p>
                    <p className="text-gray-700">
                      Our approach combines aggressive advocacy when needed with strategic negotiation when beneficial, always focused on achieving the optimal business outcome for our clients.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-xl h-full">
                      <img
                        src="/png/3rd.png"
                        alt="Corporate Litigation Team"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Meet Our Corporate Litigation Team</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-64 overflow-hidden">
                      <img
                        src="/png/team1.jpg"
                        alt="Sarah Johnson"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/400x400/gray/white?text=SJ";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">Sarah Johnson</h3>
                      <p className="text-blue-600 mb-3">Senior Litigation Partner</p>
                      <p className="text-gray-600 mb-4">
                        Former corporate counsel with 15+ years experience in high-stakes corporate litigation across multiple industries.
                      </p>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        View Profile →
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-64 overflow-hidden">
                      <img
                        src="/png/team2.jpg"
                        alt="Michael Chen"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/400x400/gray/white?text=MC";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">Michael Chen</h3>
                      <p className="text-blue-600 mb-3">Corporate Dispute Specialist</p>
                      <p className="text-gray-600 mb-4">
                        Specializes in shareholder disputes, M&A litigation, and corporate governance matters with notable success in cross-border cases.
                      </p>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        View Profile →
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-64 overflow-hidden">
                      <img
                        src="/png/team3.jpg"
                        alt="Rebecca Martinez"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/400x400/gray/white?text=RM";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">Rebecca Martinez</h3>
                      <p className="text-blue-600 mb-3">Commercial Litigation Partner</p>
                      <p className="text-gray-600 mb-4">
                        Expert in complex commercial contract disputes and business tort litigation with experience in multiple jurisdictions.
                      </p>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        View Profile →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button className="bg-[#00A0E9] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                    View All Team Members
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Corporate Litigation Practice Areas</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-100 rounded-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Shareholder & Partnership Disputes</h3>
                    <p className="text-gray-600 mb-4">
                      We represent majority and minority shareholders, partners, and investors in disputes involving:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                      <li>Breach of fiduciary duty claims</li>
                      <li>Shareholder derivative actions</li>
                      <li>Corporate freeze-outs and squeeze-outs</li>
                      <li>Contested mergers and acquisitions</li>
                      <li>Partnership dissolutions</li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Contract & Commercial Disputes</h3>
                    <p className="text-gray-600 mb-4">
                      Our team excels in resolving high-value contract disputes, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                      <li>Supply chain and distribution agreements</li>
                      <li>Licensing and intellectual property disputes</li>
                      <li>Joint venture conflicts</li>
                      <li>Service agreement breaches</li>
                      <li>Post-closing disputes</li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Corporate Governance</h3>
                    <p className="text-gray-600 mb-4">
                      We advise and represent boards, committees, and officers in matters involving:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                      <li>Director and officer liability claims</li>
                      <li>Corporate control contests</li>
                      <li>Regulatory investigations</li>
                      <li>Compliance disputes</li>
                      <li>Books and records demands</li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Business Torts & Fraud</h3>
                    <p className="text-gray-600 mb-4">
                      We handle complex business tort litigation including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                      <li>Fraud and misrepresentation claims</li>
                      <li>Tortious interference with contracts</li>
                      <li>Unfair competition</li>
                      <li>Trade secret misappropriation</li>
                      <li>Civil RICO actions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Ready to Discuss Your Corporate Litigation Needs?</h2>
                <p className="text-gray-300 mb-8">
                  Our litigation team is prepared to evaluate your case and develop a strategic approach tailored to your business objectives.
                </p>
                <button className="bg-[#00A0E9] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default TeamPages

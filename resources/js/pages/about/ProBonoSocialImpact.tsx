import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

interface Props {
    title: string;
    pageData: {
        heading: string;
        description: string;
    };
}

const ProBonoSocialImpact: React.FC<Props> = ({ title, pageData }) => {
    // Add CSS reset effect
    React.useEffect(() => {
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
    }, []);

    return (
        <>
            <Head title={title} />
            <div 
                className="relative w-full overflow-x-hidden min-h-screen"
                style={{
                    background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
                    margin: 0,
                    padding: 0,
                    marginTop: 0,
                    paddingTop: 0
                }}
            >
            <Navbar />
            
                <main className="w-full">
                    <div className="mb-16">
                        {/* Hero Video Section */}
                        <div className="w-full max-w-6xl mx-auto mt-20 mb-[150px] rounded-lg overflow-hidden shadow-lg px-4">
                            <div className="relative w-full h-[500px]">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="auto"
                                    className="w-full h-[500px] object-cover rounded-lg"
                                    poster="/placeholder.svg"
                                    onError={(e) => {
                                        const target = e.target as HTMLVideoElement
                                        const img = document.createElement("img")
                                        img.src = "/placeholder.svg"
                                        img.alt = "Video not available"
                                        img.className = "w-full h-[500px] object-cover rounded-lg"
                                        if (target.parentNode) {
                                            target.parentNode.replaceChild(img, target)
                                        }
                                    }}
                                >
                                    <source src="/videos/98191-647151551_small.mp4" type="video/mp4" />
                                    <img
                                        src="/placeholder.svg"
                                        alt="Video not available"
                                        className="w-full h-[500px] object-cover rounded-lg"
                                    />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Overlay with title and description */}
                                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                                    <div className="text-center px-6">
                                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                            <span className="text-[#00A0E9]">PRO BONO </span>
                                            <span className="text-white">& SOCIAL IMPACT</span>
                                        </h1>
                                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                                            {pageData.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Mission Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 uppercase">
                                    OUR SOCIAL RESPONSIBILITY
                                </h2>
                                <p className="text-gray-300 mb-6">
                                    At ARMA, we believe that access to justice is a fundamental right. 
                                    Our pro bono program reflects our commitment to using our legal 
                                    expertise to make a positive difference in our communities and 
                                    support those who need it most.
                                </p>
                                <p className="text-gray-300 mb-6">
                                    We dedicate significant resources to pro bono work, partnering 
                                    with charitable organizations, supporting public interest causes, 
                                    and providing legal assistance to individuals and groups who 
                                    cannot afford traditional legal services.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-r from-[#00A0E9]/20 to-transparent p-8 rounded-lg">
                                    <img 
                                        src="/images/about/social-impact-placeholder.jpg" 
                                        alt="Social Impact"
                                        className="w-full h-auto rounded-lg"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/placeholder.svg";
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Impact Areas */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            <div className="text-center p-6 bg-gray-800/50 rounded-lg">
                                <div className="w-16 h-16 bg-[#00A0E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">🏠</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2 uppercase">HOUSING RIGHTS</h3>
                                <p className="text-gray-300 text-sm">
                                    Supporting tenants and homeowners facing housing disputes and evictions.
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gray-800/50 rounded-lg">
                                <div className="w-16 h-16 bg-[#00A0E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">👨‍👩‍👧‍👦</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2 uppercase">FAMILY LAW</h3>
                                <p className="text-gray-300 text-sm">
                                    Providing legal assistance for custody, domestic violence, and family matters.
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gray-800/50 rounded-lg">
                                <div className="w-16 h-16 bg-[#00A0E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">🛡️</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2 uppercase">HUMAN RIGHTS</h3>
                                <p className="text-gray-300 text-sm">
                                    Advocating for civil liberties and fundamental human rights protections.
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gray-800/50 rounded-lg">
                                <div className="w-16 h-16 bg-[#00A0E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">🌱</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2 uppercase">ENVIRONMENTAL</h3>
                                <p className="text-gray-300 text-sm">
                                    Supporting environmental protection and sustainability initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Programs Section */}
                <section className="py-16 bg-black/20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                        <h2 className="text-3xl font-bold text-center text-white mb-12 uppercase">
                            OUR PRO BONO PROGRAMS
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-800/30 p-8 rounded-lg">
                                <h3 className="text-2xl font-semibold text-white mb-4 uppercase">LEGAL CLINICS</h3>
                                <p className="text-gray-300 mb-4">
                                    Monthly legal clinics providing free consultations and advice 
                                    to members of the community on various legal matters.
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#00A0E9] rounded-full mr-3"></span>
                                        Free initial consultations
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#00A0E9] rounded-full mr-3"></span>
                                        Legal document review
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#00A0E9] rounded-full mr-3"></span>
                                        Rights education workshops
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-800/30 p-8 rounded-lg">
                                <h3 className="text-2xl font-semibold text-white mb-4 uppercase">CHARITY PARTNERSHIPS</h3>
                                <p className="text-gray-300 mb-4">
                                    Long-term partnerships with registered charities and non-profit 
                                    organizations to provide ongoing legal support and governance advice.
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#00A0E9] rounded-full mr-3"></span>
                                        Charity registration assistance
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#00A0E9] rounded-full mr-3"></span>
                                        Governance and compliance
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#00A0E9] rounded-full mr-3"></span>
                                        Contract and policy review
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact Stats */}
                <section className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                        <h2 className="text-3xl font-bold text-center text-white mb-12 uppercase">
                            OUR IMPACT
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-[#00A0E9] mb-2">500+</div>
                                <p className="text-gray-300">Pro Bono Hours Annually</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#00A0E9] mb-2">50+</div>
                                <p className="text-gray-300">Families Helped</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#00A0E9] mb-2">25+</div>
                                <p className="text-gray-300">Charity Partners</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#00A0E9] mb-2">10+</div>
                                <p className="text-gray-300">Years of Community Service</p>
                            </div>
                        </div>
                    </div>
                </section>
                </main>
            <Footer />
            </div>
        </>
    );
};

export default ProBonoSocialImpact;
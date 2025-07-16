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

const EqualityDiversityInclusion: React.FC<Props> = ({ title, pageData }) => {
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
            
                {/* Header Section with Video */}
                <div className="w-full max-w-6xl mx-auto mt-20 mb-[150px] rounded-lg overflow-hidden shadow-lg px-4">
                    <div className="w-full h-[350px] bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <video 
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-[350px] object-cover rounded-lg"
                            src="/videos/1236-144355017_small.mp4"
                        >
                            <div className="w-full h-[350px] bg-gray-800 rounded-lg flex items-center justify-center">
                                <p className="text-gray-400">Equality, Diversity & Inclusion Video</p>
                            </div>
                        </video>
                        
                        {/* Overlay with title and description */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                            <div className="text-center px-6">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    <span className="text-[#00A0E9]">EQUALITY, DIVERSITY </span>
                                    <span className="text-white">& INCLUSION</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                                    {pageData.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 uppercase">
                                    OUR COMMITMENT TO INCLUSION
                                </h2>
                                <p className="text-gray-300 mb-6">
                                    At ARMA, we believe that diversity drives innovation and excellence. 
                                    Our commitment to equality, diversity, and inclusion is fundamental 
                                    to our values and integral to our success as a modern law firm.
                                </p>
                                <p className="text-gray-300 mb-6">
                                    We are dedicated to creating an environment where everyone can thrive, 
                                    regardless of their background, identity, or personal circumstances. 
                                    This commitment extends to our hiring practices, workplace culture, 
                                    client service, and community engagement.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-r from-[#00A0E9]/20 to-transparent p-8 rounded-lg">
                                    <img 
                                        src="/images/about/diversity-placeholder.jpg" 
                                        alt="Diversity and Inclusion"
                                        className="w-full h-auto rounded-lg"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/placeholder.svg";
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Values Grid */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-gray-800/50 p-8 rounded-lg">
                                <div className="w-16 h-16 bg-[#00A0E9] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-white font-bold text-xl">🤝</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4 uppercase">INCLUSIVE CULTURE</h3>
                                <p className="text-gray-300">
                                    We foster a workplace where all voices are heard, respected, 
                                    and valued, creating opportunities for everyone to contribute 
                                    their unique perspectives.
                                </p>
                            </div>
                            <div className="bg-gray-800/50 p-8 rounded-lg">
                                <div className="w-16 h-16 bg-[#00A0E9] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-white font-bold text-xl">⚖️</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4 uppercase">EQUAL OPPORTUNITIES</h3>
                                <p className="text-gray-300">
                                    We provide equal opportunities for career advancement, 
                                    professional development, and leadership roles across 
                                    all levels of our organization.
                                </p>
                            </div>
                            <div className="bg-gray-800/50 p-8 rounded-lg">
                                <div className="w-16 h-16 bg-[#00A0E9] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-white font-bold text-xl">🌍</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4 uppercase">COMMUNITY IMPACT</h3>
                                <p className="text-gray-300">
                                    We actively engage with diverse communities and support 
                                    initiatives that promote equality and social justice 
                                    in the broader society.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Initiatives Section */}
                <section className="py-16 bg-black/20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                        <h2 className="text-3xl font-bold text-center text-white mb-12 uppercase">
                            OUR EDI INITIATIVES
                        </h2>
                        <div className="space-y-8">
                            <div className="bg-gray-800/30 p-8 rounded-lg border-l-4 border-[#00A0E9]">
                                <h3 className="text-2xl font-semibold text-white mb-4 uppercase">MENTORSHIP PROGRAMS</h3>
                                <p className="text-gray-300">
                                    Comprehensive mentorship and sponsorship programs designed to support 
                                    career development for underrepresented groups within the legal profession.
                                </p>
                            </div>
                            <div className="bg-gray-800/30 p-8 rounded-lg border-l-4 border-[#00A0E9]">
                                <h3 className="text-2xl font-semibold text-white mb-4 uppercase">TRAINING & EDUCATION</h3>
                                <p className="text-gray-300">
                                    Regular training sessions on unconscious bias, inclusive leadership, 
                                    and cultural competency to ensure our team is equipped to serve 
                                    clients from all backgrounds effectively.
                                </p>
                            </div>
                            <div className="bg-gray-800/30 p-8 rounded-lg border-l-4 border-[#00A0E9]">
                                <h3 className="text-2xl font-semibold text-white mb-4 uppercase">DIVERSE PARTNERSHIPS</h3>
                                <p className="text-gray-300">
                                    Strategic partnerships with diverse bar associations, law schools, 
                                    and community organizations to expand our network and create 
                                    opportunities for diverse talent.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default EqualityDiversityInclusion;
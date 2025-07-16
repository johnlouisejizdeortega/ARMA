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

const SpecialistAiTech: React.FC<Props> = ({ title, pageData }) => {
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
                
                {/* Header Section with Image/Video */}
                <div className="w-full max-w-6xl mx-auto mt-20 mb-[150px] rounded-lg overflow-hidden shadow-lg px-4">
                    <div className="w-full h-[350px] bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <video 
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-[350px] object-cover rounded-lg"
                            src="/videos/Video_Ready_Link_Provided.mp4"
                        >
                            <div className="w-full h-[350px] bg-gray-800 rounded-lg flex items-center justify-center">
                                <p className="text-gray-400">AI Technology Video</p>
                            </div>
                        </video>
                        
                        {/* Overlay with title and description */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                            <div className="text-center px-6">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    <span className="text-[#00A0E9]">SPECIALISED </span>
                                    <span className="text-white">LEGAL AI TECH</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                                    {pageData.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6 uppercase">
                                ENHANCING CLIENT OUTCOMES THROUGH AI-POWERED LITIGATION
                            </h2>
                            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                                We employ a sophisticated suite of AI solutions daily, embedding them across all departments 
                                to refine our strategies and augment our success.
                            </p>
                        </div>

                        {/* AI Capabilities Grid */}
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                            <div className="bg-gray-800/30 p-8 rounded-lg border-l-4 border-[#00A0E9]">
                                <h3 className="text-2xl font-semibold text-white mb-4 uppercase">ACCELERATE CASE ANALYSIS</h3>
                                <p className="text-gray-300">
                                    By leveraging AI-powered e-discovery and document review, we can sift through vast 
                                    quantities of information with unparalleled speed and accuracy. This allows our legal 
                                    teams to swiftly identify critical evidence and build a robust case foundation from the outset.
                                </p>
                            </div>
                            <div className="bg-gray-800/30 p-8 rounded-lg border-l-4 border-[#00A0E9]">
                                <h3 className="text-2xl font-semibold text-white mb-4 uppercase">SHARPEN LEGAL STRATEGY</h3>
                                <p className="text-gray-300">
                                    Our use of predictive analytics enables us to assess the merits of a case with greater depth, 
                                    identifying trends and potential outcomes based on a comprehensive analysis of case law and 
                                    judicial history. This data-driven approach informs our strategic decisions.
                                </p>
                            </div>
                            <div className="bg-gray-800/30 p-8 rounded-lg border-l-4 border-[#00A0E9]">
                                <h3 className="text-2xl font-semibold text-white mb-4 uppercase">STRENGTHEN CASE NARRATIVES</h3>
                                <p className="text-gray-300">
                                    AI tools assist in the meticulous construction and stress-testing of our case narratives. 
                                    By identifying potential weaknesses and offering alternative perspectives, we can fortify 
                                    our positions and anticipate opposing counsel's tactics with greater precision.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professional Development Section */}
                <section className="py-16 bg-black/20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 uppercase">
                                    DEVELOPING THE NEXT GENERATION OF LITIGATORS
                                </h2>
                                <p className="text-gray-300 mb-6">
                                    Beyond immediate case-related benefits, Arma Litigation is committed to the continual 
                                    growth of our team. We view AI as a revolutionary tool for professional development, 
                                    enabling us to upskill our staff faster than ever before.
                                </p>
                                <p className="text-gray-300 mb-6">
                                    Through AI-driven training modules and personalized learning paths, our team members 
                                    gain exposure to a breadth of legal scenarios and challenges, honing their skills in 
                                    a dynamic and adaptive environment.
                                </p>
                                <p className="text-gray-300">
                                    This investment in our people ensures that every member of our firm is equipped with 
                                    the cutting-edge knowledge and capabilities necessary to excel.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-r from-[#00A0E9]/20 to-transparent p-8 rounded-lg">
                                    <video 
                                        src="/videos/AI Powered Tech Video 1 (1).mp4"
                                        className="w-full h-auto rounded-lg"
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Innovation Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <div className="bg-gradient-to-r from-[#00A0E9]/20 to-transparent p-8 rounded-lg">
                                    <video 
                                        src="/videos/Video_Ready_Androids_Only.mp4"
                                        className="w-full h-auto rounded-lg"
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 uppercase">
                                    PIONEERING THE FUTURE OF LEGAL TECHNOLOGY
                                </h2>
                                <p className="text-gray-300 mb-6">
                                    Our commitment to innovation extends beyond the adoption of existing technologies. 
                                    We are actively engaged in the development of our own proprietary AI platform.
                                </p>
                                <p className="text-gray-300 mb-6">
                                    This bespoke system is being engineered to meet the unique demands of our practice 
                                    and the specific needs of our clients' cases. By building our own technology, we are 
                                    not only enhancing our current service offering but also shaping the future of 
                                    litigation support and client representation.
                                </p>
                                <div className="bg-[#00A0E9]/10 p-6 rounded-lg border border-[#00A0E9]/30">
                                    <p className="text-white font-semibold text-lg">
                                        "At Arma Litigation, the integration of artificial intelligence is a deliberate 
                                        and strategic initiative. It is an investment in our clients, our team, and our 
                                        unwavering commitment to victory. We are not just adopting the future; we are building it."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Technologies Section */}
                <section className="py-16 bg-black/20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                        <h2 className="text-3xl font-bold text-center text-white mb-12 uppercase">
                            OUR AI-POWERED ADVANTAGE
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center p-6 bg-gray-800/50 rounded-lg">
                                <div className="w-16 h-16 bg-[#00A0E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">📊</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3 uppercase">E-DISCOVERY</h3>
                                <p className="text-gray-300 text-sm">
                                    AI-powered document review with unparalleled speed and accuracy.
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gray-800/50 rounded-lg">
                                <div className="w-16 h-16 bg-[#00A0E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">🎯</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3 uppercase">PREDICTIVE ANALYTICS</h3>
                                <p className="text-gray-300 text-sm">
                                    Data-driven case assessment based on comprehensive legal analysis.
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gray-800/50 rounded-lg">
                                <div className="w-16 h-16 bg-[#00A0E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">🧠</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3 uppercase">TRAINING MODULES</h3>
                                <p className="text-gray-300 text-sm">
                                    AI-driven professional development and personalized learning paths.
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gray-800/50 rounded-lg">
                                <div className="w-16 h-16 bg-[#00A0E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">⚙️</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3 uppercase">PROPRIETARY PLATFORM</h3>
                                <p className="text-gray-300 text-sm">
                                    Custom-built AI system tailored to our practice and client needs.
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

export default SpecialistAiTech;
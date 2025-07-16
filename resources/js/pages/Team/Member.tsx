"use client"

import React, { useState, useRef } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ContactSection from "@/components/landing/ContactSection";
import { useScrollAnimation, useHeroAnimation } from "@/lib/animation";
import { getTeamMemberBySlug } from '@/data/team-members';

interface TeamMemberPageProps {
    slug: string;
}

const TeamMemberPage: React.FC<TeamMemberPageProps> = ({ slug }) => {
    // Get team member from the data file
    const member = getTeamMemberBySlug(slug);

    // Refs for animation sections
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Apply animations
    useHeroAnimation(heroRef);
    useScrollAnimation(contentRef, { animation: 'slideUp' });

    // Handle case where member is not found
    if (!member) {
        return (
            <>
                <Head title="Team Member Not Found - ARMA Legal" />
                <div className="relative w-full overflow-x-hidden" style={{ 
                    background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)" 
                }}>
                    <Navbar />
                    <main className="w-full min-h-screen flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-white mb-4">Team Member Not Found</h1>
                            <p className="text-gray-400 mb-8">The team member you're looking for doesn't exist.</p>
                            <Link 
                                href="/team"
                                className="bg-[#00A0E9] hover:bg-[#0085C3] text-white py-2 px-6 rounded text-sm transition-colors"
                            >
                                Back to Team
                            </Link>
                        </div>
                    </main>
                    <Footer />
                </div>
            </>
        );
    }

    return (
        <>
            <Head title={`${member.firstName} ${member.lastName} | Our Team - ARMA Legal`}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>

            <div className="relative w-full overflow-x-hidden" style={{ 
                background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)" 
            }}>
                <Navbar />
                
                <main className="w-full">
                    {/* Empty space before hero section */}
                    <div className="h-16"></div>
                    
                    {/* Hero Section with member image overlay */}
                    <header ref={heroRef} className="relative bg-black h-80 max-w-6xl mx-auto flex items-center justify-center rounded-lg overflow-hidden">
                        {/* Background video - looped, muted, covers section */}
                        <video
                          className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg z-0"
                          src="/videos/4779866-hd_1920_1080_30fps.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          aria-label="Law firm pillars background"
                        />
                        {/* Team Member Image Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center animate-content">
                            <div className="relative h-full w-full max-w-md flex items-center justify-center">
                                <div className="h-64 w-64 rounded-full overflow-hidden border-4 border-[#00A0E9] shadow-2xl">
                                    <img 
                                        src={member.image || '/images/avatar-placeholder.jpg'} 
                                        alt={`Portrait of ${member.firstName} ${member.lastName}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/images/avatar-placeholder.jpg';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Member Content */}
                    <div ref={contentRef} className="w-full max-w-6xl mx-auto px-4 mt-20 mb-20">
                        <div className="bg-transparent rounded-lg overflow-hidden">
                            <div className="md:flex gap-8">
                                {/* Social Media Icons Column */}
                                <div className="md:w-1/4 animate-content">
                                    <div className="flex flex-col space-y-4">
                                        {/* Name and Position */}
                                        <div className="mb-6">
                                            <h2 className="text-3xl font-bold text-white mb-2">{member.firstName} {member.lastName}</h2>
                                            <p className="text-[#00A0E9] font-medium uppercase tracking-wider text-sm">{member.jobTitle}</p>
                                        </div>
                                        
                                        <a href={member.linkedin} aria-label="LinkedIn" className="text-white hover:text-[#00A0E9] transition-colors flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                            <span className="text-xs">LinkedIn</span>
                                        </a>
                                        
                                        {/* Contact Information */}
                                        <div className="mt-8 pt-8 border-t border-gray-800">
                                            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                                            <div className="space-y-2">
                                                {member.email && (
                                                    <p className="text-gray-400 text-sm leading-loose">
                                                        <strong className="text-white">Email:</strong> <a href={`mailto:${member.email}`} className="text-[#00A0E9] hover:underline">{member.email}</a>
                                                    </p>
                                                )}
                                                {member.phone && (
                                                    <p className="text-gray-400 text-sm leading-loose">
                                                        <strong className="text-white">Phone:</strong> <a href={`tel:${member.phone}`} className="text-[#00A0E9] hover:underline">{member.phone}</a>
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <Link 
                                            href="/team"
                                            className="inline-flex items-center bg-[#00A0E9] hover:bg-[#0085C3] text-white py-2 px-6 rounded text-sm transition-colors mt-8"
                                        >
                                            ← Back to Team
                                        </Link>
                                    </div>
                                </div>
                                
                                {/* Member Details - with transparent background */}
                                <div className="md:w-3/4 text-left mt-8 md:mt-0 animate-content">
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold text-white mb-4">Biography</h2>
                                        <div className="prose max-w-none">
                                           <p className="text-gray-400 text-sm leading-loose whitespace-pre-line">{member.biography}</p>
                                        </div>
                                    </div>

                                    {/* Education */}
                                    {member.education && (
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
                                            <p className="text-gray-400 text-sm leading-loose">{member.education}</p>
                                        </div>
                                    )}

                                    {/* Practice Areas */}
                                    {member.practiceAreas && (
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold text-white mb-4">Practice Areas</h3>
                                            <p className="text-gray-400 text-sm leading-loose">{member.practiceAreas}</p>
                                        </div>
                                    )}

                                    {/* Fun Fact */}
                                    {member.funFact && (
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold text-white mb-4">Fun Fact / Hobbies</h3>
                                            <p className="text-gray-400 text-sm leading-loose">{member.funFact}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Section */}
                    <ContactSection />
                </main>

                <Footer />
            </div>
        </>
    );
};

export default TeamMemberPage;
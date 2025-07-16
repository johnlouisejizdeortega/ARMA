"use client"

import React, { useState, useRef } from 'react';
import { Head, Link } from '@inertiajs/react';
import EmptyState from '@/components/EmptyState';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CasesSection from "@/components/landing/CasesSection";
import ContactSection from "@/components/landing/ContactSection";
import { useScrollAnimation, useHeroAnimation } from "@/lib/animation";
import { getAllTeamMembers } from '@/data/team-members';

const TeamPage: React.FC = () => {
    // Get team members from the data file and sort by last name
    const teamMembers = getAllTeamMembers().slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
    
    // Optional: Add loading state simulation
    const [isLoading, setIsLoading] = React.useState(false);

    // Refs for animation sections
    const heroRef = useRef<HTMLDivElement>(null);
    const teamGridRef = useRef<HTMLDivElement>(null);

    // Apply animations
    useHeroAnimation(heroRef);
    useScrollAnimation(teamGridRef, { animation: 'stagger' });

    return (
        <>
            <Head title="Professionals - ARMA Legal">
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
                    
                    {/* Hero Section with improved accessibility - adjusted dimensions with border radius */}
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
                        <div className="relative z-10 text-center px-4 animate-content">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                <span className="text-[#00A0E9]">OUR</span>
                                <span className="text-white"> PROFESSIONALS</span>
                            </h1>
                        </div>
                    </header>

                    {/* Team Members Section */}
                    <div className="w-full max-w-6xl mx-auto px-4 mt-20 mb-[150px]">
                        {isLoading ? (
                            <LoadingSkeleton count={3} /> // Show while loading
                        ) : teamMembers.length === 0 ? (
                            <EmptyState 
                                title="No Team Members Found"
                                description="Our team profiles are being updated"
                                action={
                                    <Link 
                                        href="/contact" 
                                        className="mt-4 inline-block bg-[#00A0E9] text-white px-4 py-2 rounded"
                                    >
                                        Contact Us
                                    </Link>
                                }
                            />
                        ) : (
                            <div ref={teamGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                                {teamMembers.map((member) => (
                                    <div key={member.id} className="animate-item group">
                                        <Link href={`/team/${member.slug}`} className="block">
                                            {/* Image with rounded corners positioned in front - increased height */}
                                            <div className="relative z-10 mx-auto mb-4 overflow-hidden rounded-lg transition-all duration-700 ease-in-out group-hover:shadow-[0_0_30px_rgba(0,160,233,0.8)]">
                                                <img 
                                                    src={member.image || '/images/avatar-placeholder.jpg'} 
                                                    alt={`Portrait of ${member.firstName} ${member.lastName}`}
                                                    className="w-full h-80 object-cover transition-all duration-700 ease-in-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/images/avatar-placeholder.jpg';
                                                    }}
                                                />
                                            </div>
                                        </Link>
                                        
                                        {/* Content - same width as image */}
                                        <div className="bg-transparent text-left">
                                            <h2 className="text-xl font-bold text-white mb-1 transition-all duration-500 ease-in-out group-hover:[text-shadow:0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(255,255,255,0.6),0_0_60px_rgba(255,255,255,0.4)]">
                                                {member.firstName} {member.lastName}
                                            </h2>
                                            <p className="text-[#00A0E9] font-medium uppercase tracking-wider text-sm mb-4 transition-all duration-500 ease-in-out group-hover:[text-shadow:0_0_20px_rgba(0,160,233,1),0_0_40px_rgba(0,160,233,0.8),0_0_60px_rgba(0,160,233,0.6)]">{member.jobTitle}</p>
                                            <p className="text-gray-400 text-xs leading-loose mb-6 line-clamp-2 transition-all duration-500 ease-in-out group-hover:[text-shadow:0_0_15px_rgba(156,163,175,0.8),0_0_30px_rgba(156,163,175,0.6),0_0_45px_rgba(156,163,175,0.4)]">{member.biography}</p>
                                            
                                            {/* Social Media Icon - left aligned */}
                                            <div className="flex justify-start mt-2">
                                                <a href={member.linkedin} aria-label="LinkedIn" className="text-white hover:text-[#00A0E9] transition-all duration-300 ease-in-out hover:scale-105 rounded-full p-1 group-hover:[filter:drop-shadow(0_0_10px_rgba(0,160,233,0.8))_drop-shadow(0_0_20px_rgba(0,160,233,0.6))_drop-shadow(0_0_30px_rgba(0,160,233,0.4))]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* Cases Section - Import from CasesSection component */}
                    <CasesSection />
                    
                    {/* Contact Section */}
                    <ContactSection />
                </main>

                <Footer />
            </div>
        </>
    );
};

export default TeamPage;
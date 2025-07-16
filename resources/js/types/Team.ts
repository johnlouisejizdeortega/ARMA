// resources/js/Types/Team.ts
export interface TeamMember {
    id: number;
    slug: string; // Add this for member detail URLs
    name: string;
    position: string;
    bio: string;
    image: string;
    fullBio?: string; // For detail page
    email?: string;
    phone?: string;
    areasOfPractice?: string[];
    education?: {
        degree: string;
        institution: string;
        year: number;
    }[];
    memberships?: string[];
    languages?: string[];
    notableCases?: { // Add this for detail page
        title: string;
        description: string;
        year: number;
    }[];
}

export interface TeamResponse {
    data: TeamMember[];
    meta?: {
        current_page: number;
        total_pages: number;
        per_page: number;
        total_count: number;
    };
}

// For the team listing page
export interface TeamPageProps {
    teamMembers: TeamMember[];
}

// For the individual member page
export interface TeamMemberPageProps {
    member: TeamMember;
}
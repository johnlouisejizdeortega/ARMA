<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Show the Specialist AI Tech page
     */
    public function specialistAiTech(): Response
    {
        return Inertia::render('about/SpecialistAiTech', [
            'title' => 'Specialised Legal AI Tech',
            'pageData' => [
                'heading' => 'Cutting-Edge Legal Technology',
                'description' => 'Discover how ARMA leverages advanced AI and technology to deliver superior legal services.'
            ]
        ]);
    }

    /**
     * Show the Equality, Diversity & Inclusion page
     */
    public function equalityDiversityInclusion(): Response
    {
        return Inertia::render('about/EqualityDiversityInclusion', [
            'title' => 'Equality, Diversity & Inclusion',
            'pageData' => [
                'heading' => 'Our Commitment to Equality',
                'description' => 'Learn about our dedication to fostering an inclusive environment for all.'
            ]
        ]);
    }

    /**
     * Show the Pro Bono & Social Impact page
     */
    public function proBonoSocialImpact(): Response
    {
        return Inertia::render('about/ProBonoSocialImpact', [
            'title' => 'Pro Bono & Social Impact',
            'pageData' => [
                'heading' => 'Making a Difference',
                'description' => 'Discover our commitment to pro bono work and positive social impact.'
            ]
        ]);
    }
}
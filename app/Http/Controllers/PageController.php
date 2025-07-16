<?php

// app/Http/Controllers/PageController.php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function support(): Response
    {
        return Inertia::render('Support', [
            'title' => 'Customer Support'
        ]);
    }

    public function delivery(): Response
    {
        return Inertia::render('Delivery', [
            'title' => 'Delivery Information'
        ]);
    }

    public function terms(): Response
    {
        return Inertia::render('Legal', [
            'title' => 'Terms & Conditions',
            'content' => 'terms'
        ]);
    }

    public function privacy(): Response
    {
        return Inertia::render('Legal', [
            'title' => 'Privacy Policy',
            'content' => 'privacy'
        ]);
    }
}
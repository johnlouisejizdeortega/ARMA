<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class CareersController extends Controller
{
    public function index()
    {
        return Inertia::render('careers');
    }
}

<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class TrainingContractsController extends Controller
{
    public function index()
    {
        return Inertia::render('training-contracts');
    }
}

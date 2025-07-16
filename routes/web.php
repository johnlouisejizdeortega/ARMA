<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| This controller handles the homepage and other public-facing pages that don't require authentication
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CareersController;
use App\Http\Controllers\TrainingContractsController;
use App\Http\Controllers\AboutController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/aboutpage', function() {
    return Inertia::render('AboutPage');
})->name('aboutpage');

// About sub-pages routes
Route::get('/about/our-specialist-ai-tech', [AboutController::class, 'specialistAiTech'])->name('about.specialist-ai-tech');
Route::get('/about/equality-diversity-and-inclusion', [AboutController::class, 'equalityDiversityInclusion'])->name('about.equality-diversity-inclusion');
Route::get('/about/pro-bono-social-impact', [AboutController::class, 'proBonoSocialImpact'])->name('about.pro-bono-social-impact');

// Add services route
Route::get('/services', function() {
    return Inertia::render('Services');
})->name('services');

// Add TeamPages route
Route::get('/teampages', function() {
    return Inertia::render('TeamPages');
})->name('teampages');

// News Routes
Route::get('/news/{id}', [HomeController::class, 'news'])->name('news.show')->where('id', '[1-6]');

// Service Detail Routes
Route::get('/service-detail/1', function() {
    return Inertia::render('ServiceDetail1');
})->name('service-detail.1');

Route::get('/service-detail/2', function() {
    return Inertia::render('ServiceDetail2');
})->name('service-detail.2');

Route::get('/service-detail/3', function() {
    return Inertia::render('ServiceDetail3');
})->name('service-detail.3');

/*
|--------------------------------------------------------------------------
| Team Routes - Now using TSX data file instead of database
|--------------------------------------------------------------------------
*/

// Team index page - no longer needs controller
Route::get('/team', function() {
    return Inertia::render('Team/Index');
})->name('team.index');

// Individual team member page - no longer needs controller
Route::get('/team/{slug}', function($slug) {
    return Inertia::render('Team/Member', [
        'slug' => $slug
    ]);
})->name('team.show');

/*
|--------------------------------------------------------------------------
| This controller handles Login Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\LoginController;

Route::get('/login', [LoginController::class, 'showLoginForm'])->name('auth.login');

/*
|--------------------------------------------------------------------------
| This controller handles Register Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\RegisterController;

Route::get('/register', [RegisterController::class, 'showRegistrationForm'])->name('auth.register');

/*
|--------------------------------------------------------------------------
| This controller handles All Admin Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Admin\AdminDashboardController;

Route::get('/admin/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');

/*
|--------------------------------------------------------------------------
| Additional Routes
|--------------------------------------------------------------------------
*/

Route::get('/Terms', function () {
    return Inertia::render('TermsOfBusiness');
});

Route::get('/Policy', function () {
    return Inertia::render('CookiePolicy');
});

Route::get('/Charges', function () {
    return Inertia::render('OurCharges');
});

Route::get('/privacy', function () {
    return Inertia::render('PrivacyStatement');
});

Route::get('/Use', function () {
    return Inertia::render('TermsOfUse');
});

// Add new Careers and Training Contracts routes using controllers
Route::get('/careers', [CareersController::class, 'index'])->name('careers');
Route::get('/training-contracts', [TrainingContractsController::class, 'index'])->name('training-contracts');

// Add About1, About2, About3 routes for design selection
Route::get('/about1', function() {
    return Inertia::render('About1');
})->name('about1');

Route::get('/about2', function() {
    return Inertia::render('About2');
})->name('about2');

Route::get('/about3', function() {
    return Inertia::render('About3');
})->name('about3');

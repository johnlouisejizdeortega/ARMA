<?php

use App\Http\Controllers\Api\ConsultationController;
use App\Http\Controllers\Api\ContactMessageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Consultation request endpoint
Route::post('/consultation-request', [ConsultationController::class, 'store']);

// Contact message endpoint
Route::post('/contact-message', [ContactMessageController::class, 'store']);
<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/MarketingPage');
})->name('home');
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');




require __DIR__.'/auth.php';

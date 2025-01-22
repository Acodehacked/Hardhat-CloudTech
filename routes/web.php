<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/MarketingPage');
})->name('home');


Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);
    Route::get('/login', function () {
        return Inertia::render('sign-in-side/SignInSide');
    })->name('login');
    Route::permanentRedirect ('/dashboard', '/login');
Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);
    Route::get('/login', function () {
        return Inertia::render('sign-in-side/SignInSide');
    })->name('login');
    Route::permanentRedirect ('/dashboard', '/login');
    Route::permanentRedirect ('/admin', '/login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    //     Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
    //         ->name('password.request');

    //     Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
    //         ->name('password.email');

    //     Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
    //         ->name('password.reset');

    //     Route::post('reset-password', [NewPasswordController::class, 'store'])
    //         ->name('password.store');
});
    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    //     Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
    //         ->name('password.request');

    //     Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
    //         ->name('password.email');

    //     Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
    //         ->name('password.reset');

    //     Route::post('reset-password', [NewPasswordController::class, 'store'])
    //         ->name('password.store');
});


require __DIR__.'/auth.php';
require __DIR__.'/master_admin.php';

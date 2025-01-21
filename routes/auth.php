<?php

use App\Http\Controllers\Admin\AdministratorController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\Utils\ImageUploaderController;
use App\Http\Middleware\AdminMiddleware;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);
    Route::get('/login', function () {
        return Inertia::render('sign-in-side/SignInSide');
    })->name('login');
    Route::permanentRedirect ('/dashboard', '/login');
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
Route::middleware(['auth'])->group(function () {
    //Master Admin Panel
    Route::middleware(AdminMiddleware::class)->group(function () {
        Route::get('/admin/administrators', [CompanyController::class, 'index'])->name('admininistrators.index');
        Route::get('/admin/administrators/create', [CompanyController::class, 'show'])->name('admininistrators.show');
        Route::put('/admin/administrators/create', [CompanyController::class, 'store'])->name('admininistrators.create');
    });
    Route::permanentRedirect ('/admin/login', '/dashboard');
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::post('/image-upload', [ImageUploaderController::class, 'store'])->name('image-upload');
    
    Route::get('/projects',[ProjectController::class,'index'])->name('projects.view');
    //     Route::get('verify-email', EmailVerificationPromptController::class)
    //         ->name('verification.notice');

    //     Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
    //         ->middleware(['signed', 'throttle:6,1'])
    //         ->name('verification.verify');

    //     Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    //         ->middleware('throttle:6,1')
    //         ->name('verification.send');

    //     Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
    //         ->name('password.confirm');

    //     Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    //     Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});

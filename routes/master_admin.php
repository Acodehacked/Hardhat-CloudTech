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

Route::middleware(['auth'])->group(function () {
    Route::middleware(AdminMiddleware::class)->group(function () {
        Route::get('/companies', [CompanyController::class, 'index'])->name('admininistrators.index');
        Route::post('/companies', [CompanyController::class, 'table']);
        Route::delete('/companies/{company}', [CompanyController::class, 'delete']);
        Route::get('/companies/create', [CompanyController::class, 'show'])->name('admininistrators.show');
        Route::put('/companies/create', [CompanyController::class, 'store'])->name('admininistrators.create');
    });
});

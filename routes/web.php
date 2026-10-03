<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ZiinaTestController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

// Temporary, one-off: Hostinger's SSH shell only has an old PHP CLI
// binary, so migrations can't run via `php artisan migrate` there.
// Visiting this once (over HTTP, which correctly uses PHP 8.4) runs
// them instead. Remove this route once the database is migrated.
Route::get('/system/deploy-migrate/{secret}', function (string $secret) {
    if (! config('app.deploy_secret') || ! hash_equals(config('app.deploy_secret'), $secret)) {
        abort(403);
    }

    Artisan::call('migrate', ['--force' => true]);

    return '<pre>'.e(Artisan::output()).'</pre>';
});

Route::get('/terms', function () {
    return Inertia::render('Terms');
})->name('terms');

Route::get('/privacy', function () {
    return Inertia::render('Privacy');
})->name('privacy');

Route::prefix('payments/ziina')->name('ziina.')->group(function () {
    Route::get('/test', [ZiinaTestController::class, 'test'])->name('test');
    Route::get('/success', [ZiinaTestController::class, 'success'])->name('success');
    Route::get('/cancel', [ZiinaTestController::class, 'cancel'])->name('cancel');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

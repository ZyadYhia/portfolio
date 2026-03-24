\<?php

    use App\Http\Controllers\ContactController;
    use App\Http\Controllers\PageController;
    use Illuminate\Support\Facades\Route;
    use Laravel\Fortify\Features;

    // Route::inertia('/', 'welcome', [
    //     'canRegister' => Features::enabled(Features::registration()),
    // ])->name('home');
    Route::get('/', [PageController::class, 'index'])->name('home');
    Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');

    Route::middleware(['auth', 'verified'])->group(function () {
        Route::inertia('dashboard', 'dashboard')->name('dashboard');
    });

    require __DIR__ . '/settings.php';

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SensorController;

Route::post('/sensores', [SensorController::class, 'store']);
Route::post('/sensores', [SensorController::class, 'store']);
Route::get('/sensores', [SensorController::class, 'index']);
Route::get('/prueba', function () {
    return ['mensaje' => 'Ruta funcionando'];
});

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/prueba', function () {
    return response()->json([
        'mensaje' => '¡API funciona!',
        'fecha' => now(),
    ]);
});

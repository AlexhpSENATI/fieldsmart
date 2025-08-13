<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Log;


Route::post('/sensores', function (Request $request) {
Log::info('Datos recibidos:', $request->all());
  // Para ver los datos en el log
    return response()->json(['status' => 'ok', 'data' => $request->all()]);
    
});

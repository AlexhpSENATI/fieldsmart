<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SensorController extends Controller
{
    public function store(Request $request)
    {
        Log::info('Datos recibidos del ESP32', $request->all());

        return response()->json(['status' => 'ok']);
    }
}

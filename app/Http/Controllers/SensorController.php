<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SensorController extends Controller
{
    public function store(Request $request)
    {
        // Validar datos
        $request->validate([
            'temperature' => 'required|numeric',
            'humidity' => 'required|numeric',
        ]);

        // Responder
        return response()->json([
            'success' => true,
            'message' => 'Datos recibidos correctamente',
            'data' => [
                'temperature' => $request->temperature,
                'humidity' => $request->humidity
            ]
        ]);
    }
}

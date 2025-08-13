<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SensorController extends Controller
{
    public function store(Request $request)
    {
        // Validar datos recibidos xd
        $request->validate([
            'temperature' => 'required|numeric',
            'humidity' => 'required|numeric'
        ]);


        return response()->json([
            'success' => true,
            'message' => 'Datos recibidos correctamente',
            'data' => [
                'temperature' => $request->temperature,
                'humidity' => $request->humidity
            ]
        ], 200);
    }
}

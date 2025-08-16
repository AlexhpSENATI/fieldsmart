<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Sensor;


class SensorController extends Controller {
    public function store(Request $request) {
        Sensor::create($request->all());
        return response()->json(['status' => 'ok']);
    }
    public function index() {
        return Sensor::latest()->first();
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Department;

class DepartmentController extends Controller
{
    public function index(){
        $department = Department::all();
        return response()->json([
            'status' => 200,
            'department' => $department
        ]);
    }
}

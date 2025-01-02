<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdministratorController extends Controller
{
    public function show()
    {
        $users = DB::table('users')->get();
        return Inertia::render('MasterAdmin/admin/AddAdmin', ['users' => $users]);
    }
    public function create(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|unique:users|email',
            'type' => 'required',
        ]);
        return $validated;
        // return redirect('/admin/administrators/create');
    }
}

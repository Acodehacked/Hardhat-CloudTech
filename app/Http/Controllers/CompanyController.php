<?php

namespace App\Http\Controllers;

use App\Http\Resources\CompanyResource;
use App\Models\Companies;
use App\Models\Images;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CompanyController extends Controller
{
    public function index(Request $request)
    {
        $companies = CompanyResource::collection(Companies::all());
        // $companies = Companies::leftJoin();
        return Inertia::render('MasterAdmin/Admins', ['companies' => $companies]);
    }
    public function show()
    {
        $users = DB::table('users')->get();
        return Inertia::render('MasterAdmin/admin/AddAdmin', ['users' => $users]);
    }
    public function store(Request $request)
    {
        // Validate incoming request data
        $request->validate([
            'name'        => 'required|string|max:255',
            'country'     => 'required|string|max:255',
            'city'        => 'nullable|string|max:255',
            'address'     => 'required|string|max:2000',
            'email'       => 'required|email|max:100',
            'phone'       => 'required|string|max:20',
            'website'     => 'nullable|url|max:255',
            'image'    => 'required|string|max:500', // Ensure the image exists in the images table
            'description' => 'nullable|string|max:1000',
            'since'       => 'required|integer|digits:4|min:1900|max:' . date('Y'), // Validate year
            'code'        => 'required|string|unique:companies,code|max:50',
        ]);

        // Create the company
        $company = Companies::create([
            'name'        => $request->input('name'),
            'country'     => $request->input('country'),
            'city'        => $request->input('city'),
            'address'     => $request->input('address'),
            'email'       => $request->input('email'),
            'phone'       => $request->input('phone'),
            'website'     => $request->input('website'),
            'image'    => $request->input('image'),
            'description' => $request->input('description'),
            'since'       => $request->input('since'),
            'code'        => $request->input('code'),
        ]);
        // Return a response
        return redirect()->route('admininistrators.index')->with(['success', 'Company created successfully!']);
    }
}

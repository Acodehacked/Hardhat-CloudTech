<?php

namespace App\Http\Controllers;

use App\Enum\RolesEnum;
use App\Http\Controllers\Controller;
use App\Http\Resources\CompanyResource;
use App\Models\Companies;
use Illuminate\Support\Str;
use App\Models\Images;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class CompanyController extends Controller
{
    public function index(Request $request)
    {
        $companies = CompanyResource::collection(Companies::query()->paginate(2));
        // $companies = Companies::leftJoin();
        return Inertia::render('MasterAdmin/Admins', ['companies' => $companies]);
    }
    public function show()
    {
        $users = DB::table('users')->get();
        return Inertia::render('MasterAdmin/admin/AddAdmin', ['users' => $users]);
    }
    public function delete($company)
    {
        $course = Companies::findOrFail($company);
        $course->delete();

        return redirect()->back()->with('success','Deleted Successfully');
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
            'cc'          => 'required|string|max:10',
            'password'    => 'required|string|min:8|max:32|regex:/[a-z]/|regex:/[A-Z]/|regex:/[0-9]/|regex:/[@$!%*?&]/|',
            'confirmpassword' => 'required|same:password|max:32',
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
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'cc' => $request->input('cc','91'),
            'phone' => $request->input('phone'),
            'email_verified_at' => now(),
            'password' => $password ??= Hash::make($request->input('password')),
            'remember_token' => Str::random(10),
        ]);
        $user->assignRole(RolesEnum::Company);
        // Return a response
        return redirect()->route('admininistrators.index')->with('success', 'Company created successfully!');
    }
    public function table(Request $request)
    {
        $sortColumn = $request->input('sort', 'id'); // Default to sorting by ID
        $sortDirection = $request->input('direction', 'asc'); // Default ascending
        $page = (int) $request->input('page', 1);
        $perPage = $request->input('perPage', 10);
        $companies = CompanyResource::collection(Companies::orderBy($sortColumn, $sortDirection)->paginate($perPage, ['id', 'code', 'email', 'name', 'phone', 'created_at', 'since'], 'page', $page + 1));
        // $companies = Companies::leftJoin();
        return response()->json($companies);
    }
}

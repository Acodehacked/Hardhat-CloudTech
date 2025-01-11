<?php

namespace App\Http\Controllers\Utils;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImageUploaderController extends Controller
{
    public function store(Request $request)
    {
        $validate = $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:3000000',
        ]);
        if ($validate) {
            $imageName = $request->request->get('name') . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
            // return response()->json(['image' => $imageName]);
            return back()->withErrors('Please Upload Image size less than 2mb');
            // return back()->with(['success',$imageName]);
        } else {
            return back()->withErrors('Please Upload Image size less than 2mb');
        }
    }
}

<?php

namespace App\Http\Controllers\Utils;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImageUploaderController extends Controller
{
    public function store(Request $request){
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $imageName = $request->request->get('name').'.'.$request->image->extension();  
        $request->image->move(public_path('images'), $imageName);
        return response()->json(['success'=>'You have successfully upload image.','image'=>$imageName]);
    }
}

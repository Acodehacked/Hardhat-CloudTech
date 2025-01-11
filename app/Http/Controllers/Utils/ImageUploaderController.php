<?php

namespace App\Http\Controllers\Utils;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImageUploaderController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
        ]);

        // Store the image in the 'public/uploads' directory
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            return response()->json(['imageName' => basename($path)],200); // Return the file name
        }

        return response()->json(['error' => 'No file uploaded'], 400);
    }
}

<?php

namespace App\Http\Controllers\Utils;

use App\Http\Controllers\Controller;
use App\Http\Resources\ImageResource;
use App\Models\Image as ModelsImage;
use App\Models\Images;
use Illuminate\Http\Request;
use Intervention\Image\Encoders\AutoEncoder;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image as InterventionImage;

class ImageUploaderController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
        ]);

        // Store the image in the 'public/uploads' directory
        if ($request->hasFile('image')) {
            $file = $request->file('image');

            // Generate a timestamp-based unique filename
            $timestamp = now()->timestamp;
            $originalName = $timestamp . '.' . $file->getClientOriginalExtension();

            // Save the original image
            $originalPath = $file->storeAs('images/original', $originalName, 'public');

            // Create and save the small version
            $smallImage = InterventionImage::read($file)
                ->resize(200, 200, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })
                ->encode(new AutoEncoder('jpg',40)); // Compress to 40% quality

            $smallPath = 'images/small/' . $originalName;
            Storage::disk('public')->put($smallPath, $smallImage);

            // Create and save the medium version
            $mediumImage = InterventionImage::read($file)
                ->resize(600, 600, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })
                ->encode(new AutoEncoder('jpg',75)); // Compress to 75% quality

            $mediumPath = 'images/medium/' . $originalName;
            Storage::disk('public')->put($mediumPath, $mediumImage);

            // Save paths to the database
            // Return the ImageResource as JSON
            return redirect()->back()->with(['success'=>$originalName]);
        }

        return redirect()->back()->withErrors(['image' => 'No file uploaded']);
        // return response()->json(['error' => 'No file uploaded'], 400);
    }
}
